"use client"

import Navbar from "@/components/app/navbar"
import PoweredBySolana from "@/components/app/powered-by-solana"
import Image from "next/image"
import Link from "next/link"
import { motion, easeInOut } from "framer-motion"

const Hero = () => {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2,
      ease: easeInOut,
    },
  }

  // Slightly different durations for variety
  const floatAnimationAlt = {
    y: [0, -8, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2.5,
      ease: easeInOut,
    },
  }

  const floatAnimationSlow = {
    y: [0, -12, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2.2,
      ease: easeInOut,
    },
  }


  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Navbar />
      <PoweredBySolana />
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="font-bricolage-grotesque font-extrabold text-[57.5px] md:text-[110.88px] leading-[80%] tracking-[-3%] text-center">
          <span className="relative mr-[1rem] inline-block">
            <span className="bg-gradient-to-r from-[#89F8CB] via-[#DAC0FF] to-[#A5DAE0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(137,248,203,0.5)]">
              Pay
            </span>
            {/* AI Brain Glow Effect */}
            <motion.div
              animate={floatAnimation}
              className="hidden md:block absolute -left-[40%] top-[30%] w-[20px] md:w-[68.75px] h-auto"
            >
              <div className="w-[68.75px] h-[68.75px] rounded-full bg-gradient-to-br from-[#89F8CB] to-[#A5DAE0] opacity-60 blur-xl" />
            </motion.div>
          </span>
          <span className="relative">
            <span className="bg-gradient-to-r from-[#A5DAE0] to-[#89F8CB] bg-clip-text text-transparent">
              per
            </span>
            <motion.div
              animate={floatAnimation}
              className="absolute left-[108%] top-[12%] w-[45.66943359375px] md:w-[92px] h-auto"
            >
              <div className="w-[92px] h-[92px] rounded-full bg-gradient-to-br from-[#DAC0FF] to-[#89F8CB] opacity-50 blur-2xl" />
            </motion.div>
          </span>{" "}
          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-[#DAC0FF] via-[#89F8CB] to-[#A5DAE0] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(218,192,255,0.6)]">
              use,
            </span>
          </span>{" "}
          <br />
          <span className="relative inline-block">
            <motion.div
              animate={floatAnimationSlow}
              className="bg-gradient-to-r from-[#89F8CB] to-[#A5DAE0] rounded-[5.55px] md:rounded-[11.66px] w-[101px] md:w-[200px] h-[27px] md:h-[56px] migration-bg flex items-center justify-center text-black absolute left-[50%] -translate-x-1/2 -top-[35px] md:-top-[65px] z-3 shadow-[0_0_30px_rgba(137,248,203,0.6)]"
            >
              <span className="font-semibold text-[13.33px] md:text-[27.98px] leading-[80%] tracking-[-3%] translate-x-[-8px] md:translate-x-[-17px]">
                Not
              </span>
            </motion.div>
            <span className="bg-gradient-to-r from-[#89F8CB] via-[#DAC0FF] to-[#A5DAE0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(137,248,203,0.5)]">
              AI
            </span>
          </span>{" "}
          <span className="bg-gradient-to-r from-[#A5DAE0] to-[#89F8CB] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(165,218,224,0.6)]">
            Market
          </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#DAC0FF] via-[#A5DAE0] to-[#89F8CB] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(218,192,255,0.5)]">
              place
            </span>
            <motion.div
              animate={floatAnimationSlow}
              className="bg-gradient-to-r from-[#FF6D38] to-[#FF9D38] rounded-[5.55px] md:rounded-[11.66px] w-[101px] md:w-[200px] h-[27px] md:h-[56px] migration-bg flex items-center justify-center text-black absolute left-[50%] -translate-x-1/2 top-[40px] md:top-[70px] z-3 shadow-[0_0_30px_rgba(255,109,56,0.6)]"
            >
              <span className="font-semibold text-[13.33px] md:text-[27.98px] leading-[80%] tracking-[-3%] translate-x-[-8px] md:translate-x-[-17px]">
                Month
              </span>
            </motion.div>
          </span>
        </div>
        <div className="text-center max-w-[52ch] mx-auto mt-[81px] md:mt-[38px] font-outfit text-lg md:text-xl text-white/80">
          AxyN is your mobile marketplace for AI agents. Discover, hire, and pay per interaction — no subscriptions, no
          commitments. Just pay 10 cents instead of $20/month.
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[16px] mt-[32px] text-[16px] font-bricolage-grotesque">
          <Link
            href={"/docs"}
            className="glass-morphism hover-lift border border-[#89F8CB]/50 text-[#89F8CB] rounded-[100px] w-[142px] h-[37px] flex items-center justify-center font-bricolage-grotesque transition-all hover:shadow-[0_0_30px_rgba(137,248,203,0.4)]"
          >
            Read Docs
          </Link>
          <Link
            href={"/waitlist"}
            className="bg-gradient-to-r from-[#89F8CB] to-[#A5DAE0] hover-lift rounded-[100px] w-[142px] h-[37px] flex items-center justify-center text-black font-bricolage-grotesque font-semibold transition-all shadow-[0_0_30px_rgba(137,248,203,0.5)] hover:shadow-[0_0_40px_rgba(137,248,203,0.7)]"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
