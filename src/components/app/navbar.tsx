"use client"

import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import axios from "axios"

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const SHEETDB_URL = process.env.NEXT_PUBLIC_SHEET_URL || ""

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    try {
      const url = `${SHEETDB_URL}?email=${encodeURIComponent(email)}`
      await axios.post(url)
      setMessage("Successfully joined waitlist!")
      setTimeout(() => {
        setIsModalOpen(false)
        setEmail("")
        setMessage("")
      }, 2000)
    } catch (error) {
      setMessage("Failed to join waitlist. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center w-full pt-[36px] md:pt-[36px]">
      <svg
        viewBox="0 0 302 57"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          maxWidth: "700px",
        }}
        className="h-[56px] md:h-[76.23462677001953px]"
      >
        <defs>
          <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#89F8CB" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#DAC0FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#A5DAE0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M11.3857 1.15519H289.822C299.475 1.15519 303.96 13.128 296.684 19.4696C291.716 23.7987 291.547 31.462 296.32 36.0048L298.232 37.8241C305.282 44.5336 300.533 56.411 290.801 56.411H12.2852C2.75679 56.4108 -1.485 44.4384 5.91797 38.4394C11.0734 34.2614 11.3086 26.4769 6.41406 21.996L4.10645 19.8847C-3.14696 13.2443 1.55175 1.15519 11.3857 1.15519Z"
          fill="url(#navGradient)"
          stroke="#89F8CB"
          strokeWidth={0.5}
          strokeOpacity={0.3}
        />
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBlock: "10px",
              paddingInline: "1.5rem",
              overflow: "hidden",
              height: "100%",
              boxSizing: "border-box",
              fontFamily: "sans-serif",
              color: "white",
            }}
          >
            <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #89F8CB, #A5DAE0)",
                boxShadow: "0 0 10px rgba(137, 248, 203, 0.5)"
              }} />
              <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>AxyN</span>
            </a>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsModalOpen(true)
              }}
              className="flex items-center justify-center border-[0.74px] border-[#89F8CB] text-[#89F8CB] rounded-[74.34px] py-[5px] px-[20px] gap-1 text-[.7rem] md:text-[.6rem] transition-all"
              whileHover={{ scale: 1.05, backgroundColor: "#89F8CB1A", boxShadow: "0 0 20px rgba(137, 248, 203, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span>Join waitlist</span> <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
            </motion.a>
          </div>
        </foreignObject>
      </svg>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              className="glass-morphism border border-[#89F8CB]/30 rounded-lg p-6 w-full max-w-md glow-effect"
            >
              <h2 className="text-white text-xl mb-4 font-bricolage-grotesque font-bold">Join the Waitlist</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-black/50 border border-[#89F8CB]/30 rounded text-white focus:border-[#89F8CB] focus:outline-none transition-all"
                  required
                  disabled={isLoading}
                />
                {message && (
                  <p className={`text-sm ${message.includes("Successfully") ? "text-[#89F8CB]" : "text-red-400"}`}>
                    {message}
                  </p>
                )}
                <div className="flex gap-2">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[#89F8CB] to-[#A5DAE0] text-black rounded-[74.34px] py-2 px-4 font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(137, 248, 203, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 border border-[#89F8CB] text-[#89F8CB] rounded-[74.34px] py-2 px-4"
                    whileHover={{ scale: 1.05, backgroundColor: "#89F8CB1A" }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoading}
                  >
                    Close
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
