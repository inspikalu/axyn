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
        <path
          d="M11.3857 1.15519H289.822C299.475 1.15519 303.96 13.128 296.684 19.4696C291.716 23.7987 291.547 31.462 296.32 36.0048L298.232 37.8241C305.282 44.5336 300.533 56.411 290.801 56.411H12.2852C2.75679 56.4108 -1.485 44.4384 5.91797 38.4394C11.0734 34.2614 11.3086 26.4769 6.41406 21.996L4.10645 19.8847C-3.14696 13.2443 1.55175 1.15519 11.3857 1.15519Z"
          fill="#232323"
          stroke="#484747"
          strokeWidth={0.743383}
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
              <Image src="/images/logo.svg" alt="AxyN" width="20" height="20" />
              <span style={{ fontWeight: 500 }}>AxyN</span>
            </a>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setIsModalOpen(true)
              }}
              className="flex items-center justify-center border-[0.74px] border-[#48E5C2] text-[#48E5C2] rounded-[74.34px] py-[5px] px-[20px] gap-1 text-[.7rem] md:text-[.6rem]"
              whileHover={{ scale: 1.05, backgroundColor: "#48E5C21A" }}
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#232323] border border-[#484747] rounded-lg p-6 w-full max-w-md"
            >
              <h2 className="text-white text-xl mb-4">Join the Waitlist</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-transparent border border-[#484747] rounded text-white"
                  required
                  disabled={isLoading}
                />
                {message && (
                  <p className={`text-sm ${message.includes("Successfully") ? "text-[#48E5C2]" : "text-red-400"}`}>
                    {message}
                  </p>
                )}
                <div className="flex gap-2">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-[#48E5C2] text-black rounded-[74.34px] py-2 px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 border border-[#48E5C2] text-[#48E5C2] rounded-[74.34px] py-2 px-4"
                    whileHover={{ scale: 1.05, backgroundColor: "#48E5C21A" }}
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
