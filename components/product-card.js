import Link from "next/link";

export default function ProductCard({ icon: Icon, title, description }) {
  return (
    <div
      className="bg-[#1a1a1a]  text-left bg-transparent 
    bg-gradient-to-tr from-white/5 to-white/10 
    border border-white/10 
    rounded-2xl 
    p-10"
    >
      <div className="bg-[#A020F0] hover:bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold mb-2 mt-10">{title}</h3>
      <p className="text-[#E0E0E0] text-lg mb-4 mt-3">{description}</p>
      <Link
        href="#"
        className="text-purple-500 hover:text-purple-400 flex items-center mt-5 mb-10"
      >
        Learn More <span className="ml-2 ">→</span>
      </Link>
    </div>
  );
}
