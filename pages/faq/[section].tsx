import { ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import cn from "classnames"
import Routes from "@/routes/Routes"
import faq from "@/dummy/faq"
import Accordion from "@/components/Accordion"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const FAQ: NextPageWithLayout<any> = ({ sections, meta }: any) => {

  const [ sectionTitle, setSectionTitle ] = useState('Questions') 

  useEffect(() => {
    const infoSection = sections.filter((section: any) => !!section.questions.length);
    if(!!infoSection.length) {
      setSectionTitle(infoSection[0].title);
      return
    }
    setSectionTitle(meta.title);
  }, [sections]);// eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <Head>
      <title>{ sectionTitle }</title>
    </Head>
    <h1 className="col-span-12 font-Poppins w-d:text-13 w-t:text-8.5 w-p:text-8.5 w-t:leading-9.435 font-bold leading-16.25 my-6">Preguntas frecuentes</h1>
    <h2 className="col-span-12 mt-4 font-semibold font-Poppins leading-7.5 text-6 w-t:text-4.5 w-p:leading-5.625">Elige una sección</h2>
      <div className="col-span-3 w-t:col-span-8 w-p:col-span-4 flex-grow-0">
        <ul>
          {
            sections.map((section: any, i:number) => <Link key={`section-item${i}`} href={`/faq/${section.route}`}>
              <a>
                <li className={cn("font-Poppins flex py-2", { "text-Brands/UANE/Primary/UANE-P-00": section.status, "text-black": !section.status })}>
                  <span className="material-icons icon pr-3">{section.icon}</span>
                  <p>{ section.title }</p>
                </li>
              </a>
            </Link>
            )
          }
        </ul>
      </div>
      <div className="col-span-9 w-t:col-span-8 w-p:col-span-4 flex-grow overflow-y-auto">
        <h1>{ sectionTitle }</h1>
        {
          sections.map(({ questions }: any, i: number) => {
            if (!!questions.length) {
              return <Accordion key={`question-item-${i}`} data={{items: questions}} />
            }
            return null
          }) 
        }
      </div>
  </>
};

export function getStaticPaths() {
  return {
    paths: Routes["faq"],
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const { sections: info, meta } = await getDataPageFromJSON('faq.json');
  const path = "section";
  const { params: { section } } = context;
  const questions: any = faq[section].questions;
  const sections = info.temas.reduce((prev: any[], curr: any, i: number) => [ ...prev, { ...curr, questions: section === Routes["faq"][i].params.section ? [ ...questions ] : [], route: Routes["faq"][i].params.section, status: section === Routes["faq"][i].params.section } ], []);
  
  return {
    props: { sections, meta }
  }
}

FAQ.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default FAQ