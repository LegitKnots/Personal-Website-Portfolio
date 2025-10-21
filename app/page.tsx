import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance animate-fade-in-up">
                Hi, I'm <span className="text-primary">Alex</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light animate-fade-in-up delay-100">
                Software Engineer & Hardware Enthusiast
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-fade-in-up delay-200">
                I enjoy creating things that work. This includes writing
                software, managing servers, and troubleshooting hardware and
                networking. I aim to make systems reliable and practical,
                whether it’s a web app, a homelab setup, or a piece of hardware
                I’ve fine-tuned myself. Outside of technology, I am passionate
                about motorcycles and mechanics. I spend a lot of time riding,
                working on bikes, and learning how to optimize their performance
                and service. For me, whether it’s code or a machine, it revolves
                around problem-solving, hands-on learning, and ensuring
                everything runs well.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/resume">See Resume</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent"
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6 animate-fade-in-up delay-400">
                <a
                  href="https://github.com/LegitKnots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-phillipson-26699921a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:alex@alexphillipson.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance text-foreground">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a software engineer and hardware tinkerer. I enjoy building
                things that work, both online and in the real world. My journey
                into tech began with a curiosity about how systems and machines
                fit together. It has evolved into a career centered on creating
                reliable, scalable, and practical solutions.
              </p>

              <p>
                I enjoy working across the stack. I code web applications, set
                up servers, manage infrastructure, and troubleshoot networks.
                For me, the process of solving problems is just as important as
                the final product.
              </p>

              <p>
                When I'm not working with code or hardware, you’ll usually find
                me on a motorcycle or in the garage. Riding and fixing things
                fuel the same curiosity and drive that brought me into tech. I
                enjoy learning how things work, pushing performance, and the
                craft of building and maintaining systems.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What I'm Into
                </h3>
                 <ul className="space-y-3">
                   <li className="flex items-start gap-3 group">
                     <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                       ▸
                     </span>
                     <span>
                       Developing scalable web applications with modern
                       frameworks
                     </span>
                   </li>
                   <li className="flex items-start gap-3 group">
                     <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                       ▸
                     </span>
                     <span>
                       Running and maintaining homelab servers and infrastructure
                     </span>
                   </li>
                   <li className="flex items-start gap-3 group">
                     <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                       ▸
                     </span>
                     <span>
                       Exploring networking, virtualization, and containerization
                     </span>
                   </li>
                   <li className="flex items-start gap-3 group">
                     <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                       ▸
                     </span>
                     <span>
                       Continuously learning new technologies and improving my
                       craft
                     </span>
                   </li>
                   <li className="flex items-start gap-3 group">
                     <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                       ▸
                     </span>
                     <span>
                       Riding and working on motorcycles, with a focus on
                       mechanics and performance
                     </span>
                   </li>
                 </ul>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Experience Highlights
                </h3>
                <p>
                  I’ve worked on a variety of projects, including software
                  systems for businesses, custom infrastructure setups, and
                  personal passion projects at home. Throughout this journey,
                  I’ve teamed up with others, taken on leadership roles, and
                  managed projects from start to finish. Each experience has
                  helped me grow my skills, solve real problems, and create
                  things I take pride in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Skills Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance text-foreground">
        Skills & Technologies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">Frontend</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>React / Next.js</li>
              <li>React Native</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Backend - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">Backend</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Node.js / Express</li>
              <li>Firebase (Firestore & Auth)</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

        {/* DevOps - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">DevOps & Tools</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Docker</li>
              <li>Git / GitHub</li>
              <li>Linux Systems</li>
              <li>Homelab Management</li>
            </ul>
          </div>
        </div>

        {/* Hardware - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">Hardware & Networking</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Server Hardware</li>
              <li>Racking & Cabling</li>
              <li>pfSense</li>
              <li>Proxmox & Virtualization</li>
            </ul>
          </div>
        </div>

        {/* Cloud - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">Cloud</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Linode</li>
              <li>Firebase Hosting</li>
              <li>Cloud Architecture</li>
            </ul>
          </div>
        </div>

        {/* Other - Gradient */}
        <div className="group relative overflow-hidden p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-primary mb-4">Other</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Troubleshooting</li>
              <li>Monitoring</li>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
