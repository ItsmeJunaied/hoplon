import { Shield, Smartphone, Server, Activity, Database, Globe } from "lucide-react"
import ProductCard from "./product-card"

export default function ProductsSection() {
  const products = [
    {
      icon: Shield,
      title: "Email Security and Anti-phishing",
      description:
        "Protect your inbox from all kinds of email threats with advanced filtering, anti-phishing technology, and malicious attachment detection to enhance employee awareness.",
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description:
        "Secure enterprise mobile devices with MDM solutions for monitoring, app management, remote wipe capabilities, and secure containers for sensitive data.",
    },
    {
      icon: Server,
      title: "Endpoint Security",
      description:
        "Comprehensive protection for all endpoints with real-time threat detection, automated response, and advanced behavioral analysis to identify threats, malware, and intrusions.",
    },
    {
      icon: Activity,
      title: "Tracking Software",
      description:
        "Monitor and track sensitive assets with real-time location tracking, movement history, and custom alerts to help manage physical assets in your organization.",
    },
    {
      icon: Database,
      title: "AI-Driven Automated Red Teaming",
      description:
        "Leverage AI to continuously test your security posture with automated attack simulations that mimic human attackers.",
    },
    {
      icon: Globe,
      title: "Deep web and Dark Web Monitoring",
      description:
        "Continuous monitoring of deep and dark web forums for your organization's data, with regular reporting and alerts for potential data leaks or credential exposure.",
    },
  ]

  return (
    <section id="products" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full mb-8">Our Products</div>
        <h2 className="text-4xl font-bold mb-8">
          Our Products Can Assist You in Addressing Your Cybersecurity Challenges.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} icon={product.icon} title={product.title} description={product.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
