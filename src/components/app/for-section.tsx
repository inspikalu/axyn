import Image from "next/image"

const ForSection = () => {
  return (
    <div className="text-center for-section py-12 md:py-20 px-4 aspect-[1.37/1] flex items-center justify-center flex-col gap-6 md:gap-8 text-black w-full md:w-[73%] mx-auto rounded-none md:rounded-[50px] font-bricolage-grotesque font-bold relative overflow-hidden">
      <h3 className="text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] tracking-tight px-4 break-words max-w-[90%] z-10">
        For Creators,
        <br />
        Users,
        <br />
        and Everyone
      </h3>

      <div className="text-[clamp(1.1rem,3vw,2rem)] space-y-2 md:space-y-4 w-full max-w-[80%] md:max-w-[70%] z-10 flex flex-col gap-3">
        <p className="leading-[1.1] whitespace-nowrap">→ Anyone Who Uses AI</p>
        <p className="leading-[1.1] whitespace-nowrap">→ Agent Creators (Envoys)</p>
        <p className="leading-[1.1] whitespace-nowrap">→ Devs Building Tools</p>
      </div>

      <Image
        src={"/images/for-ending.png"}
        alt="Grass Illustration"
        width={422}
        height={245.77334594726562}
        className="absolute bottom-0 left-0 w-[25%] h-auto hidden md:block"
      />
      {/* ---Yeye Bwoii space---- */}
      <Image
        src={"/images/badge-yellow.png"}
        alt=""
        width={110.169921875}
        height={110.169921875}
        className="absolute bottom-[20%] right-[10%] md:block hidden"
      />
      <Image
        src={"/images/badge-pink.png"}
        alt=""
        width={49.2371826171875}
        height={49.2371826171875}
        className="absolute top-[30%] right-[-10px] md:top-[35%] md:right-[41%] w-[2rem] h-auto"
      />
      <Image
        src={"/images/badge-dark-blue.png"}
        alt=""
        width={145.11476135253906}
        height={145.11476135253906}
        className="absolute top-[70%] right-[70%] md:top-0 md:right-[10%] w-[5rem] h-auto"
      />
      <Image
        src={"/images/badge-blue.png"}
        alt=""
        width={123.107177734375}
        height={123.107177734375}
        className="absolute top-[70%] left-[80%] h-auto w-[4rem] md:top-[34%] md:left-[17%] md:w-[7rem]"
      />
    </div>
  )
}

export default ForSection
