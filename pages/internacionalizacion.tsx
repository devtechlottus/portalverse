import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Youtube from "@/components/Youtube"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import Slider from "@/components/Slider"
import ContentLayout from "@/layouts/Content.layout"
import RichtText from "@/components/Richtext/Richtext"
import PromoLink from "@/components/PromoLink"
import CardWebsite from "@/components/CardWebsite"

const Internacionalizacion: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Slider data={{ ...sections.head.slider, height: "350px" }} />
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Slider data={{ ...sections.head.slider }} />
        </div>
      </ContentLayout>
      <ContentLayout classNames="w-d:mt-18 w-t:mt-6 w-p:mt-12">
        <div className="col-span-8 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 w-t:text.8.5 w-p:text-6 mb-6 leading-[125%] w-t:leading-[111%]">{sections.head.title}</p>
          <p className="font-Poppins font-bold text-5.5 w-t:text-4.5 w-p:text-base mb-6 leading-[130%] w-t:leading-[125%]">{sections.head.subtitle}</p>
          <RichtText classNames="" data={{
            content: sections.head.description
          }} />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-12 w-t:mb-12 w-p:mb-6">
          <p className="font-Poppins font-bold text-10 w-t:text-7.5 w-p:text-6 leading-[125%]">{ sections.modes.title}</p>
          aqui va rainbow component
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-6 w-t:mb-12 w-p:mb-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.alliances.title}</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12 w-t:mb-12 w-p:mb-6">
          {
           sections.alliances.alliances.map((item:any, i:number) => <section key={`section-alliances-${i}`}>
            <PromoLink data={item} onClick={()=>window.open(item.redirect)}/>
           </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.articles.title}</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mb-18 w-t:mb-12 w-p:mb-6">
          {
           sections.articles.articles.map((item:any, i:number) => <section key={`section-alliances-${i}`}>
            <CardWebsite data={item} onClick={()=> router.push(`blog/${item.redirect}`)}/>
           </section>)
          }
        </section>

      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {

  const { sections, meta } = await getDataPageFromJSON('internacionalizacion.json');

  return {
    props: { sections, meta }
  }
}

export default Internacionalizacion