import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function PartnersSection() {
  const partners = [
    { name: "IBM", logo: "/ibm-logo.jpg" },
    { name: "Mimecast", logo: "/Acronis.jpg" },
    { name: "LogRhythm", logo: "/Bitdefender.png" },
    { name: "SentinelOne", logo: "/Checkpoint.jpg" },
    { name: "Bitdefender", logo: "/CyberRanges.png" },
    { name: "Bitdefender", logo: "/Ibm-Logo.png" },
    { name: "Bitdefender", logo: "/Ingram-Micro.jpg" },
    { name: "Bitdefender", logo: "/Kron-Tech.jpg" },
    { name: "Bitdefender", logo: "/Lookout.jpg" },
    { name: "Bitdefender", logo: "/Microsoft.jpg" },
    { name: "Bitdefender", logo: "/Mimecast.jpg" },
    { name: "Bitdefender", logo: "/ninja-one.jpg" },
    { name: "Bitdefender", logo: "/Purdue-University.png" },
    { name: "Bitdefender", logo: "/rippling.jpg" },
    { name: "Bitdefender", logo: "/Threatlocker.jpg" },
    { name: "Bitdefender", logo: "/Trend-Micro.jpg" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-[#FF0000] text-white px-6 py-2 rounded-full mb-8">
          Our Partners
        </div>
        <h2 className="text-3xl font-bold mb-12">Our Trusted Partners</h2>

        <div
          className="p-10 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(194deg, #a020f0 -28%, #000000 73%)",
          }}
        >
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg mx-6 flex items-center justify-center w-40 h-20">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
