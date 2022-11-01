import Link from "next/link";
import Routes from "@/routes/Routes";
import cn from "classnames";
import dummy from "@/dummy/dummy";
import ContentInsideLayout from "@/layouts/ContentInside.layout";
import Accordion from "@/components/Accordion/Accordion";

const FAQ = ({ data }: any) => {
  return <>
    <h1>Preguntas frecuentes</h1>
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

export default FAQ;