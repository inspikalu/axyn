import Image from "next/image"

const HowItWorks = () => {
  return (
    <div className="w-[85%] md:w-[73%] bg-[#EEFFFB] mx-auto py-[42px] md:py-[100px] rounded-[15px] md:rounded-[50px] font-bricolage-grotesque mt-[85px] md:mt-[61px] relative overflow-hidden">
      <div className="bg-[#00A652] text-black border-[4px] border-black mx-auto w-[91%] max-w-[460px] font-semibold text-[2.3rem] md:text-[64px] text-center mb-8 px-[18px] py-[25px] md:px-[8px] md:py-[29px] rounded-[12px] h-[86px] md:h-[86px] flex items-center justify-center">
        How it works
      </div>

      <div className="space-y-4 px-4 md:px-8 text-black text-center flex flex-col items-center justify-center gap-[16px] text-[36px] font-medium z-20 relative">
        <p className="text-lg flex flex-col items-center justify-center max-w-[30ch]">
          <span className="bg-[#FF2B87] aspect-square w-[36px] rounded-full mb-2 block md:hidden"></span>
          <span>Login & Get Your Wallet</span>
          <span>
            Sign in with{" "}
            <span className="font-semibold bg-[#6771FF] p-1 border-[2px] border-black rounded-[8px]">
              Google, Discord, or Twitter.
            </span>{" "}
            Your wallet is built right in — no seed phrases.
          </span>
        </p>

        <p className="text-lg flex flex-col items-center justify-center max-w-[30ch]">
          <span
            className="bg-[#9D4EDD] aspect-square w-[36px] rounded-[2px] mb-2 block md:hidden"
            style={{ clipPath: "polygon(50% 2%, 2% 98%, 98% 98%)" }}
          ></span>
          <span className="relative">
            Browse & Hire Agents
            <Image
              src={"/images/swirl.svg"}
              alt="Swirl illustration"
              width={105}
              height={29}
              className="hidden md:block absolute right-[-30%] bottom-0 -z-10 w-[4rem] h-auto"
            />
          </span>
          <span>
            Discover AI agents for writing, coding, voice, design — whatever you need. Tap to hire, chat, and pay per
            use.
          </span>
        </p>

        <p className="text-lg flex flex-col items-center justify-center max-w-[50ch]">
          <span className="bg-[#FFD215] aspect-square w-[36px] mb-2 block md:hidden"></span>
          <span className="relative">
            Pay with Crypto, Track Everything
            <Image
              src={"/images/oval-group.svg"}
              alt="Oval Group"
              width={34}
              height={38}
              className="hidden md:block absolute top-[-1rem] right-[-2.5rem]"
            />
          </span>
          <span>
            Instant USDC payments on Solana. Check your spending, earnings, and history in real-time. All on-chain, all
            transparent.
          </span>
        </p>
      </div>

      <Image
        src={"/images/slanted-oval.png"}
        alt="Slanted oval illustration"
        width={500}
        height={533}
        className="absolute bottom-[-15rem] md:bottom-[-19rem] left-0"
      />

      <div className="w-[76px] h-[28px] rounded-[500%] rotate-[-54deg] bg-[#48E5C2] absolute bottom-[15%] right-[10%] hidden md:block"></div>
      <Image
        src={"/images/scroll.png"}
        alt="Scroll"
        width={43}
        height={52}
        className="hidden md:block absolute top-[20%] left-[10%]"
      />
      {/* 160px from 208 from left */}
    </div>
  )
}

export default HowItWorks
