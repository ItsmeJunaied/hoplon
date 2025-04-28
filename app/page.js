"use client";
import Header from "@/components/header";
import BannerSlider from "@/components/banner-slider";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import CTASection from "@/components/cta-section";
import ProductsSection from "@/components/products-section";
import PartnersSection from "@/components/partners-section";
import SecureSection from "@/components/secure-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BannerSlider />
      <AboutSection />
      <div className=" container mx-auto">
        <ServicesSection />
        <CTASection />
        <ProductsSection />
        <PartnersSection />
        <SecureSection />
      </div>
      <Footer />
    </div>
  );
}
