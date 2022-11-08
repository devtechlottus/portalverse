import { ReactElement, useEffect, useState } from "react"
import Link from "next/link"
import cn from "classnames"
import Routes from "@/routes/Routes"
import dummy from "@/dummy/dummy"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import Accordion from "@/components/Accordion/Accordion"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"

const FAQ: NextPageWithLayout<any> = ({ data }: any) => {

  const [ sectionTitle, setSectionTitle ] = useState('Questions') 

  useEffect(() => {
    const infoSection = data.filter((section: any) => !!section.questions.length);
    if(!!infoSection.length) {
      setSectionTitle(infoSection[0].title)
    } 
  }, [data])
  return <>
    <h1 className="font-Poppins w-d:text-13 w-t:text-8.5 w-p:text-8.5 w-t:leading-9.435 font-bold leading-16.25 my-6">Preguntas frecuentes</h1>
    <h2 className="mt-4 font-semibold font-Poppins leading-7.5 text-6 w-t:text-4.5 w-p:leading-5.625">Elige una sección</h2>
    <ContentInsideLayout classNames="gap-6">
      <div className="col-span-3 w-t:col-span-8 w-p:col-span-4 flex-grow-0">
        <ul>
          {
            data.map((section: any, i:number) => <Link key={`section-item${i}`} href={`/faq/${section.route}`}>
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
          data.map(({ questions }: any, i: number) => {
            if (!!questions.length) {
              return <Accordion key={`question-item-${i}`} data={{items: questions}} />
            }
            return null
          }) 
        }
      </div>
    </ContentInsideLayout>
  </>
};

export function getStaticPaths() {
  return {
    paths: Routes["faq"],
    fallback: false,
  }
}

export function getStaticProps(context: any) {
  const path = "section";
  const { params: { section } } = context;
  const preData = [
    {
      title: "Nuevo Ingreso",
      icon: "edit",
      questions: [],
      status: section === Routes["faq"][0].params.section,
      route: Routes["faq"][0].params.section
    },
    {
      title: "Comunidad UANE",
      icon: "group",
      questions: [],
      status: section === Routes["faq"][1].params.section,
      route: Routes["faq"][1].params.section
    },
    {
      title: "Aula Virtual",
      icon: "contacts",
      questions: [],
      status: section === Routes["faq"][2].params.section,
      route: Routes["faq"][2].params.section
    },
    {
      title: "Internacionalización",
      icon: "language",
      questions: [],
      status: section === Routes["faq"][3].params.section,
      route: Routes["faq"][3].params.section
    },
  ];

  const questions: any = dummy[section].questions;

  const data = preData.reduce((prev: any, curr: any) => curr.route === section ? [ ...prev, { ...curr, questions: [...questions] }] : [ ...prev, { ...curr } ], [])

  return {
    props: {
      data
    }
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