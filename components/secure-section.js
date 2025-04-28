import Link from "next/link"

export default function SecureSection() {
  return (
    <section className="py-16  text-white mb-20 mt-24 rounded-3xl" style={{
      backgroundImage: "linear-gradient(194deg, #a020f0 -28%, #000000 73%)",
    }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">We're Here to Secure Your Hard Work</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Protect your organization with advanced security solutions. Our team of highly trained and certified
          professionals will implement robust security measures to protect your digital assets.
        </p>
        <Link href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium">
          Get Started
        </Link>
      </div>
    </section>
  )
}
