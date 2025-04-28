import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-16 bg-transparent text-white rounded-[30px] px-10"
      style={{
        backgroundImage: "linear-gradient(194deg, #a020f0 -28%, #000000 73%)",
      }}
    >
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center text-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">Get Started Today!</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Protect your organization with our comprehensive cybersecurity
            solutions. Whether you need penetration testing, vulnerability
            assessment, or security consulting, our team of experts is ready to
            help.
          </p>
          <Link
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-3xl font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
