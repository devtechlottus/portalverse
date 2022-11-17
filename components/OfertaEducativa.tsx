import { FC, memo } from "react"
import Link from "next/link"
import cn from "classnames"
import PromoLink from "@/components/PromoLink"


const OfertaEducativa: FC<any> = memo(({ data, classNames,level = "" } : any) => {
    
  return <section className={cn("col-span-12 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2", classNames)}>
    {
      data.map((content: any, i: number) => <section key={`section-oferta-${i}`}>
          <Link href={`${level}${content.level}`}>
            <a>
              <PromoLink data={{
                ...content.promo
              }} />
            </a>
          </Link>
        </section>)
    }
  </section>
})

export default OfertaEducativa