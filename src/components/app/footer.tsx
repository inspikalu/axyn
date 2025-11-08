const Footer = () => {
  return (
    <div className="relative w-full flex justify-center font-bricolage-grotesque">
      <div className="w-[94%] md:w-[80%] aspect-[2.03/1] bg-[#40CC7F] rounded-[27.26px] md:rounded-[89px] absolute z-10" />

      <div className="w-[94%] md:w-[80%] aspect-[2.03/1] bg-[#9D4EDD] rounded-[27.26px] md:rounded-[89px] rotate-[9.61deg] relative z-20">
        <div className="rotate-[-9.61deg] flex flex-col items-center justify-center h-full gap-[23px] md:gap-[100px]">
          <h3 className="gradient-text font-bold text-[clamp(2.5rem,10vw,11.5rem)] whitespace-nowrap">AXYN</h3>

          <div className="flex items-center justify-center gap-[16px] md:gap-[40px] font-bold lowercase text-[clamp(1rem,4vw,3.3rem)] whitespace-nowrap">
            <a href="https://twitter.com/AxyN" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://axyn.app" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
