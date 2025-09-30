import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Server, Code } from "lucide-react"
import Link from "next/link"

const softwareProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies for optimal performance.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Scalable chat application with WebSocket support, user authentication, and message encryption. Supports group chats and file sharing.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/chat-application-interface.png",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with kanban boards, time tracking, and team collaboration features. Designed for remote teams.",
    tags: ["Vue.js", "Express", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/kanban-board-project-management.jpg",
  },
]

const hardwareProjects = [
  {
    title: "Home Lab Server Cluster",
    description:
      "Multi-node Proxmox cluster running various services including media server, NAS, home automation, and development environments. Features automated backups and monitoring.",
    tags: ["Proxmox", "Docker", "Kubernetes", "TrueNAS"],
    specs: "3x Dell R720, 192GB RAM total, 40TB storage",
    image: "/server-rack-datacenter.jpg",
  },
  {
    title: "Network Infrastructure",
    description:
      "Enterprise-grade home network with VLANs, pfSense firewall, managed switches, and UniFi access points. Includes network monitoring and security features.",
    tags: ["pfSense", "UniFi", "VLANs", "Networking"],
    specs: "pfSense router, 3x managed switches, 4x APs",
    image: "/network-equipment-switches.jpg",
  },
  {
    title: "Raspberry Pi Cluster",
    description:
      "Kubernetes cluster built with Raspberry Pi 4s for learning and experimentation. Runs containerized applications and CI/CD pipelines.",
    tags: ["Raspberry Pi", "K3s", "ARM", "IoT"],
    specs: "6x Raspberry Pi 4 (8GB), custom cooling",
    image: "/raspberry-pi-cluster-computing.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Code className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Software Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-balance">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                        <Link href={project.github} target="_blank">
                          <Github size={16} className="mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Hardware Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Server className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Hardware Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-balance">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-mono bg-secondary/50 p-2 rounded">
                        {project.specs}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
