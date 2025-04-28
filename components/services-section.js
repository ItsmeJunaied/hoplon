import {
  Shield,
  Globe,
  Search,
  ShieldAlert,
  Activity,
  Database,
  FileDigit,
} from "lucide-react";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Offensive Security",
      description:
        "How effective is your organization's cybersecurity? Identify and exploit vulnerabilities of your own organization's cybersecurity before attackers.",
    },
    {
      icon: Globe,
      title: "Deep web and Dark Web",
      description:
        "Unlike the visible surface web or open web, regular search engines can't find deep web sites. Hackers with malicious intent use the hidden web even though more than 90% of all websites are on deep web.",
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description:
        "Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world cyberattacks to find vulnerabilities of your system.",
    },
    {
      icon: ShieldAlert,
      title: "Attack Surface Management",
      description:
        "ASM involves the ongoing identification, monitoring, and control of both internal and external internet-connected assets to detect potential attack vectors and vulnerabilities.",
    },
    {
      icon: Shield,
      title: "Cyber Security Compliances",
      description:
        "Can cybercriminals exploit your system? Run Pentesting or Ethical Hacking to mock real-world cyberattacks to find vulnerabilities of your system.",
    },
    {
      icon: Activity,
      title: "Incident Response",
      description:
        "Cybersecurity incident response involves the procedures and tools an organization uses to identify and address cyberthreats, security breaches, or cyberattacks.",
    },
    {
      icon: Database,
      title: "Vulnerability Management",
      description:
        "Vulnerability management is an ongoing, proactive, and often automated procedure that safeguards your computer systems, networks, and enterprise applications against cyberattacks and data breaches.",
    },
    {
      icon: Shield,
      title: "Cyber Security Consultation and Training",
      description:
        "Vulnerability management is an ongoing, proactive, and often automated procedure that safeguards your computer systems, networks, and enterprise applications against cyberattacks and data breaches.",
    },
    {
      icon: FileDigit,
      title: "Digital Forensic Investigation",
      description:
        "Digital forensics is a specialized field within forensic science dedicated to the identification, retrieval, examination, and documentation of electronically stored information. The presence of electronic evidence is prevalent in nearly all criminal cases, underscoring the vital role that digital forensics plays in solving and prosecuting crimes.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full mb-8">
          Our Services
        </div>
        <h2 className="text-4xl font-bold mb-16">
          High Tech Cybersecurity for the Smart Generation
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
    "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
