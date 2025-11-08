import Image from "next/image"

const GovernTheRightWay = () => {
  return (
    <div className="font-bricolage-grotesque flex flex-col gap-[23px] md:gap-[70px] relative w-[85%] md:w-[73%] mx-auto mt-[23px] md:mt-[123px]">
      <h3 className="font-bold text-[3rem] md:text-[4rem] leading-[105%] text-left">
        Use AI <br className="block md:hidden" /> agents <br className="md:block hidden" /> the right
        <br className="block md:hidden" /> way.
      </h3>
      <p className="text-right leading-[105%] text-[1.5rem] md:text-[2.1rem] max-w-[35ch] ml-auto">
        Stop paying monthly fees for AI you barely use. With AxyN, you pay per query and own your experience.
      </p>
      <Image
        src={"/images/govern-image.png"}
        alt="AxyN interface"
        width={517.5250854492188}
        height={337.1305847167969}
        className="absolute top-[110%] md:top-[70%] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-[-1.8rem]"
      />
    </div>
  )
}

export default GovernTheRightWay
