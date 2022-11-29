import { ReactElement } from "react"
import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Routes from "@/routes/Routes"
import Ofertas from "@/components/OfertaEducativa"

const OfertaEducativa: NextPageWithLayout<any> = ({ data: { oferta, level } }: any) => {
  return <>
    <Head>
      <title>Oferta Educativa</title>
    </Head>
    <section className="mx-auto mt-6 w-full col-span-7 w-t:colspan-7 w-p:col-span-4">
      <h1 className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-6 leading-16.25 text-black">Oferta educativa</h1>
      <p className="font-Nunito font-normal text-base leading-5 w-d:mb-8.5">Encuentra en UANE la licenciatura, ingeniería o posgrado que estás buscando y estudia con el respaldo y prestigio de una de las mejores universidades del país.</p>
    </section>
    <section className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 text-10 w-t:text-8.5 w-p:text-6 font-Poppins font-bold">
      <p>Busca tu nivel educativo</p>
    </section>
    <section className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4">
      <Ofertas classNames="mb-6 mt-4 opacity-80" data={oferta} level={ level } />
    </section>
    
  </>
}

export function getStaticProps(context: any) {
  const oferta = Routes["oferta-educativa"].reduce((prev: any, { params: { level, config: { title, promo } } }: any) => [ ...prev, ({ level,title, promo:{...promo, text: title} })], []);
  return {
    props: { data: { oferta, level:'oferta-educativa/' } }
  }
}

OfertaEducativa.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default OfertaEducativa

   