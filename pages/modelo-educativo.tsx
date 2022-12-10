import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import Image from "@/components/Image"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import ContentInsideLayout from "@/layouts/ContentInside.layout"

const ModeloEducativo: NextPageWithLayout = ({ sections, meta }: any) => {
  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="w-d:col-span-7 w-t:col-span-7 w-p:col-span-4">
          <h1 className="text-13 w-t:text-8.25 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%]">{ sections.head.title }</h1>
          <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] ">{ sections.head.description }</p>
        </div>
        <div className="w-d:col-span-12 w-t:hidden w-p:hidden w-d:mb-12 w-t:mb-6">
          <Image alt={ sections.modelo.desktop.alt } src={ sections.modelo.desktop.src } classNames="aspect-2/1"/>
        </div> 
        <div className="w-t:col-span-8 w-p:col-span-4 w-d:hidden">
          <Image alt={ sections.modelo.mobile.alt } src={ sections.modelo.mobile.src } classNames="aspect-3/4"/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <h3 className="font-Poppins font-bold text-10 leading-[50px] w-t:text-6 w-t:leading-[30px] w-p:text-6 w-p:leading-[30px]">{ sections.descripcion.title }</h3>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <ContentInsideLayout classNames="gap-6">
            {
              sections.descripcion.body.map((text: string) => <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] col-span-6 w-p:col-span-4">{ text }</p>)
            }
          </ContentInsideLayout>
        </div>
      </ContentLayout>    
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('modelo-educativo.json');
  
  return {
    props: { sections, meta }
  }
}

export default ModeloEducativo