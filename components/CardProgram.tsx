import CardProgramData from "@/types/CardProgram.types"
import { createRef, FC, memo, useEffect, useState } from "react"
import Image from "@/components/Image"
import cn from "classnames"
import LinkIcons from "./LinkLottus"


const CardProgram: FC<CardProgramData> = memo(({ title, link, image, classNames , onClick}: CardProgramData) => {

  return <>
  <div className={cn("bg-white border-1 border-solid border rounded-md", classNames)}>
    <div > 
      {
        !!image
          ? <Image classNames="aspect-4/3 w-full" alt="contact-image" src={image} />
          : <div className="bg-[gray] rounded w-22 h-22" />
      }
      </div>
      <div >
        <p className="font-Poppins font-bold text-4.5 mt-3 mb-2 mx-3">{title}</p>
      </div>
      <div className="flex justify-end pb-2">
        <LinkIcons data={link} onClick={onClick}/>
      </div>
    </div>
    
  </>
})

export default CardProgram