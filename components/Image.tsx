import { FC } from "react"
import Imagen from "next/image"
import cn from "classnames"
import ImageComponentData from "@/types/Image.types"

const Image: FC<ImageComponentData> = ({ alt, src, classNames }: ImageComponentData) => {
  return <div className={cn("relative", classNames)}>
    <Imagen src={src} alt={alt} layout="fill" priority />
  </div>
}

export default Image