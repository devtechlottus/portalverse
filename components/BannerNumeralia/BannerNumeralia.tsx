import { FC } from "react"
import cn from "classnames"
import Numbers from "@/components/Numbers"

const BannerNumeralia: FC<any> = ({ data: { image, title, subtitle, statics }, classNames }: any) => {
  return <section style={{"backgroundImage":`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`}} className={cn("numeralia col-span-12 w-t:col-span-8 w-p:col-span-4 bg-cover flex flex-col justify-center w-p:justify-start px-6 py-12 w-p:py-6 h-[342px] text-white", classNames)}>
    <h1 className="mb-6 font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ title }</h1>
    <h3 className="mb-6 font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ subtitle }</h3>
    <div className="flex gap-6">
      {
        statics.map((item:any, i:number) => <section className="w-[144px]" key={`section-numbers-${i}`}>
            <Numbers data={item}/>
          </section>)
      }
    </div>
  </section>
}

export default BannerNumeralia