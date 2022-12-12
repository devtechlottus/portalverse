import { FC } from "react"
import cn from "classnames"
import RichtText from "@/components/Richtext"
import DescriptionSectionComponentData from "@/types/DescriptionSection.types"


const DescriptionSection: FC<DescriptionSectionComponentData> = ({ title, description, classNames, titleStyles, descriptionStyles, mode = "dark", action }: DescriptionSectionComponentData) => {
  return <div className={cn("", classNames, {"text-white bg-black": mode === 'dark', "bg-white text-black": mode === 'light'})}>
    <h1 className={cn("text-6 font-bold font-Poppins leading-[30px]", titleStyles)}>{ title }</h1>
    <div className={cn("descriptionSection", descriptionStyles)}>
      <RichtText data={{ content: description }} />
      <slot name="actionDescription">{ action }</slot>
    </div>
  </div>
}

export default DescriptionSection