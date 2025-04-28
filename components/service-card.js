import Link from "next/link"

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#1a1a1a]  text-left bg-transparent 
    bg-gradient-to-tr from-white/5 to-white/10 
    border border-white/10 
    rounded-2xl 
    p-10">
      <div className="bg-[#A020F0] w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 mt-[50px]">{title}</h3>
      <p className="text-[#E0DDDA] mb-4">{description}</p>
      <Link href="#" className="text-purple-500 hover:text-purple-400 flex items-center mt-5 mb-10">
        Learn More <span className="ml-2">→</span>
      </Link>
    </div>
  )
}
