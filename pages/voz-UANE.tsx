import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import ContentLayout from "@/layouts/Content.layout"
import Banner from "@/components/Banner"
import CardWebsite from "@/components/CardWebsite"
import Button from "@/components/Button"
import Spotify from "@/components/Spotify"

const ThankYouPage: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentFullLayout classNames="w-d:hidden mb-12 w-t:mb-6 w-p:mb-6">
        <div className="col-span-12 w-t:col-span-8">
          <Banner data={ sections.head.banner } onBtn={() => router.push(sections.head.banner.redirect)}/>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="col-span-12 w-p:col-span-4 w-t:hidden w-p:hidden">
          <Banner data={ sections.head.banner } onBtn={() => router.push(sections.head.banner.redirect)}/>
        </div>
        <div className="col-span-8 w-t:col-span-8 w-p:col-span-4">
          <div className="mb-6">
            <p className="font-Poppins font-bold text-10 w-t:text-7.5 w-p:text-7.5 leading-[125%]">{sections.articles.title}</p>
          </div>
          <section className="col-span-8 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-6">
            {
              sections.articles.articles.map((item:any, i:number) => <section key={`section-articles-${i}`}>
               <CardWebsite data={item} onClick={()=> router.push(`blog/${item.redirect}`)}/>
              </section>)
            }
          </section>
          <div className="col-span-8 w-t:col-span-8 w-p:col-span-4 flex justify-center">
            <Button data={sections.articles.button} onClick={() => router.push(sections.articles.button.redirect)}/>
          </div>
        </div>
        <div className="col-span-4 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 w-t:text-7.5 w-p:text-7.5 leading-[125%] mb-6">{sections.podcast.title}</p>
          {
            sections.podcast.items.map((item:any, i:number) => <section className="mb-6" key={`section-articles-${i}`}>
             <Spotify data={item}/>
            </section>)
          }
          {
            sections.banners.banners.map((item:any, i:number) => <section className="mb-12 w-t:mb-6 w-p:mb-6" key={`section-podcast-${i}`}>
             <Banner data={item} onBtn={() => router.push(item.redirect)}/>
            </section>)
          }
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {

  const { sections, meta } = await getDataPageFromJSON('voz-UANE.json');

  return {
    props: { sections, meta }
  }
}

export default ThankYouPage