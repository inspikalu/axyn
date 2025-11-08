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
  const floatAnimationSkull = {
    y: [0, -8, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2.5,
      ease: easeInOut,
    },
  }

  const floatAnimationGovernance = {
    y: [0, -12, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2.2,
      ease: easeInOut,
    },
  }
  return (
    <div>
      <Navbar />
      <PoweredBySolana />
      <div className="font-bricolage-grotesque font-extrabold text-[57.5px] md:text-[110.88px] leading-[80%] tracking-[-3%] text-center pt-[5px]">
        <span className="relative mr-[1rem] inline-block">
          Pay
          {/* Ghost Image */}
          <motion.div
            animate={floatAnimation}
            className="hidden md:block absolute -left-[40%] top-[30%] w-[20px] md:w-[68.75px] h-auto"
          >
            <Image src="/images/ghost.png" alt="AxyN" width={88.75} height={88.75} />
          </motion.div>
        </span>
        <span className="relative">
          per
          <motion.div
            animate={floatAnimation}
            className="absolute left-[108%] top-[12%] w-[45.66943359375px] md:w-[92px] h-auto"
          >
            <Image src="/images/wallet.png" alt="Per Use" width={92} height={92} />
          </motion.div>
        </span>{" "}
        <br />
        <span className="relative">
         
          use,
        </span>{" "}
        <br />
        <span className="relative inline-block">
          <motion.div
            animate={floatAnimationGovernance}
            className="bg-[#38D4FF] rounded-[5.55px] md:rounded-[11.66px] w-[101px] md:w-[200px] h-[27px] md:h-[56px] migration-bg flex items-center justify-center text-black absolute left-[50%] -translate-x-1/2 -top-[35px] md:-top-[65px] z-3"
          >
            <span className="font-semibold text-[13.33px] md:text-[27.98px] leading-[80%] tracking-[-3%] translate-x-[-8px] md:translate-x-[-17px]">
              Not
            </span>
          </motion.div>
          AI
        </span>{" "}
        Market
        <span className="relative inline-block">
          place
          <motion.div
            animate={floatAnimationGovernance}
            className="bg-[#FF6D38] rounded-[5.55px] md:rounded-[11.66px] w-[101px] md:w-[200px] h-[27px] md:h-[56px] migration-bg flex items-center justify-center text-black absolute left-[50%] -translate-x-1/2 top-[40px] md:top-[70px] z-3"
          >
            <span className="font-semibold text-[13.33px] md:text-[27.98px] leading-[80%] tracking-[-3%] translate-x-[-8px] md:translate-x-[-17px]">
              Month
            </span>
          </motion.div>
        </span>
      </div>
      <div className="text-center max-w-[52ch] mx-auto mt-[81px] md:mt-[38px] font-outfit">
        AxyN is your mobile marketplace for AI agents. Discover, hire, and pay per interaction — no subscriptions, no
        commitments. Just pay 10 cents instead of $20/month.
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[16px] mt-[32px] text-[16px] font-bricolage-grotesque">
        <Link
          href={"/docs"}
          className=" bg-transparent border border-[#38D4FF] text-[#38D4FF] rounded-[100px] w-[142px] h-[37px] flex items-center justify-center font-bricolage-grotesque "
        >
          Read Docs
        </Link>
        <Link
          href={"/waitlist"}
          className=" bg-[#38D4FF] rounded-[100px] w-[142px] h-[37px] flex items-center justify-center text-black font-bricolage-grotesque"
        >
          Join Waitlist
        </Link>
      </div>
    </div>
  )
}

export default Hero
