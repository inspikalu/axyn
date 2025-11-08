import Image from "next/image"

const ToolsThatWork = () => {
  return (
    <div className="w-[85%] md:w-[73%] gap-[2rem] flex flex-col-reverse md:grid md:grid-cols-[2fr_5fr] mx-auto my-[101px] md:my-[160px] font-bricolage-grotesque">
      <div className="flex items-center justify-center">
        <Image src={"/images/logo-larger-edited.png"} className="" alt="Logo" width={400} height={400} />
      </div>
      <div className="flex flex-col justify-center items-start gap-[24px] ">
        <h2 className="font-bold text-[64px] leading-[105%] tracking-[0%]">AI Payments That Actually Make Sense</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 pl-[2.1rem] gap-[1rem] md:gap-[3rem]">
          <ul className="tick-list-type text-[1.2rem] font-medium">
            <li>Pay Per Query, Not Per Month</li>
            <li>x402 Micropayments</li>
            <li>No Credit Cards Needed</li>
          </ul>
          <ul className="tick-list-type text-[1.2rem] font-medium">
            <li>Direct Envoy Payouts</li>
            <li>Built on Solana</li>
            <li>Zero Subscription Lock-in</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToolsThatWork
