import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import OfertaEducativa from "@/components/OfertaEducativa"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Banner from "@/components/Banner"
import Youtube from "@/components/Youtube"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import Numbers from "@/components/Numbers"
import CardWebsite from "@/components/CardWebsite"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const Home: NextPageWithLayout = ({ data: { sections, meta } }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <BannerPortalverse data={ sections.head.banner } />
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <BannerPortalverse classNames="w-t:hidden w-p:hidden" data={ {...sections.head.banner, title:"BIENVENIDOS OSOS", subtitle:"¡Nos renovamos para darte la mejor oferta educativa!"} }/>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-12 w-t:mt-6 w-p:mt-6">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-t:ac-type-h3-bold-solid-poppins-tablet w-p:ac-type-h3-bold-solid-poppins-tablet">{ sections.oferta.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <OfertaEducativa data={sections.oferta.levels} level={'oferta-educativa/'} classNames="opacity-80 w-d:mb-8"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="col-span-8">
          <Banner data={sections["banner-internacional"]} 
            onBtn={ () => {
              router.push('/internacionalizacion')
            }}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden">
        <div className="col-span-12">
          <Banner data={sections["banner-internacional"]} 
            onBtn={ () => {
              router.push('/internacionalizacion')
            }}/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden gap-6 my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="w-t:col-span-8 w-p:col-span-4">
          <Banner data={sections["banner-podcast"]} 
            onBtn={ () => {
              router.push('/podcast')
            }}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden my-6">
        <div className="col-span-12 w-p:col-span-4">
          <Banner data={sections["banner-podcast"]} 
            onBtn={ () => {
              router.push('/podcast')
            }}/>
        </div>
      </ContentLayout>
      <ContentLayout>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ">
          {
            sections.numbers.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
              <Numbers data={item}/>
            </section>)
          }
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <p className="ac-type-h3-bold-solid-poppins-desktop w-p:ac-type-h3-bold-solid-poppins-tabmob">{ sections.vozUane.title }</p>
          </section>
          <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
            {
             sections.vozUane.notas.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item}/>
             </section>)
            }
          </section>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <OpenForm pathThankyou={`/thank-you`} image={{ src: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", alt:"image-person" }} />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <p className="mb-6 ac-type-h5-bold-solid-poppins-desktop w-p:ac-type-h3-bold-solid-poppins-tabmob">{sections.descubre.title}</p>
            <Youtube data={sections.descubre} />
          </div>
      </ContentLayout>
      <ContentLayout>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/ponte-en-contacto">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Ponte en contacto
            </a>
          </Link>
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('home.json');

  return {
    props: { 
      data: { sections, meta }
    },
  }
}

export default Home
