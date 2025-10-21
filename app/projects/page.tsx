import { SoftwareProjectCard, HardwareProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Github, Server, Code, DollarSign, Wrench, Music, HardDrive, Network, Shield } from "lucide-react"
import Link from "next/link"

const softwareProjects = [
  {
    title: "WageWise",
    description:
      "Comprehensive wage and time tracking application designed to help employees and freelancers manage their work hours, calculate earnings, and track payment schedules efficiently.",
    tags: ["TypeScript", "Time Tracking", "Finance", "Mobile App"],
    github: "https://github.com/LegitKnots/WageWise",
    demo: null,
    icon: DollarSign,
  },
  {
    title: "API Tester",
    description:
      "Developer tool for testing and debugging RESTful APIs. Features request building, response inspection, and endpoint testing to streamline API development and integration workflows.",
    tags: ["TypeScript", "API", "Dev Tools", "Testing", "Mobile App"],
    github: "https://github.com/LegitKnots/APITester",
    demo: null,
    icon: Wrench,
  },
  {
    title: "YouTube Music Puller",
    description:
      "Automated tool for extracting and downloading music content from YouTube. Streamlines the process of converting music libraries with batch processing capabilities.",
    tags: ["TypeScript", "YouTube API", "Automation", "Media"],
    github: "https://github.com/LegitKnots/YouTube-Music-Puller",
    demo: null,
    icon: Music,
  },
]

const hardwareProjects = [
  {
    title: "Consolidated Proxmox Server",
    description:
      "Single consolidated server running Proxmox as the host OS, managing multiple VMs and containers for all projects and services. Hosts Node.js applications, Nextcloud for file sync, Immich for photo management, and a dedicated AI VM running local LLMs for development and experimentation.",
    tags: ["Proxmox", "RAID", "Docker", "LXC", "AI/LLM", "PM2"],
    specs: "AMD Ryzen 7 3700X | 64GB Corsair LPX RAM | RTX 3080 | 8x 4TB SAS (RAIDZ2) | Samsung 970 EVO Plus Cache | Dual Crucial M550 Boot | LSI SAS Card | TP-Link 10GbE | Rackowl 4U Chassis",
    icon: HardDrive,
  },
  {
    title: "Home Network Infrastructure",
    description:
      "Enterprise-grade home network with segmented VLANs for IoT, personal devices, and server infrastructure. Features pfSense firewall with 10GbE connectivity to UniFi switch aggregation, cascading to PoE switch for access points and standard devices. ATT Fiber with IP passthrough provides the WAN connection. Strict firewall rules isolate IoT devices while allowing controlled access to server VLAN.",
    tags: ["pfSense", "UniFi", "VLANs", "10GbE", "SFP+", "WireGuard"],
    specs: "Protectli FW4C (upgraded 16GB RAM, Samsung 870 EVO) | USW-Aggregation (8-port SFP+) | USW-16-PoE | UAP-AC-PRO | ATT Fiber",
    icon: Network,
  },
  {
    title: "Cloud Security Gateway",
    description:
      "Cloud-hosted pfSense router serving as a secure public gateway for home services. Runs Suricata IDS/IPS for threat detection, HAProxy for intelligent traffic routing, and automated Let's Encrypt SSL certificate management with ACME. WireGuard VPN tunnel back to home network with strict IP allowlist ensures only authorized traffic reaches internal servers.",
    tags: ["pfSense", "Suricata", "HAProxy", "WireGuard", "Let's Encrypt", "Cloud Security"],
    specs: "Cloud-hosted pfSense | Suricata IDS/IPS | HAProxy Load Balancer | ACME/LE SSL | WireGuard VPN",
    icon: Shield,
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute -top-1/2 -right-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A collection of software applications and hardware setups I've built. Each project represents a learning
              journey and a solution to real-world problems.
            </p>
          </div>

          {/* Software Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-primary mt-1" size={28} />
              <h2 className="text-3xl font-bold">Software Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project, index) => (
                <SoftwareProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  demo={project.demo}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>

          {/* Hardware Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Server className="text-primary mt-1" size={28} />
              <h2 className="text-3xl font-bold">Hardware Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareProjects.map((project, index) => (
                <HardwareProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  specs={project.specs}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>

          {/* Footer with Website Source Code Link */}
          <div className="mt-20 pt-12 border-t border-border">
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="text-xl font-semibold">Want to see how this site was built?</h3>
              <p className="text-muted-foreground max-w-2xl">
                This portfolio website is built with Next.js, TypeScript, and Tailwind CSS. Check out the source code on GitHub!
              </p>
              <Button variant="outline" asChild className="gap-2">
                <Link href="https://github.com/LegitKnots/Personal-Website-Portfolio" target="_blank">
                  <Github size={20} />
                  View Website Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
