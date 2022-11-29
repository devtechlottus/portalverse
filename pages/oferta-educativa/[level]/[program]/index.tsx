import { Fragment, useEffect, useState } from "react"
import Head from "next/head"
import cn from "classnames"
import Routes from "@/routes/Routes"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Breadcum from "@/components/Breadcrumb"
import Image from "@/components/Image"
import Tabs from "@/components/Tabs"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import CardsOstanding from "@/components/CardsOustanding"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Academia from "@/components/Academia"
import licenciatura from "@/dummy/licenciatura"
import especialidad from "@/dummy/especialidad"
import doctorado from "@/dummy/doctorado"
import maestria from "@/dummy/maestria"
import bachillerato from "@/dummy/bachillerato"
import Youtube from "@/components/Youtube"
import RichtText from "@/components/Richtext"
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection"

const EducativeOfferProgram: NextPageWithLayout<any> = ({ data: { level, program, info } }: any) => {

  const [ tabActive, setTabActive ] = useState<number>(0);
  const [ contentTabs, setContentTabs ] = useState<any>([]);

  useEffect(() => {
    const allContents = info.modality.tabs.items.reduce((prev: any, curr: any) => { 
      const { content } = curr;
      return  [...prev, content ];
    }, []);
    setContentTabs([...allContents]);
  }, [info.modality.tabs]);

  return <>
    <Head>
      <title>{ info.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Breadcum data={{
              textItems: [],
              icon: "home",
              tagOnItem: undefined,
              tagOnBack: undefined,
              textColor: undefined
            }} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <h1 className="text-13 font-bold font-Nunito leading-13 w-t:leading-[111%] w-p:leading-[125%] w-t:text-8.5 w-p:text-7.5">{info.head.titleGral}</h1>
          <p className="text-base font-Nunito leading-5 w-t:leading-[125%] w-p:leading-[125%] w-t:text-sm w-p:text-sm ">{info.head.description}</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <Image
            alt={info.head.image.alt}
            src={info.head.image.src}
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-4/3"
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="text-6.5 font-Nunito font-semibold leading-[125%] w-t:leading-[125%] w-p:leading-[125%] w-t:text-6 w-p:text-6">{info.modality.title}</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          <Tabs data={info.modality.tabs} tabIndex={(active: number) => setTabActive(active)} />
        </div>
        <ContentInsideLayout classNames="gap-6 col-span-12 w-t:col-span-8 w-p:col-span-4">
        {
          level === 'bachillerato'
            ? contentTabs.map( ( items: any, i: number ) => {
                return items.map(({ image, title: contentTitle, description: contentDescription }: any, j: number) => <Fragment key={`section-${j}`}>
                  <DescriptionSection
                    title={contentTitle}
                    description={contentDescription}
                    classNames={cn("col-span-7 grid grid-cols-7 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i, "w-d:order-2 w-t:order-1 w-p:order-1": j === 1 })}
                    titleStyles="col-start-2 col-end-7 w-t:col-end-8"
                    descriptionStyles="col-start-2 col-end-7 w-t:col-end-8"
                  />
                  <Image
                    alt={ image.alt }
                    src={ image.src }
                    classNames={cn("aspect-4/3 col-span-5 w-t:col-span-8 w-p:col-span-4 w-t:col-start-2 w-t:col-end-8", { "hidden": tabActive !== i, "w-d:order-1 w-t:order-2 w-p:order-2": j === 1 })}
                  />
                </Fragment>)
              })
            : contentTabs.map( (content: any, i: number) => <div key={`content-outstanding-${i}`} className="col-span-12 w-t:col-span-8 w-p:col-span-4"><CardsOstanding data={content}/></div>)
        }
        </ContentInsideLayout>
      </ContentLayout>

      {
        level !== 'bachillerato'
          ? <>
              <section className="w-d:block w-t:hidden w-p:hidden">
                <ContentLayout>
                  <ContentInsideLayout classNames="col-span-12 w-t:col-span-8 w-p:col-span-4">
                    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:py-[72px] w-d:px-[100px] w-t:px-0 w-t:pt-12 w-t:pb-6 w-p:py-6 bg-SC-Actions-AC-200">
                      <Academia data={info.searchSection} result={info.searchResult} select={info.select} />
                    </div>
                  </ContentInsideLayout>
                </ContentLayout>
              </section>
              
              <ContentFullLayout classNames="col-span-12 w-t:col-span-8 w-p:col-span-4 px-6 w-d:hidden w-t:block w-p:block bg-SC-Actions-AC-200">
                <ContentInsideLayout classNames="col-span-12 w-t:col-span-8 w-p:col-span-4">
                  <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:py-[72px] w-d:px-[100px] w-t:px-0 w-t:pt-12 w-t:pb-6 w-p:py-6">
                    <Academia data={info.searchSection} result={info.searchResult} select={info.select} />
                  </div>
                </ContentInsideLayout>
              </ContentFullLayout>
            </>
          : null
      }


      <ContentLayout classNames="mt-6">
        {
          level === 'bachillerato'
            ? <>
                <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12 w-d:order-1 w-t:order-2">
                  <Youtube data={{ options: { id: info.benefits.video, type: 'single', controls: true}, dimensions: { height: '330px', width: '100%'} }} />
                </div>
                <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 leading-[125%] w-d:order-1 w-t:order-1">
                  <RichtText data={{ content: info.benefits.contentDescription }} />
                </div>
              </>
            : null
        }
        <div className="order-last col-span-12 col-start-3 col-end-11 w-t:col-span-8 w-p:col-span-4">
          {/*  */}
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

export async function getStaticPaths(props: any) {
  const allRoutes = Routes["oferta-educativa"].reduce((prev: any, { params: { programs, level } }: any) => {
    const finalRoutes = programs.map(({ params }: any) => {
      return { params: { level, ...params } }
    })
    return [ ...prev, ...finalRoutes ]
  } , []);
  return {
    paths: allRoutes,
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { params: { level: levelSelected, program } } = context;
  const diccionario: any = {
    licenciatura,
    especialidad,
    doctorado,
    maestria,
    bachillerato,
  };
  const infoLevel = diccionario[levelSelected];
  return {
    props: { data: { level: levelSelected, program, info: infoLevel[program] } },
  }
}

export default EducativeOfferProgram;