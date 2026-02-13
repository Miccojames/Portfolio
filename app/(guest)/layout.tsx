"use client";

import { Header } from "@/components/ui/common/Header";
import { Footer } from "@/components/ui/common/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname} // re-renders on route change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}
