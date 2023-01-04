import { FC, memo } from "react" 
import cn from "classnames"
import Banner from "@/components/Banner"
import Button from "@/components/Button"
import BannerWrapperData from "@/types/BannerWrapper.types"
import RichtText from "@/components/Richtext/Richtext"


const BannerWrapper: FC<BannerWrapperData> = memo(({ data: { urlImage, title, subtitle,description, action }, classNames, typeBanner="banner", banner, font = "light", onBtn}: BannerWrapperData) => {
  return <>
    {
      typeBanner === "sm"
        ? <>
          <div style={{"backgroundImage":`url(${urlImage?.desktop})`}} className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 bg-contain p-10 " , classNames)}>
            <div className={cn(classNames, {
            "text-white": font === "light",
            "text-black": font === "dark" ,
            })}>
              <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-6 w-t:text-6 w-p:text-6">{ title }</h1>
              <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ subtitle }</h3>
              {
                description && description !== "" ?
                <RichtText classNames="mt-6" font="dark" data={{
                  content: description
                }} /> :
                null
              }
            </div>
          </div>
          <div className="mt-6">
            <Button data={{...action, isExpand: true}} onClick={onBtn} />
          </div>
        </>
        : <Banner data={banner}/>    
    }
  </>
})
export default BannerWrapper