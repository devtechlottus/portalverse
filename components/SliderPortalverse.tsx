import { FC, SyntheticEvent, useEffect, useState } from "react"
import cn from "classnames"
import Button from "@/components/Button/Button"
import LinkIcons from "@/components/LinkLottus";
import { LinkIconsInit } from "@/components/fixture";
import Image from "@/components/Image"

const SliderPortalverse: FC<any> = ({ data, onBtn, classNames }: any) => {

  const stylesBaseControls = "w-p:hidden select-none absolute top-[45%] p-1 rounded-lg text-[12px]";

  const [ active, setActive ] = useState<number>(0);
  const [ countItems, setCountItems ] = useState<number>(0);
  const [ slides, setSlides ] = useState<Array<any>>([]);
  const [ changeDetect, setChangeDetect ] = useState<number>(0);
  const [ wMob, setWMob ] = useState<string>("0px");

  const detectResize = () => {
    setChangeDetect((prevState: number) => prevState + 1);
  }

  useEffect(() => {
    detectResize();
    window.addEventListener('resize', detectResize);
    return () => window.removeEventListener('resize', detectResize);
  }, []);

  useEffect(() => {
    const { outerWidth } = window;
    if ( outerWidth < 600) {
      setWMob(`${outerWidth}px`)
    }
  }, [changeDetect]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCountItems(data.slides.length);
    setSlides([ ...data.slides ]);
  }, [data])

  const onBtnSlider = () => {
    if (!!onBtn) {
      onBtn();
    }
  }

  const handlerClickControl = ({ target }: SyntheticEvent) => {
    const { ariaLabel } = (target as HTMLElement)
    if ( countItems > 1) {
      if ( ariaLabel === "next" ) {
        if ( active === countItems - 1 ) {
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
          setActive(countItems - 1);
          return
        }
        if ( active > 0 ) {
          setActive((prevState: number) => prevState-1);
          return
        }
      }
    }
  }

  const activeBulletSlide = (position: number) => setActive(position)

  return <section className="relative z-1">
    {/* desktop */}
    <div className={cn("z-20 left-0", { "bg-white cursor-pointer": countItems > 1 }, stylesBaseControls)}>
      <span aria-label="prev" onClick={handlerClickControl} className="material-icons">arrow_back_ios</span>
    </div>
    <section style={{ "height": data.height }} className={cn("w-full flex overflow-hidden w-p:hidden")}>
      {
        slides.map((item: any, i: number) => <div key={`slide-item-${i}`} style={{ "transition": "left 0.5s ease-out", "left": `${active === 0 ? 0 : `-${active*100}%`}` }} className={cn("w-full h-full relative flex flex-col grow aspect-2/1")}>
          <Image classNames="w-t:hidden w-full h-full absolute z-1 aspect-2/1" src={item.urlImage.desktop} alt="image" />
          <Image classNames="w-d:hidden w-full h-full absolute z-1 aspect-2/1" src={item.urlImage.tablet} alt="image" />
          <div className="absolute z-10 w-d:mt-12 w-t:mt-20 w-d:px-[200px] w-t:px-[160px]">
            <h2 className="font-Poppins font-bold text-center w-d:text-[65px] w-d:leading-[80px] w-t:text-[30px]">{ item.title }</h2>
            <p className="font-Poppins font-semibold text-center w-d:text-[24px] w-d:leading-[30px] w-t:text-base">{ item.text }</p>
            {
              !!data.action
                ? <Button data={{...data.action}} onClick={onBtnSlider}/>
                : null
            }
          </div>
          <div className={cn("absolute w-full h-full", classNames, {
          "bg-[#ffffff80]": data.overlayWhite,
          "bg-[#00000080]": data.overlayDak
          })}></div>
        </div>)
      }
      <div className={cn("w-full flex justify-center absolute bottom-10 gap-2 z-20")}>
        {
          slides.map((_: any, i: number) => <div key={`bullet-item-${i}`} onClick={() => activeBulletSlide(i)} className={cn("h-4 bg-[#686868] rounded-full cursor-pointer", { "w-4": i !== active, "w-8": i === active })} />)
        }
      </div>
    </section>
    <div className={cn("z-10 right-0", { "bg-white cursor-pointer": countItems > 1 }, stylesBaseControls)}>
      <span aria-label="next" onClick={handlerClickControl} className="material-icons">arrow_forward_ios</span>
    </div>
    {/* desktop */}

    {/* mobile */}
    <section className={cn("w-full h-auto flex overflow-hidden w-d:hidden w-t:hidden")}>
      {
        slides.map((item: any, i: number) => <div key={`slide-item-${i}`} style={{ "transition": "left 0.5s ease-out", "left": `${active === 0 ? 0 : `-${active*100}%`}` }} className={cn("w-full h-auto relative flex flex-col grow")}>
          <div style={{"width": wMob}} className={cn("aspect-1/1")}>
            <Image classNames="w-full h-full aspect-1/1" src={item.urlImage.mobile} alt="image" />
          </div>
          <div className="p-4 flex flex-col gap-6">
            <h2 className="font-Poppins font-normal text-[32px] leading-10">{ item.title }</h2>
            <p className="font-Nunito-Sans font-normal text-base leading-5">{ item.text }</p>
            {
              !!data.action
                ? <LinkIcons data={{ ...LinkIconsInit, text: data.action.title }} onClick={onBtnSlider} />
                : null
            }
          </div>
        </div>)
      }
    </section>
    <div className={cn("w-full flex justify-center gap-2 mt-4 pb-4 w-d:hidden w-t:hidden")}>
      {
        slides.map((_: any, i: number) => <div key={`bullet-item-${i}`} onClick={() => activeBulletSlide(i)} className={cn("h-4 bg-[#DDDDDD] rounded-full cursor-pointer", { "w-4": i !== active, "w-8": i === active })} />)
      }
    </div>
    {/* mobile */}
  </section>
}

export default SliderPortalverse