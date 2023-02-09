import { FC, SyntheticEvent, useEffect, useState } from "react"
import cn from "classnames"
import CardWebsite from "@/components/CardWebsite";
import Image from "../Image";

type CarouselProps = {
  data: any;
  type: 'CARD' | 'IMAGE';
}
const Carousel: FC<CarouselProps> = ({ data: { items }, type }: any) => {

  const [ active, setActive ] = useState<number>(0);
  const [ countItems, setCountItems ] = useState<number>(0);

  const stylesBaseControls = "material-icons select-none absolute top-[40%] p-1 rounded-lg text-[12px] w-p:hidden";

  useEffect(() => {
    setCountItems((items.length));
  }, [items]);

  const handlerClickControl = ({ target }: SyntheticEvent) => {
    const { ariaLabel } = (target as HTMLElement)
    if (items.length > 1) {
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

  return <section className="flex flex-col relative w-full">
    <span aria-label="prev" onClick={handlerClickControl} className={cn("z-10 left-0 w-p:invisible", { "bg-[#808080]": items.length === 1, "bg-white cursor-pointer": items.length > 1 }, stylesBaseControls)}>arrow_back_ios</span>
    <section className="overflow-hidden w-d:w-[90%] w-t:w-[95%] w-p:w-[90%] mx-auto gap-6 mb-6 grid grid-flow-col grid-rows-1">
      {
        items.map((item: any, i: number) => <section key={`card-item-${i}`} className="w-85 relative flex flex-col" style={{ "transition": "left 0.5s ease-out", "left": `${active === 0 ? 0 : `-${active*107}%`}` }}>
          { 
            type === "IMAGE" ?
            <CardWebsite key={`card-${i}`} data={item}/> 
            :
            <Image src="https://res.cloudinary.com/teepublic/image/private/s--XB6c8VUe--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1603363929/production/designs/15305384_0.jpg" alt="Image" classNames="w-85 h-43 w-p:w-full"/>
          }
        </section>)
      }
    </section>
    <div className={cn("w-full flex justify-center gap-2 z-20")}>
        {
          items.map((_: any, i: number) => <div key={`bullet-item-${i}`} onClick={() => activeBulletSlide(i)} className={cn("h-4 bg-[#686868] rounded-full cursor-pointer", { "w-4": i !== active, "w-8": i === active })} />)
        }
      </div>
    <span aria-label="next" onClick={handlerClickControl} className={cn("z-10 right-0 w-p:invisible", { "bg-[#808080]": items.length === 1, "bg-white cursor-pointer": items.length > 1 }, stylesBaseControls)}>arrow_forward_ios</span>
  </section>
}
export default Carousel