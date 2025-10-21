export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 border-t border-border/50 overflow-hidden">
      {/* Gradient glow from bottom */}
      <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-24 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Alexander Phillipson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

