import { Fragment, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import cn from "classnames"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import ContentLayout from "@/layouts/Content.layout"
import Image from "@/components/Image"
import RichtText from "@/components/Richtext/Richtext"
import LinkContactTarget from "@/components/LinkContactTarget"
import DescriptionSection from "@/components/DescriptionSection"
import Mosaic from "@/components/Mosaic"
import Button from "@/components/Button/Button"
import TabsFeatured from "@/components/TabsFeatured"


const ConexionEducativa: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter();

  const [ tabActive, setTabActive ] = useState<number>(0);
  const [ contentTabs, setContentTabs ] = useState<any>([]);
  const [ allTabsId , setAllTabsId ] = useState<Array<string>>([]);

  const setTabByQueryParam = (param: any, tabsIds:Array<string>) => {
    if(!!param){
      const {type} = router.query
      const idTab = tabsIds.findIndex((tab: string) => tab === type)
      setTabActive(idTab === -1 ? 0 : idTab)
    }
  }

  useEffect(() => {
    const {contents, ids} = sections.socialService.tabs.items.reduce((prev: any, curr: any) => { 
      const { content, id } = curr;
      return  {...prev, contents: [...prev.contents, content], ids:[ ...prev.ids, id ] };
    }, {contents: [], ids:[]});
    setContentTabs([...contents]);
    setAllTabsId([...ids]);
  }, [sections.socialService.tabs]);

  useEffect(() => {
    if(!!Object.keys(router.query).length && router.query.hasOwnProperty('type') && !!allTabsId.length){
      const {type} = router.query
      setTabByQueryParam(type, allTabsId)
    }
  }, [router.query, allTabsId])

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-7.5 leading-[125%] w-t:leading-[111%] mb-6">{sections.head.title}</p>
          <p className="font-Poppins font-bold text-5.5 mb-6">{sections.head.subtitle}</p>
          <RichtText font="light" data={{
            content: sections.head.description
          }} />
          <div className="flex">
          <p className="font-Poppins font-bold mr-6">{sections.head.contactText}</p>
          <LinkContactTarget type={"email"} info={sections.head.contactLink} />

          </div>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image
            alt={ sections.head.image.desk.alt }
            src={ sections.head.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 my-12 hidden">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.alliances.title}</p>
          {/* carrousel */}
          <div className=" justify-center hidden">
          <Button data={sections.alliances.button} />
          </div>
        </div>
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          <TabsFeatured active={tabActive} tabs={sections.socialService.tabs.items} onActive={(active: number) => setTabActive(active)} />
        </div>
      </ContentLayout>
      <ContentFullLayout>
        <section className="w-d:hidden">
          <TabsFeatured active={tabActive} tabs={sections.socialService.tabs.items} onActive={(active: number) => setTabActive(active)} />
        </section>
      </ContentFullLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY py-6">
        <ContentLayout>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <ContentInsideLayout classNames="gap-6">
            {
              contentTabs.map(({ image: { src, alt }, content: { title, description }, process: {title: titleProcess,description: descripcionProcess, download} }: any, i: number) => <Fragment key={`description-serviceSocial-${i}`}>
                  <DescriptionSection
                  title={title}
                  description={description}
                  classNames={cn("col-span-7 grid grid-cols-7 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i })}
                  titleStyles="col-start-2 col-end-7 w-t:col-end-8"
                  descriptionStyles="col-start-2 col-end-7 w-t:col-end-8" />
                  <Image
                    alt={alt}
                    src={src}
                    classNames={cn("aspect-4/3 col-span-5 w-t:col-start-2 w-t:col-end-8 w-p:col-span-4", { "hidden": tabActive !== i })}
                  />
                  {/* <DescriptionSection
                  action={<Link href={download.link}><a className="flex items-center" target={"_blank"}>{download.title} <span className="material-icons">download</span></a></Link>}
                  mode="transparent"
                  title={titleProcess}
                  description={descripcionProcess}
                  classNames={cn("col-span-12 grid grid-cols-12 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i })}
                  titleStyles="col-start-2 col-end-12 w-t:col-end-8"
                  descriptionStyles="col-start-2 col-end-12 w-t:col-end-8" /> */}
                </Fragment>)
            }
          </ContentInsideLayout>
        </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout>
      <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%] mb-6">{ sections.experiences.title}</p>
          <Mosaic data={sections.experiences.images}/>
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('conexion-educativa.json');

  // redirect not avaliable page
  if (!!meta.hidden) {
    return {
      notFound: true,
    }
  }

  return {
    props: { sections, meta }
  }
}

export default ConexionEducativa