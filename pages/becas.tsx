import { Fragment, useEffect, useState } from "react"
import Head from "next/head"
import cn from "classnames"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import Image from "@/components/Image"
import Tabs from "@/components/Tabs"
import Feedback from "@/components/Feedback"
import CardWebsite from "@/components/CardWebsite"
import NumbersComponent from "@/components/NumberPortalverse/NumbersPortalverse"
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const ModeloEducativo: NextPageWithLayout = ({ sections, meta }: any) => {

  const [ tabActive, setTabActive ] = useState<number>(0);
  const [ contentTabs, setContentTabs ] = useState<any>([]);

  useEffect(() => {
    const allContents = sections.becas.tabs.items.reduce((prev: any, curr: any) => { 
      const { content } = curr;
      return  [...prev, content ];
    }, []);
    setContentTabs([...allContents]);
  }, [sections.becas.tabs]);

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <h1 className="text-13 font-bold font-Nunito leading-13 w-t:leading-[111%] w-p:leading-[125%] w-t:text-8.5 w-p:text-7.5 w-d:mb-6 w-t:mb-4 w-p:mb-3">{ sections.head.title }</h1>
          <p className="text-5.5  font-bold font-Poppins leading-[130%] w-t:leading-[125%] w-p:leading-[125%] w-t:text-4.5 w-p:text-4.5 w-t:mb-4 w-p:mb-3">{ sections.head.subtitle }</p>
          <p className="text-base font-Nunito leading-5 w-t:leading-[125%] w-p:leading-[125%] w-t:text-sm w-p:text-sm ">{ sections.head.description }</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <Image
            alt={ sections.head.image.desk.alt }
            src={ sections.head.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-4/3"
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:col-start-2 w-t:col-end-8">
          <NumbersComponent data={ sections.estadisticas } />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          <Tabs data={ sections.becas.tabs } tabIndex={(active: number) => setTabActive(active)} />  
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <ContentInsideLayout classNames="gap-6">
            {
              contentTabs.map(({ image: { src, alt }, content: { title, description } }: any, i: number) => <Fragment key={`description-beca-${i}`}>
                  <DescriptionSection
                    title={title}
                    description={description}
                    classNames={cn("col-span-7 grid grid-cols-7 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i })}
                    titleStyles="col-start-2 col-end-7 w-t:col-end-8"
                    descriptionStyles="col-start-2 col-end-7 w-t:col-end-8"
                  />
                  <Image
                    alt={alt}
                    src={src}
                    classNames={cn("aspect-4/3 col-span-5 w-t:col-start-2 w-t:col-end-8 w-p:col-span-4", { "hidden": tabActive !== i })}
                  />
                </Fragment>)
            }
          </ContentInsideLayout>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-[73px] w-t:mt-6 w-p:mt-6">
          <p className="font-bold font-Poppins text-10">{ sections.proceso.title }</p>
          <Image
            alt={sections.proceso.image.alt}
            src={sections.proceso.image.src}
            classNames={cn("aspect-4/3 w-t:aspect-3/4 m-p:aspect-1/2")}
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Feedback data={ sections.feedback.feedback} >
            <h1>{ sections.feedback.title }</h1>
            <p>{ sections.feedback.text }</p>
          </Feedback>
        </div>
        <div className="col-span-7 w-t:col-span-8 w-p:col-span-4">
          <OpenForm pathThankyou={`/thank-you`} image={{ src: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", alt:"image-person" }} />
        </div>
        <div className="col-span-5 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[130%] text-5.5 mb-[30px]">{ sections.llamanos.title }</p>
          <CardWebsite data={ sections.llamanos.card }/>
        </div>
      </ContentLayout> 
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('becas.json');

  return {
    props: { sections, meta }
  }
}

export default ModeloEducativo