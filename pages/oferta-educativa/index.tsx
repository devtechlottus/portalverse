import { ReactElement } from "react"
import Head from "next/head"
import Link from "next/link"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Routes from "@/routes/Routes"

const OfertaEducativa: NextPageWithLayout<any> = ({ data: { oferta } }: any) => {

  console.log("oferta", oferta);

  return <>
    <Head>
      <title>Oferta Educativa</title>
    </Head>
    <section className="mx-auto mt-6 w-full">
      <h1 className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-6 leading-16.25 text-dark">Directorio Universitario</h1>
      <p className="font-Nunito font-normal text-base leading-5 mb-8.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      {
        oferta.map((content: any, i: number) => <section key={`section-oferta-${i}`} className="mb-18">
            <Link href={`${oferta.level}`}>
              <a>
                <h2 className="font-Poppins font-bold text-10 leading-12.5">{ content.title }</h2>
              </a>
            </Link>
          </section>
        )
      }
    </section>
  </>
}

export function getStaticProps(context: any) {
  const oferta = Routes["oferta-educativa"].reduce((prev: any, { params: { level, config: { title } } }: any) => [ ...prev, ({ level,title })], []);
  return {
    props: { data: { oferta } }
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