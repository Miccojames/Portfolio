import "../styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "Micco Portfolio",
  description: "Frontend Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}