import { SimpleExperienceCard, MultiPositionExperienceCard } from "@/components/experience-card";
import { DetailedSkillCard } from "@/components/detailed-skill-card";
import { EducationCard } from "@/components/education-card";
import { Briefcase, GraduationCap, Wrench } from "lucide-react";

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
              <Briefcase className="text-primary mt-1" size={28} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {/* DataBank */}
              <SimpleExperienceCard
                title="Data Center Technician"
                company="DataBank"
                location="Atlanta, GA | On-Site"
                dates="Nov 2025 – Present"
                descriptions={[
                  "Monitoring data center environmental systems, power distribution, and facility operations to ensure optimal performance.",
                  "Assisting with hardware troubleshooting and providing support for server installations and basic maintenance tasks.",
                  "Supporting remote hands operations for customers and maintaining compliance with data center procedures and standards."
                ]}
                skills={["Facilities Monitoring", "Equipment Support", "Data Center Ops", "Troubleshooting"]}
              />

              {/* EchoFives */}
              <MultiPositionExperienceCard
                companyName="EchoFives, LLC"
                companyLocation="Atlanta, GA | Hybrid"
                companyDates="Sep 2025 – Present"
                positions={[
                  {
                    title: "Lead of Software Operations",
                    dates: "Sep 2025 – Present",
                    descriptions: [
                      "Leading development of scalable web and mobile applications for small businesses.",
                      "Designing infrastructure with cloud services, containerization, and secure APIs."
                    ],
                    skills: ["React", "Node.js", "TypeScript"]
                  },
                  {
                    title: "Chief Technology Officer",
                    dates: "Sep 2025 – Present",
                    descriptions: [
                      "Overseeing product roadmap, technical decisions, and business strategy alongside the CEO.",
                      "Driving the company's overall technology strategy and execution for scalable growth."
                    ],
                    skills: ["Strategy", "Leadership", "Linode"]
                  }
                ]}
              />

              {/* CycleGear */}
              <MultiPositionExperienceCard
                companyName="CycleGear"
                companyLocation="Smyrna, GA"
                companyDates="May 2025 – Present"
                positions={[
                  {
                    title: "Key Holder",
                    dates: "Sep 2025 – Present",
                    descriptions: [
                      "Performed key holder responsibilities including opening/closing procedures, cash handling, and store security.",
                      "Assisted with training new associates and maintained store operations during manager absence."
                    ],
                    skills: ["Leadership", "Store Operations"]
                  },
                  {
                    title: "Sales Associate",
                    dates: "May 2025 – Present",
                    descriptions: [
                      "Provided customer service and sales support specializing in motorcycle gear and accessories.",
                      "Assisted customers with product selection, fitment, and safety guidance while meeting sales goals."
                    ],
                    skills: ["Customer Service", "Retail Sales", "Teamwork"]
                  }
                ]}
              />

              {/* West Chatham Warning Devices */}
              <SimpleExperienceCard
                title="Installation Technician"
                company="West Chatham Warning Devices"
                location="Alpharetta, GA"
                dates="Apr 2024 – Mar 2025"
                descriptions={[
                  "Installed and configured emergency vehicle lighting, sirens, communication systems, camera systems, and K9/prisoner transport cages.",
                  "Worked in a fast-paced shop environment performing complete upfitting according to safety standards.",
                  "Conducted troubleshooting, diagnostics, and repairs to ensure reliable system performance."
                ]}
                skills={["Electronics", "Troubleshooting", "Wiring"]}
              />

              {/* AJP Networks */}
              <SimpleExperienceCard
                title="Chief Executive Officer | Software Development & Operations"
                company="AJP Networks"
                location="Atlanta, GA | Hybrid"
                dates="Jan 2023 – Jan 2024"
                descriptions={[
                  "Contracted to develop custom software solutions tailored for client needs, delivering robust and reliable systems.",
                  "Designed and implemented an integrated software + hardware system for a critical data entry and processing project with Elevate Solutions Group and CooperVision.",
                  "Managed day-to-day business operations including finances, tax preparation, client communications, and marketing support."
                ]}
                skills={["Full-Stack Dev", "Business Ops", "Client Relations"]}
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary mt-1" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <EducationCard
                degree="General Education - Focus on Software"
                institution="Campbell High School"
                dates="2018 - 2022"
                description="Graduated with a high school diploma. Focused on understanding the basics of software engineering throughout."
              />
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-primary mt-1" size={28} />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <DetailedSkillCard
                title="Server Hardware"
                description="Building, upgrading, and maintaining reliable server systems for both production and lab environments."
              />
              <DetailedSkillCard
                title="Racking & Cabling"
                description="Organizing rack layouts and structured cabling for efficient, scalable, and professional data center setups."
              />
              <DetailedSkillCard
                title="Troubleshooting"
                description="Diagnosing and resolving hardware, software, and network issues under pressure to minimize downtime."
              />
              <DetailedSkillCard
                title="Networking & Security"
                description="Configuring switches, firewalls, and secure VPNs to ensure performance, reliability, and protection."
              />
              <DetailedSkillCard
                title="Virtualization"
                description="Deploying and managing virtual machines and clusters for efficient resource utilization and flexibility."
              />
              <DetailedSkillCard
                title="Monitoring"
                description="Implementing system and network monitoring to detect issues early and maintain high availability."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
