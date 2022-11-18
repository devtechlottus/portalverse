import { useState } from "react"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import RichtText from "@/components/Richtext"
import Youtube from "@/components/Youtube"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"

const ThankYouPage: NextPageWithLayout = ({ data }: any) => {
  return <HeaderFooterLayout>
    <ContentFullLayout classNames="">
      <ContentInsideLayout>
        <div className="col-span-5 w-t:col-span-8 w-p:col-span-4 bg-darkBlue text-white w-t:pb-6">
          <ContentInsideLayout>
            <h1 className="col-span-12 col-start-3 col-end-11 w-t:col-span-8 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-p:col-end-5 text-10 w-p:text-[30px] w-p:m-6 font-bold font-Poppins mt-[72px] leading-[125%]">{ data.text.title }</h1>
            <p className="col-span-12 col-start-3 col-end-11 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 text-base font-Poppins w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[24px] w-t:leading-[125%] w-p:leading-3[130%]">{ data.text.subtitle }</p>
            <p className="col-span-12 col-start-3 col-end-11 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1  text-4.5 font-bold font-Poppins w-d:mt-12 w-t:mt-6 w-p:mt-6 w-p:ml-6 leading-[125%]">{ data.text.socialMediaTitle }</p>
            <section className="grid w-d:grid-cols-4 w-t:grid-cols-4 w-p:grid-cols-4 col-start-3 col-end-11 w-t:col-start-2 w-t:col-end-6 w-p:col-start-1 w-p:col-end-4 w-d:mt-[38px] w-t:mt-[38px] w-p:my-[20px] w-p:ml-6">
            {
              data.text.icons.map((item:any, i:number) => <span className="material-icons">
                {item}
              </span>)
            }
            </section>
          </ContentInsideLayout>
        </div>
        <div className="col-span-7 w-t:col-span-12 w-p:col-span-12">
          <Youtube data={ data.video} />
        </div>
      </ContentInsideLayout>
    </ContentFullLayout>
  </HeaderFooterLayout>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        text: {
          title: "Gracias por tu interés",
          subtitle: 'Nuestro equipo se pondrá en contacto pronto, Te invitamos a seguirnos en redes sociales para mantenerte enterado del mundo UANE.',
          socialMediaTitle: 'Síguenos en redes sociales' ,
          icons: ['person', 'person', 'person', 'person'],
        },
        video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} }
      }
    }
  }
}

export default ThankYouPage