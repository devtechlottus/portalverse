import cn from "classnames"
import ContentLayoutProps from "@/types/ContentLayout.types"
import { PropsWithChildren } from "react"
import Pixel from "@/components/Pixel"

export default function PixelLayout({ children } : PropsWithChildren) {
  return <>
    <Pixel 
      pixel="https://www.facebook.com/tr?id=487461332128996&ev=PageView"
    />
    { children }
  </>
}