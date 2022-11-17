import { FC, memo } from "react" 
import cn from "classnames"

const BannerPortalverse: FC<any> = memo(({data: {image, title, subtitle}, classNames}: any) => {
  return <>
    <div style={{"backgroundImage":`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${image})`}} className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 aspect-2/1 bg-cover flex flex-col items-center justify-center p-10", classNames)}>
      <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ title }</h1>
      <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ subtitle }</h3>
    </div>
  </>
})

export default BannerPortalverse