import { FC, SyntheticEvent, useEffect, useState } from "react"
import cn from "classnames"
import Button from "@/components/Button"
import LinkIcons from "@/components/LinkLottus"
import { LinkIconsInit } from "@/components/fixture"

const CarouselPortalverse: FC<any> = ({ classNames, classNamesContainer, items, mode = "banner" }: any) => {

  const styleBaseContainerControls = "top-[42%] w-p:hidden absolute group cursor-pointer"
  const styleBaseControls = "material-icons text-[12px] select-none group-hover:text-white";

  const [ active, setActive ] = useState<number>(0);
  const [ countItems, setCountItems ] = useState<number>(0);

  useEffect(() => {
    setCountItems((items.length - 1));
  }, [items]);

  const handlerClickControl = ({ target }: SyntheticEvent) => {
    const { ariaLabel } = (target as HTMLElement)
    if ( ariaLabel === "next" ) {
      if ( active === countItems ) {
        setActive(0);
        return
      }
      if ( active < countItems ) {
        setActive((prevState: number) => prevState+1);
        return
      }
    }

    if ( ariaLabel === "prev" ) {
      if ( active === 0 ) {
        setActive(countItems);
        return
      }
      if ( active > 0 ) {
        setActive((prevState: number) => prevState-1);
        return
      }
    }
  }

  const handleClickBullet = (bullet: number) => setActive(bullet);

  return <section className={cn("relative flex flex-col", classNames)}>
    <div className={cn("h-full", classNamesContainer)} >
      {/* controls */}
      <div className={cn("left-[40px]", styleBaseContainerControls)}>
        <span aria-label="prev" onClick={handlerClickControl} className={cn(styleBaseControls)}>arrow_back_ios</span>
      </div>
      <div className={cn("right-[40px]", styleBaseContainerControls)}>
        <span aria-label="next" onClick={handlerClickControl} className={cn(styleBaseControls)}>arrow_forward_ios</span>
      </div>
      {/* controls */}
      <div className="mb-10">
      {
        items.map(({ image: { src }, title = "", subtitle = "", action = null }: any, i: number) => <div className={cn("w-full h-full", "carouselTransition", { "hidden": i !== active })} key={`image-${i}`}>
            <div className={cn("w-full", "h-100 w-p:h-90 text-center font-Poppins")} style={{"backgroundImage":`url(${src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
              { !!title ? <h1 className="top-[50px] pt-12 font-bold text-[65px] leading-[80px] w-p:hidden">{ title }</h1> : null }
              { !!subtitle ? <p className="pt-2 font-semibold text-6 leading-[30px] w-p:hidden">{ subtitle }</p> : null }
              {
                !!action
                  ? <div className={cn("flex justify-center pt-6 w-p:hidden")}>
                      <Button data={action} />
                    </div>
                  : null
              }
            </div>
          </div>
        )
      }
      </div>
    </div>
    {/* content mobile mode: banner */}
    <div className={cn("w-d:hidden w-t:hidden w-p:block pb-8", { "hidden": mode !== "banner" })}>
      {
        items.map(({ title = "", subtitle = "", action = null }: any, i: number) => <div className={cn("w-full h-full", "carouselTransition", { "hidden": i !== active })} key={`image-${i}`}>
            <div className={cn("w-full", "font-Poppins")}>
              { !!title ? <h1 className="ac-type-h3-bold-negative-solid-nunito-sans-desktop">{ title }</h1> : null }
              { !!subtitle ? <p className="ac-type-body-positive-solid-nunitosans-desktop">{ subtitle }</p> : null }
              {
                !!action
                  ? <div className={cn("flex justify-end pt-4")}>
                      <LinkIcons data={{...LinkIconsInit, text: action.title, iconSecond: "arrow_forward_ios"}} />
                    </div>
                  : null
              }
            </div>
          </div>
        )
      }
    </div>
    {/* content mobile */}
     {/* bullets */}
     <div className="w-full flex justify-center gap-2 absolute bottom-[80px] w-p:bottom-0">
      {
        items.map((_: any, i:number) => <div onClick={() => handleClickBullet(i)} className={cn("w-4 h-4 rounded-full bg-[#686868] cursor-pointer", { "w-[32px]": i === active })} key={`bullet-${i}`} />)
      }
    </div>
    {/* bullets */}
  </section>
}

export default CarouselPortalverse