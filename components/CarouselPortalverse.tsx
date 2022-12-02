import { FC, SyntheticEvent, useEffect, useState } from "react"
import cn from "classnames"
import Button from "@/components/Button"

const CarouselPortalverse: FC<any> = ({ classNames, classNamesContainer, items }: any) => {

  const styleBaseControls = "material-icons cursor-pointer text-[12px] select-none";

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
      {
        items.map(({ image: { src }, title = "", subtitle = "", action = null }: any, i: number) => <div className={cn("w-full h-full", { "hidden": i !== active })} key={`image-${i}`}>
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
      <div className="w-p:hidden absolute left-[40px] top-[45%]">
        <span aria-label="prev" onClick={handlerClickControl} className={cn(styleBaseControls)}>arrow_back_ios</span>
      </div>
      <div className="w-p:hidden absolute right-[40px] top-[45%]">
        <span aria-label="next" onClick={handlerClickControl} className={cn(styleBaseControls)}>arrow_forward_ios</span>
      </div>
      <div className="mb-10">
      {
        items.map(({ title = "", subtitle = "", action = null }: any, i: number) => <div className={cn("w-full h-full", { "hidden": i !== active })} key={`image-${i}`}>
            { !!title ? <h1 className="pt-6 font-semibold text-[32px] leading-[40px]">{ title }</h1> : null }
            { !!subtitle ? <p className="pt-2 font-semibold text-6 leading-[30px]">{ subtitle }</p> : null }
            {
              !!action
                ? <div className={cn("flex justify-end pt-6")}>
                    <lottus-link-icons data={{  text: 'xdxd', size: 'small', isBold: false, disabled: false, id: '123', icon: 'person',}} />
                  </div>
                : null
            }
          </div>
        )
      }
      </div>
    </div>
    <div className="w-full flex justify-center gap-2 absolute bottom-[40px] w-p:bottom-0">
      {
        items.map((_: any, i:number) => <div onClick={() => handleClickBullet(i)} className={cn("w-4 h-4 rounded-full bg-[#686868] cursor-pointer", { "w-[32px]": i === active })} key={`bullet-${i}`} />)
      }
    </div>
  </section>
}

export default CarouselPortalverse