import Image from "next/image"

const someStuffAiRenameThis = [
    {
        image: "/images/governance.png",
        text: "Governance"
    },
    {
        image: "/images/dao-discovery.png",
        text: "DAO Discovery"
    },
    {
        image: "/images/chat.png",
        text: "Chat"
    },
]

const DaoDiscovery = () => {
  return (
    // Add Later: mt-[41px] md:mt-[160px]
   <div className="flex items-center justify-center gap-[40px] ">
                {someStuffAiRenameThis.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-0 text-center">
                        <Image src={item.image} alt={item.text} width={201} height={201} className="w-[110px] md:w-[201px]" />
                        <span className="text-[11px] md:text-[21.87px] font-medium text-center">{item.text}</span>
                    </div>
                ))}
            </div>
  )
}

export default DaoDiscovery
