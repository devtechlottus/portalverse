import Head from "next/head"
import { useRouter } from "next/router"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Image from "@/components/Image"
import BeWantedForm from "@/forms/container/BeWanted"
import Youtube from "@/components/Youtube"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import RichtText from "@/components/Richtext/Richtext"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const Empleabilidad: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout>
        <div className="head col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2 w-d:hidden mb-6">
          <BannerPortalverse data={ sections.head.banner }/>
        </div>
      </ContentFullLayout>
      <ContentLayout classNames="gap-6">
        <div className="head col-span-12 w-t:hidden w-p:hidden">
          <BannerPortalverse data={ sections.head.banner }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:order-2 w-t:hidden w-p:hidden">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { sections.descripcion.title}</p>
          <RichtText font="ligth" data={{content: sections.descripcion.text.content}} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:order-1 relative">
          <BeWantedForm pathThankyou={`/thank-you?type=egresados`} classNames="absolute w-full h-auto bg-white bottom-0 rounded-lg" />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10"> { sections.vacantes.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">aqui va el carrrusel</div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{ sections.vinculacionEmpresas.title }</p>
          <RichtText data={{ content: sections.vinculacionEmpresas.description.content }}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image src="/images/404.png" alt="error_image" classNames="aspect-3/4"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-darkBlue">
        <ContentLayout>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-4 w-d:hidden">
            <p className="font-Poppins text-white font-bold leading-[125%] text-6.5 w-t:text-6 w-p:text-6">{ sections.historiasExito.title }</p>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-6 mb-6">
            <Youtube data={ sections.historiasExito.video }/>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto w-t:hidden w-p:hidden">
            <p className="font-Poppins text-white font-bold leading-[125%] text-6.5 w-t:text-6 w-p:text-6 mb-6">{ sections.historiasExito.title }</p>
            <RichtText font="light" data={{content: sections.historiasExito.description.content}}/>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mb-6 w-d:hidden">
            <RichtText font="light" data={{content: sections.historiasExito.description.content}}/>
          </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="gap-6 mt-[72px] w-t:mt-12 w-p:mt-12">
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{ sections.comoFunciona.title }</p>
          <RichtText data={{content: sections.comoFunciona.description.content}}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Youtube data={ sections.comoFunciona.video }/>
        </div>
        <div className="w-t:col-span-8 w-p:col-span-4 w-d:hidden">
          <RichtText data={{content: sections.comoFunciona.description.content}}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6">{ sections.eventos.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          aqui va el carrusel de eventos
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY mt-[72px] w-t:mt-12 w-p:mt-12">
        <ContentLayout>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
            <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6">{ sections.noticias.title }</p>
          </div>
          <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-6">
            {
             sections.noticias.news.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item}/>
             </section>)
            }
          </section>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden w-p:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2">
          <NewBanner data={ sections.contacto.banner }/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2">
          <NewBanner data={ sections.contacto.banner }/>
        </div>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('empleabilidad.json');

  return {
    props: { sections, meta }
  }
}

export default Empleabilidad