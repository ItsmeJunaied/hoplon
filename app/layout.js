import "./globals.css"

export const metadata = {
  title: "Hoplon Infosec - Cybersecurity Solutions",
  description:
    "Providing top to bottom cybersecurity consulting and services to protect your business from digital threats.",
    generator: 'MD JUNAIED HOSSAIN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
