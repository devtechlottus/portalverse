import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Youtube from "@/components/Youtube"
import Banner from "@/components/Banner"
import Button from "@/components/Button"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import BannerNumeralia from "@/components/BannerNumeralia/BannerNumeralia"
import BeWantedForm from "@/forms/container/BeWanted"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import RichtText from "@/components/Richtext/Richtext"

const Egresados: NextPageWithLayout = ({ sections, meta }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentFullLayout classNames="gap-6 w-d:hidden mb-6">
        <div className="head col-span-12 w-t:col-span-8 w-p:col-span-4">
          <BannerNumeralia data={ sections.head.banner } />
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="head col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2 w-t:hidden w-p:hidden">
          <BannerNumeralia data={ sections.head.banner } />
        </div>
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4 w-p:order-2">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { sections.introduccion.title}</p>
          <RichtText data={{
            content: sections.introduccion.descripcion
          }} />
        </div>
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4 w-p:order-1 relative">
          <BeWantedForm pathThankyou={`/thank-you?type=egresados`} classNames="absolute w-full h-auto bg-white bottom-0 rounded-lg" />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Youtube data={ sections.video.video }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { sections.video.title }</p>
          <RichtText data={{
            content: sections.video.descripcion
          }} />
          <Button data={ sections.video.accion } onClick={()=>{
            router.push(`${router.pathname}/talento`)
          }}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ sections["banner-empleabilidad"] }
            onBtn={ () => {
              router.push('/empleabilidad')
            }}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ sections["banner-oferta-educativa"] }
            onBtn={ () => {
              router.push('/oferta-educativa')
            }}
          />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ sections["banner-tramites"] }
            onBtn={ () => {
              window.open('http://sistema.uane.edu.mx/siuane/login.aspx')
            }}
          />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="gap-6">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden my-6">
          <Banner data={ sections["banner-empleabilidad"] }/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden mb-6">
          <Banner data={ sections["banner-oferta-educativa"] }
            onBtn={ () => {
              router.push('/oferta-educativa')
            }}
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden">
          <Banner data={ sections["banner-tramites"] }
            onBtn={ () => {
              window.open('http://sistema.uane.edu.mx/siuane/login.aspx')
              
            }}
          />
        </div>
      </ContentFullLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY w-t:bg-SC/Actions/AC-300 w-p:bg-SC/Actions/AC-300 mt-12">
        <ContentLayout>
          <div className="col-span-12 pt-6 pb-[53px]">
            <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{ sections.noticias.title }</p>
            {
              <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
              {
               sections.noticias.news.map((item:any, i:number) => <section key={`section-blog-${i}`}>
                <CardWebsite data={item}/>
               </section>)
              }
            </section>
            }
          </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="my-[72px]">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <NewBanner data={ sections.dudas.banner } />
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>

}

export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('egresados.json');

  return {
    props: { sections, meta }
  }
}


export default Egresados