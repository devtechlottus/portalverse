import { FC, memo, useEffect, useState } from "react"
import { useRouter } from "next/router"
import cn from "classnames"
import CardWebsite from "../CardWebsite"



const CardsWebsite: FC<any> = memo(({ data, classNames, cols = 4 } : any) => {

  const [ allCards, setAllCards ] = useState<Array<any>>([]);
  const router = useRouter();


  useEffect(() => {
    setAllCards([ ...data ]);
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps
    
  return <>
  {
    cols === 4 
    ? <section className={cn(`col-span-12 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1`, classNames)}>
    {
      allCards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
       <CardWebsite data={item} />
      </section>)   
    }
    </section>
    : cols === 3
    ? <section className={cn(`col-span-12 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1`, classNames)}>
    {
      allCards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
       <CardWebsite data={item} />
      </section>)   
    }
    </section>
    : cols === 2
    ? <section className={cn(`col-span-12 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1`, classNames)}>
    {
      allCards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
       <CardWebsite data={item} />
      </section>)   
    }
    </section>
    : null
  }
  </>
})

export default CardsWebsite