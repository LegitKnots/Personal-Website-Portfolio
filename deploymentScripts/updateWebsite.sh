#!/usr/bin/env bash
# updateWebsite
# Update Next.js app if new commits exist, then rebuild & reload with PM2.
# Log-friendly output only (stdout/stderr) — let crontab handle the file.

set -euo pipefail

APP_DIR="/root/alexphillipson.com"
PM2_APP_NAME="personalWebsite"
LOG_FILE="/var/log/updateWebsite.log"   # Used only for --view-log / --tail-log helpers

# ---------- Logging helpers ----------
ts() { date "+%Y-%m-%d %H:%M:%S %Z"; }
info() { echo "[INFO  $(ts)] $*"; }
warn() { echo "[WARN  $(ts)] $*" >&2; }
err()  { echo "[ERROR $(ts)] $*" >&2; }

trap 'code=$?; [[ $code -ne 0 ]] && err "Failed at line $LINENO (exit $code)"; exit $code' ERR

usage() {
  cat <<EOF
Usage: updateWebsite [options]

No options: performs update/build/reload if origin/main has new commits.

Options:
  --view-log        Open the cron log file in your pager (does not run deploy)
  --tail-log        Tail the cron log file (does not run deploy)
  --status          Show local/remote SHAs and pending changes, then exit
  -h, --help        Show this help
EOF
}

open_log() {
  if [[ ! -f "$LOG_FILE" ]]; then
    warn "Log file not found at $LOG_FILE"
    exit 1
  fi
  ${PAGER:-less -R} "$LOG_FILE"
}

tail_log() {
  if [[ ! -f "$LOG_FILE" ]]; then
    warn "Log file not found at $LOG_FILE"
    exit 1
  fi
  tail -n 200 -f "$LOG_FILE"
}

status_only=false

case "${1:-}" in
  --view-log) open_log; exit 0 ;;
  --tail-log) tail_log; exit 0 ;;
  --status)   status_only=true ;;
  -h|--help)  usage; exit 0 ;;
  "")         ;; # no args -> normal run
  *)          warn "Unknown option: $1"; usage; exit 2 ;;
esac

# ---------- Preconditions ----------
command -v git  >/dev/null || { err "git not found in PATH"; exit 1; }
command -v npm  >/dev/null || { err "npm not found in PATH"; exit 1; }
command -v pm2  >/dev/null || { err "pm2 not found in PATH"; exit 1; }

# ---------- Main ----------
info "Starting deployment routine for $PM2_APP_NAME in $APP_DIR"
cd "$APP_DIR"

info "Fetching latest commits from origin/main..."
git fetch --prune origin main

LOCAL_SHA="$(git rev-parse HEAD)"
REMOTE_SHA="$(git rev-parse origin/main)"
info "Local SHA : $LOCAL_SHA"
info "Remote SHA: $REMOTE_SHA"

if $status_only; then
  if [[ "$LOCAL_SHA" = "$REMOTE_SHA" ]]; then
    info "Status: up-to-date."
  else
    info "Status: updates available."
    info "Changed files between local and remote:"
    git diff --name-only "$LOCAL_SHA" "$REMOTE_SHA" || true
  fi
  exit 0
fi

if [[ "$LOCAL_SHA" = "$REMOTE_SHA" ]]; then
  info "Already up to date. Exiting."
  exit 0
fi

info "Updating working tree to origin/main..."
git reset --hard origin/main

# Decide whether to (re)install dependencies
need_install=false
if [[ ! -d node_modules ]]; then
  need_install=true
else
  if git diff --name-only "$LOCAL_SHA" "$REMOTE_SHA" | grep -qE \
     '(^|/)(package\.json|package-lock\.json|pnpm-lock\.yaml|yarn\.lock)$'; then
    need_install=true
  fi
fi

if $need_install; then
  info "Dependencies changed or missing. Installing..."
  if [[ -f package-lock.json ]]; then
    npm ci --no-audit --no-fund
  else
    npm install --no-audit --no-fund
  fi
else
  info "Dependencies unchanged. Skipping install."
fi

info "Building Next.js app..."
npm run build

# Restart with PM2
if pm2 describe "$PM2_APP_NAME" >/dev/null 2>&1; then
  info "Reloading PM2 app: $PM2_APP_NAME"
  pm2 reload "$PM2_APP_NAME" --update-env
else
  info "Starting PM2 app: $PM2_APP_NAME"
  pm2 start npm --name "$PM2_APP_NAME" -- start
fi

pm2 save
info "Deployment complete."
