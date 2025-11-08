import Image from "next/image"

const PoweredBySolana = () => {
  return (
    <div className="pt-[40px] font-bricolage-grotesque font-medium text-[16px] text-center leading-[80%]">
      <p className="flex items-center justify-center gap-[10px]">
        Powered by x402 & Solana
        <Image src="/images/solana.svg" alt="Solana" width="24" height="24" />
      </p>
    </div>
  )
}

export default PoweredBySolana
