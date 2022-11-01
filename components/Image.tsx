import { FC } from "react";
import cn from "classnames";
import ImageComponentData from "@/types/Image.types";

const Image: FC<ImageComponentData> = ({ alt, src, classNames }: ImageComponentData) => {
  return <div className={cn(classNames)}>
    <img className='w-full h-full object-fill' alt={alt} src={src} />
  </div>
}

export default Image;