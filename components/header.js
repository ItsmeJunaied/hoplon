import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2e0a4c] text-white fixed w-full z-50">
      <div className="px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/hoploninfologo.png"
              alt="Hoplon Infosec"
              width={100}
              height={100}
              className="w-auto h-10 md:h-[100px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation (unchanged) */}
        <nav className="hidden md:flex space-x-8 justify-center">
          <Link href="/" className="hover:text-gray-300 font-medium">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-300 font-medium">
            Services
          </Link>
          <Link href="/products" className="hover:text-gray-300 font-medium">
            Products
          </Link>
          <Link href="/resources" className="hover:text-gray-300 font-medium">
            Resources
          </Link>
          <Link href="/certifications" className="hover:text-gray-300 font-medium">
            Certifications
          </Link>
          <Link href="/about" className="hover:text-gray-300 font-medium">
            About
          </Link>
        </nav>

        {/* Desktop Contact/CTA (unchanged) */}
        <div className="hidden md:flex flex-col items-end justify-between space-x-4 gap-3">
          <div className="flex items-center space-x-4">
            <Link href="mailto:contact@hoploninfosec.com" className="text-white hover:text-gray-300">
              <Mail size={20} />
            </Link>
            <Link href="tel:+1234567890" className="text-white hover:text-gray-300">
              <Phone size={20} />
            </Link>
            <Link href="/consultation" className="bg-black text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
          <button className="text-white hover:text-gray-300 ml-2">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2e0a4c] pb-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/products" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/resources" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
            <Link href="/certifications" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Certifications
            </Link>
            <Link href="/about" className="hover:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </nav>

          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Link href="mailto:contact@hoploninfosec.com" className="text-white hover:text-gray-300">
                <Mail size={20} />
              </Link>
              <Link href="tel:+1234567890" className="text-white hover:text-gray-300">
                <Phone size={20} />
              </Link>
            </div>
            <Link 
              href="/consultation" 
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule a Consultation
            </Link>
            <button className="text-white hover:text-gray-300 flex justify-center w-full">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}