import { FC } from "react" 
import cn from "classnames"
import LinkContactTarget from "@/old-components/LinkContactTarget"
import CintilloData from "@/types/Cintillo.types"
import Image from "@/old-components/Image"
import { CardWebsitePortalverseConfig, CardWebsitePortalverseData } from "@/types/CardWebsitePortalverse.types"
import RichtText from "./Richtext/Richtext"
import LinkIcons from "./LinkLottus"

const CardWebsitePortalverse: FC<CardWebsitePortalverseData> = ({ data, classNames, onClick }: CardWebsitePortalverseData) => {

  return <>
  {
    data.type === "vertical"
    ? <div className={cn("rounded-b-lg hover:shadow-2xl flex flex-col h-full")}>
    <Image classNames="w-full aspect-2/1 flex h-full max-h-36" src={data.image} alt="image" />
    <div className={cn("px-3 flex flex-col h-full", classNames, {"border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-lg" : data.border, "bg-white": data.background})}>
      <h3 className="pt-3 mb-2 font-Nunito font-normal text-SC/Blackandgrey/B-60 text-[11px]">{ data.subtitle?.toLocaleUpperCase() }</h3>
      <h1 className="mb-2 font-Nunito font-bold text-base">{ data.title }</h1>
      <RichtText data={{
        content: data.text
      }} classNames="mb-2" />
      <div className="flex justify-end h-full items-end mb-3">
        {
          data.isLink === true
          ? <LinkIcons data={data.link} onClick={onClick}/>
          : null
        }
      </div>
    </div>
  </div> 
  : data.type === "horizontal"
  ? <div className={cn("rounded-b-lg hover:shadow-2xl flex")}>
    <Image classNames="w-full h-full w-p:hidden w-t:hidden aspect-3/4" src={data.image} alt="image" />
    <div className={cn("px-3 flex flex-col", classNames, {"border-t-2 border-r-2 border-b-2 rounded-r-lg" : data.border, "bg-white": data.background})}>
      <h3 className="pt-3 mb-2 font-Nunito font-normal text-SC/Blackandgrey/B-60 text-[11px]">{ data.subtitle?.toLocaleUpperCase() }</h3>
      <h1 className="mb-2 font-Nunito font-bold text-base">{ data.title }</h1>
      <RichtText data={{
        content: data.text
      }} classNames="mb-2" />
    </div>
    <div className="flex justify-end h-full items-center mb-3">
      {
        data.isLink === true
        ? <LinkIcons data={data.link} onClick={onClick}/>
        : null
      }
    </div>
  </div>
  : null
  }
  </>
}

export default CardWebsitePortalverse