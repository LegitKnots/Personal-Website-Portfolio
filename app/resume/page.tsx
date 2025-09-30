import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Wrench } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 animate-fade-in-up">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">Resume</h1>
              <p className="text-lg text-muted-foreground">My professional experience and qualifications</p>
            </div>
            {/* <Button size="lg" className="bg-primary hover:bg-primary/90 w-fit">
              <Download className="mr-2" size={20} />
              Download PDF
            </Button> */}
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {/* EchoFives */}
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Chief Technology Officer | Lead of Software Operations
                    </h3>
                    <p className="text-primary font-medium">EchoFives, LLC - Atlanta, GA | Hybrid</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
                    Sep 2025 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Leading development of scalable web and mobile applications for small businesses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Designing infrastructure with cloud services, containerization, and secure APIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Overseeing product roadmap, technical decisions, and business strategy alongside the CEO.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Linode</span>
                </div>
              </Card>

              {/* CycleGear */}
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Sales Associate | Key Holder
                    </h3>
                    <p className="text-primary font-medium">CycleGear – Smyrna, GA</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
                    May 2025 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Provided customer service and sales support specializing in motorcycle gear and accessories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Assisted customers with product selection, fitment, and safety guidance while meeting sales goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Performed key holder responsibilities including opening/closing procedures, cash handling, and store security.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Customer Service</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Retail Sales</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Teamwork</span>
                </div>
              </Card>

              {/* West Chatham Warning Devices */}
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Installation Technician
                    </h3>
                    <p className="text-primary font-medium">West Chatham Warning Devices – Alpharetta, GA</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
                    Apr 2024 – Mar 2025
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Installed and configured emergency vehicle lighting, sirens, communication systems, camera systems,
                      and K9/prisoner transport cages.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Worked in a fast-paced shop environment performing complete upfitting according to safety standards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conducted troubleshooting, diagnostics, and repairs to ensure reliable system performance.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Electronics</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Troubleshooting</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Wiring</span>
                </div>
              </Card>

              {/* AJP Networks */}
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Chief Executive Officer | Software Development & Operations
                    </h3>
                    <p className="text-primary font-medium">AJP Networks – Atlanta, GA | Hybrid</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
                    Jan 2023 – Jan 2024
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Contracted to develop custom software solutions tailored for client needs, delivering robust and
                      reliable systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Designed and implemented an integrated software + hardware system for a critical data entry and
                      processing project with Elevate Solutions Group and CooperVision.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Managed day-to-day business operations including finances, tax preparation, client communications,
                      and marketing support.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Full-Stack Dev</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Business Ops</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Client Relations</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      General Education - Focus on Software
                    </h3>
                    <p className="text-primary font-medium">Campbell High School</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap sm:text-right shrink-0">
                    2018 - 2022
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Graduated with a high school diploma. Focused on understanding the basics of software engineering
                  throughout.
                </p>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Server Hardware</h3>
                <p className="text-sm text-muted-foreground">
                  Building, upgrading, and maintaining reliable server systems for both production and lab environments.
                </p>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Racking & Cabling</h3>
                <p className="text-sm text-muted-foreground">
                  Organizing rack layouts and structured cabling for efficient, scalable, and professional data center
                  setups.
                </p>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Troubleshooting</h3>
                <p className="text-sm text-muted-foreground">
                  Diagnosing and resolving hardware, software, and network issues under pressure to minimize downtime.
                </p>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Networking & Security</h3>
                <p className="text-sm text-muted-foreground">
                  Configuring switches, firewalls, and secure VPNs to ensure performance, reliability, and protection.
                </p>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Virtualization</h3>
                <p className="text-sm text-muted-foreground">
                  Deploying and managing virtual machines and clusters for efficient resource utilization and flexibility.
                </p>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing system and network monitoring to detect issues early and maintain high availability.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
