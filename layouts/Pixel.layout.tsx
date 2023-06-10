import cn from "classnames"
import ContentLayoutProps from "@/types/ContentLayout.types"
import { PropsWithChildren } from "react"
import Pixel from "@/components/Pixel"

export default function PixelLayout({ children } : PropsWithChildren) {
  return <>
    <Pixel 
      script={`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'
      `}
      pixel="https://www.facebook.com/tr?id=487461332128996&ev=PageView"
    />
    { children }
  </>
}