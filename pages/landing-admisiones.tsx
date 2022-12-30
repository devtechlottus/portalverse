import { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import cn from "classnames"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Youtube from "@/components/Youtube"
import Icon from "@/components/Icon"
import Image from "@/components/Image"
import Button from "@/components/Button"
import DescriptionSection from "@/components/DescriptionSection"
import CardWebsite from "@/components/CardWebsite"
import Banner from "@/components/Banner"
import Accordion from "@/components/Accordion/Accordion"
import { getDataPageFromJSON } from "utils/getDataPage"
import TabsFeatured from "@/components/TabsFeatured"

const LandindAdmissions: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter();
  const [ tabActive, setTabActive ] = useState<number>(0);
  const [ contentTabs, setContentTabs ] = useState<any>([]);
  useEffect(() => {
    const allContents = sections.requirements.tabs.items.reduce((prev: any, curr: any) => { 
      const { content } = curr;
      return  [...prev, content ];
    }, []);
    setContentTabs([...allContents]);
  }, [sections.requirements.tabs]);

  const navigate = (route: string) => router.push(route)

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-7.5">{sections.head.title}</p>
          {
            sections.head.textIcons.map((item:any, i:number) => <div key={`icon-${i}`} className="flex mt-4">
                <Icon name={item.icon} className="w-[55px] h-[55px] w-p:w-8 w-p:h-8 text-[#B0003C]"/>
                <p className="font-Poppins font-bold my-auto ml-6 text-4.5 w-p:text-base">{item.text}</p>
              </div>
            )
          }
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center mt-4">
            <Button data={ sections.head.button }/>
          </div>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
        <Image
            alt={ sections.head.image.desk.alt }
            src={ sections.head.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
          />
        </div>
       
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-[72px]">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{ sections.requirements.title }</p>
        </div>
         
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          {/* <Tabs data={ sections.requirements.tabs } tabIndex={(active: number) => setTabActive(active)} />   */}
          <TabsFeatured tabs={sections.requirements.tabs.items} onActive={(active: number) => setTabActive(active)} />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden">
        <TabsFeatured tabs={sections.requirements.tabs.items} onActive={(active: number) => setTabActive(active)} />
      </ContentFullLayout>
      <ContentLayout> 
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-12 w-t:mb-6 w-p:mb-6">
          <ContentInsideLayout classNames="gap-6">
            {
              contentTabs.map(({ image: { src, alt }, content: { title, description, action=null }, cards }: any, i: number) => <Fragment key={`description-beca-${i}`}>
                  <DescriptionSection
                    mode="light"
                    title={title}
                    description={description}
                    classNames={cn("col-span-7 grid grid-cols-7 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i })}
                    titleStyles="col-start-2 col-end-7 w-t:col-end-8"
                    descriptionStyles="col-start-2 col-end-7 w-t:col-end-8"
                    action={
                      <div slot="actionDescription" className="w-t:hidden w-p:hidden">
                        <Button  onClick={() => navigate(action.route)} data={action}/>
                      </div>
                    }
                  />
                  <Image
                    alt={alt}
                    src={src}
                    classNames={cn("aspect-4/3 col-span-5 w-t:col-start-2 w-t:col-end-8 w-p:col-span-4", { "hidden": tabActive !== i })}
                  />
                  <section className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1", { "hidden w-p:hidden": tabActive !== i })}>
                    {
                     cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
                      <CardWebsite data={item}/>
                     </section>)
                    }
                  </section>
                </Fragment>)
            }
          </ContentInsideLayout>
        </div>

        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden mb-12 w-t:mb-6 w-p:mb-6">
          <Banner data={sections.internacionalizacion.banner} onBtn={()=>router.push(sections.internacionalizacion.redirect)}/>
        </div>
                
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden ">
          <Banner data={sections.empleabilidad.banner} onBtn={()=>router.push(sections.empleabilidad.redirect)}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={sections.becas.banner} onBtn={()=>router.push(sections.becas.redirect)} />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={sections.internacionalizacion.banner} onBtn={()=>router.push(sections.internacionalizacion.redirect)}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={sections.empleabilidad.banner} onBtn={()=>router.push(sections.empleabilidad.redirect)}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={sections.becas.banner} onBtn={()=>router.push(sections.becas.redirect)} />
        </div>
      </ContentFullLayout>
      

      <ContentLayout classNames="mt-[72px]">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{sections.egresados.title}</p>
          <p className="font-Poppins text-4.5 font-bold leading-[125%] mt-6">{sections.egresados.description}</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:hidden">
          <Youtube data={sections.egresados.video}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <section className="grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            sections.egresados.cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item}/>
           </section>)
          }
          </section>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 object-center	mt-6 flex justify-center mb-12 w-t:mb-6 w-p:mb-6">
            <Button data={sections.egresados.button} onClick={()=>router.push(sections.egresados.button.redirect)}/>
          </div>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:hidden w-t:hidden mb-12 w-t:mb-6 w-p:mb-6">
          <Youtube data={sections.egresados.video}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{sections.FAQ.title}</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex-grow overflow-y-auto mb-12 w-t:mb-6 w-p:mb-6">
          {
            !!sections.FAQ.questions.length 
              ? <Accordion data={{items: sections.FAQ.questions}} />
              : null
          }
      </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center mb-12 w-t:mb-6 w-p:mb-6">
          <Button data={ sections.FAQ.button }
          onClick={() => {
            router.push(sections.FAQ.button.redirect)
          }}/>
        </div>
      </ContentLayout>
             
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('landing-admisiones.json');

  return {
    props: { sections, meta }
  }
}

export default LandindAdmissions