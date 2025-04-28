import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2e0a4c] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className=" w-full justify-between flex items-center mb-8">
          <div className="flex items-center" />
          <div className="flex justify-center mb-8">
            <Image
              src="/hoploninfologo.png"
              alt="Hoplon Infosec"
              width={200}
              height={200}
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <Link href="#" className="text-white hover:text-gray-300">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <Youtube size={24} />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Start Using Hoplon Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Start Using Hoplon Now.</h2>
            <p className="mb-6">
              Total protection has never been more effortless. Take advantage of
              our services to explore the most popular solutions for your
              business:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Protect against malware with Endpoint Security.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Defend against threats on your mobile devices with our Mobile
                  Security.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Protect your Emails with our Email Security.</span>
              </li>
            </ul>
            <Link
              href="/consultation"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Products Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  AI-Driven Automated Red Teaming
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Cloud Storage and Disaster Recovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Email Security and Anti-phishing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Mobile Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Deep and Dark Web Monitoring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  XDR-Extended Detection & Response
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Training Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Cybersecurity Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Offensive Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Cybersecurity Consultation and Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Incident Response and Digital Forensic Investigation
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">About</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About Hoplon Infosec
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/contact" className="text-sm hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/cookie-policy" className="text-sm hover:text-gray-300">
              Cookie Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm hover:text-gray-300"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm">
            Copyright © Hoplon InfoSec, LLC and its group of companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
