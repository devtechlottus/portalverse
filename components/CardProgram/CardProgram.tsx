import { FC, memo } from "react"
import cn from "classnames"
import CardProgramData from "@/types/CardProgram.types"
import Image from "@/components/Image"
import LinkIcons from "@/components/LinkLottus"


const CardProgram: FC<CardProgramData> = memo(({ title, link, image, classNames , onClick, aspectImg = "aspect-2/1"}: CardProgramData) => {

  return <div className={cn("cardProgram bg-white border-1 border-solid border rounded-md", classNames)}> 
      {
        !!image
          ? <Image classNames={cn("w-full", aspectImg)} alt="contact-image" src={image} />
          : <div className="bg-[gray] rounded w-22 h-22" />
      }
      <p className="font-Poppins font-bold text-4.5 mt-3 mb-2 mx-3">{title}</p>
      <div className="flex justify-end pb-2 items-center">
        <LinkIcons data={link} onClick={onClick}/>
        <span className="material-icons icon">chevron_right</span>
      </div>
    </div>
})

export default CardProgram