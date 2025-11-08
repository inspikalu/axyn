"use client"
import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"
import Hero from "@/components/app/hero"
import HowItWorks from "@/components/app/how-it-works"
import ToolsThatWork from "@/components/app/tools-that-work"
import ForSection from "@/components/app/for-section"
import GovernTheRightWay from "@/components/app/govern-the-right-way"
import Footer from "@/components/app/footer"
import ScatteredCircles from "@/components/app/scattered-circles"

// Animation variants for fade-in and slide-up
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

export default function Home() {
  // Create refs for each section to track visibility
  const heroRef = useRef(null)
  const howItWorksRef = useRef(null)
  const toolsThatWorkRef = useRef(null)
  const forSectionRef = useRef(null)
  const governRef = useRef(null)
  const footerRef = useRef(null)

  // Track when each section is in view
  const isHeroInView = useInView(heroRef, { once: true, margin: "0px 0px -100px 0px" })
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "0px 0px -100px 0px" })
  const isToolsThatWorkInView = useInView(toolsThatWorkRef, { once: true, margin: "0px 0px -100px 0px" })
  const isForSectionInView = useInView(forSectionRef, { once: true, margin: "0px 0px -100px 0px" })
  const isGovernInView = useInView(governRef, { once: true, margin: "0px 0px -100px 0px" })
  const isFooterInView = useInView(footerRef, { once: true, margin: "0px 0px -100px 0px" })

  return (
    <div className="min-h-screen overflow-hidden pb-40 md:pb-80">
      <div className="bg-[url('/images/clouds-mobile.png')] md:bg-[url('/images/clouds.png')] bg-no-repeat bg-[bottom]">
        <motion.div
          ref={heroRef}
          variants={sectionVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          className="relative"
        >
          <Hero />
          <ScatteredCircles />
        </motion.div>
        <div className="w-full pt-[37px] md:pt-[160px]"></div>
      </div>
      <motion.div
        ref={howItWorksRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isHowItWorksInView ? "visible" : "hidden"}
      >
        <HowItWorks />
      </motion.div>
      <motion.div
        ref={toolsThatWorkRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isToolsThatWorkInView ? "visible" : "hidden"}
      >
        <ToolsThatWork />
      </motion.div>
      <motion.div
        ref={forSectionRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isForSectionInView ? "visible" : "hidden"}
      >
        <ForSection />
      </motion.div>
      <motion.div
        ref={governRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isGovernInView ? "visible" : "hidden"}
      >
        <GovernTheRightWay />
      </motion.div>
      <div className="w-full mt-[25rem] md:mt-[30rem]"></div>
      <motion.div
        ref={footerRef}
        variants={sectionVariants}
        initial="hidden"
        animate={isFooterInView ? "visible" : "hidden"}
      >
        <Footer />
      </motion.div>
    </div>
  )
}
