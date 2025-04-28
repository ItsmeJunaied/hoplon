import { Globe, Trophy, TrendingUp, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl mb-12 text-start">About Us</h2>
        <div className="text-3xl mb-6 text-start bg-red-600 h-2 w-48"></div>
        <p className="text-lg mb-10  mx-auto">
          At Hoplon Infosec, our extensive over decade of experience enables us to effectively combat the present-day
          cybersecurity challenges. With our innovative deep web & dark web monitoring, cyber threat intelligence,
          attack surface management, risk management, vulnerability management, incident response, penetration testing,
          red teaming, threat intelligence, blackchain & deception, consulting services, and cybersecurity training, we
          provide unmatched guidance to organizations across industries, regions, and the globe, regardless of their
          size. As a dependable partner and seasoned authority, we cultivate robust partnerships with our clients,
          guaranteeing enduring triumph through our collaborative efforts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="flex items-center">
            <div className="mr-6 text-red-500">
              <Globe size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">World Class Professional Cybersecurity team</h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-6 text-red-500">
              <Trophy size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">We succeed when we make our clients successful.</h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-6 text-red-500">
              <TrendingUp size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Continuous Growth with Operational Excellence</h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-6 text-red-500">
              <Users size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Our team is committed with Honesty and Teamwork</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
