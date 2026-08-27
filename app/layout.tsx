import "../styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Micco James — Frontend & Web Developer",
  description: "Personal portfolio of Micco James, a Frontend/Web Developer building modern, responsive, and user-focused web applications.",
  openGraph: {
    title: "Micco James — Frontend & Web Developer",
    description: "Personal portfolio of Micco James, a Frontend/Web Developer building modern, responsive, and user-focused web applications.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}