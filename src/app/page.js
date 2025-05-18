"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 rounded-xl shadow-lg text-center bg-base-100"
      >
        <h1 className="text-3xl font-bold text-neutral-content">Welcome to Next.js 13+</h1>
        <p className="text-sm mt-2">With Tailwind, DaisyUI, and Framer Motion!</p>
      </motion.div>
    </main>
  )
}
