import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import Youtube from "@/components/Youtube"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import PedirInformacionPage from "@/types/PedirInformacion.types"
import RichtText from "@/components/Richtext/Richtext"

const PedirInformacion: NextPageWithLayout<PedirInformacionPage> = ({ sections, meta }: PedirInformacionPage) => {
  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11 text-13.5 w-t:text-8.5 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%]">{ sections.head.title }</section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11 text-base w-t:text-3.5 w-p:text-3.5 font-Nunito leading-[125%]">
          <RichtText data={{
            content: sections.head.description
          }} />
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11">
          <OpenForm data={sections.form} pathThankyou={`/thank-you`} image={{ src: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", alt:"image-person" }} />
        </section>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11 mb-12 w-t:mb-6 w-p:mb-6">
          <Youtube data={ sections.video } />
        </section>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('pedir-informacion.json');

  return {
    props: { sections, meta }
  }
}

export default PedirInformacion