import { FC, memo } from "react"
import cn from "classnames"
import Numbers from "./Numbers"


const NumbersComponent: FC<any> = memo(({ data, classNames } : any) => {
    
  return <section className={cn("w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ", classNames)}>
    {
      data.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
        <Numbers data={item}/>
      </section>)
    }
  </section>
})

export default NumbersComponent