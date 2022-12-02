import { FC } from "react"
import cn from "classnames"
import RichtText from "@/components/Richtext"
import DescriptionSectionComponentData from "@/types/DescriptionSection.types"


const DescriptionSection: FC<DescriptionSectionComponentData> = ({ title, description, classNames, titleStyles, descriptionStyles }: DescriptionSectionComponentData) => {
  return <div className={cn("text-white bg-black", classNames)}>
    <h1 className={cn("text-6 font-bold font-Poppins leading-[30px]", titleStyles)}>{ title }</h1>
    <div className={cn("descriptionSection", descriptionStyles)}>
      <RichtText data={{ content: description }} />
    </div>
  </div>
}

export default DescriptionSection