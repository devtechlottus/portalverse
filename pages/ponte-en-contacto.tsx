import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Button from "@/components/Button"
import NewBanner from "@/components/NewBanner"
import { ButtonInit } from "@/components/fixture"
import ReasonsToContact from "@/forms/container/ReasonsToContact"
import Breadcrumbs from "@/components/Breadcrumbs/BreadcrumbPortalverse"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const PonteEnContacto: NextPageWithLayout = ({ sections, meta }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout>
        <ContentInsideLayout>
          <div className="col-span-5 w-t:col-span-8 w-p:col-span-4 bg-darkBlue text-white w-t:pb-6">
            <ContentInsideLayout classNames="grid-cols-5 w-t:grid-cols-8">
              <div className="col-span-5 col-start-2 col-end-5 w-t:col-span-8 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-p:col-end-5">
                <Breadcrumbs />
              </div>
              <h1 className="col-span-5 col-start-2 col-end-5 w-t:col-span-8 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-p:col-end-5 text-10 w-p:text-[30px] w-p:m-6 font-bold font-Poppins leading-[125%]">{ sections.head.title }</h1>
              {
                sections.medios.map((medio: any, i: number) => <p key={`item-media-${i}`} className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 text-base font-Poppins w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[24px] w-t:leading-[125%] w-p:leading-3[130%]"><span className="material-icons mr-2">{ medio.icon }</span>{ medio.text }</p>)
              }
              <section className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1">
                <p className="text-4.5 w-t:text-6 font-Poppins font-bold w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[125%]">Visítanos en nuestros campus</p>
              </section>
              <section className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-d:mb-18 mt-6">
              <Button data={{...ButtonInit, title: 'Ver directorio'}} />
              </section>
              <p className="col-span-5 col-start-2 col-end-11 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1  text-4.5 font-bold font-Poppins w-d:mt-12 w-t:mt-18 w-p:mt-16 w-p:ml-6 leading-[125%]">Síguenos en redes sociales</p>
              <section className="grid w-d:grid-cols-4 w-t:grid-cols-4 w-p:grid-cols-4 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-6 w-p:col-start-1 w-p:col-end-4 w-d:mt-[38px] w-t:mt-[38px] w-p:my-[20px] w-p:ml-6 w-d:mb-6 w-t:mb-[6.5rem] w-p:mb-13">
              {
                sections.sociales.map((social: any, i:number) => <Link key={`span-icons-${i}`} href={social.link} passHref>
                    <a target={"_blank"}>
                      <span className="material-icons">{ social.icon }</span>
                    </a>
                  </Link>)
              }
              </section>
            </ContentInsideLayout>
          </div>
          <div className="col-span-7 w-t:col-span-8 w-p:col-span-4">
            <ContentInsideLayout classNames="grid-cols-7 w-t:grid-cols-8">
              <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 col-start-3 col-end-11 w-t:col-start-1 w-t:col-end-8 w-p:col-start-1 w-p:col-end-4">
                <div className="mt-18">
                  <ReasonsToContact />
                </div>
              </div>
            </ContentInsideLayout>
          </div>
        </ContentInsideLayout>
        <ContentFullLayout>
          <NewBanner 
            data={sections.banner } 
            onBtn={ () =>{
              router.push(`/directorio`)
              console.log('hola')
              } 
            } />
        </ContentFullLayout>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('ponte-en-contacto.json');

  return {
    props: { sections, meta }
  }
}

export default PonteEnContacto