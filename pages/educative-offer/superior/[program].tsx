import { ReactElement, useEffect } from "react"
import Routes from "@/routes/Routes"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Breadcum from "@/components/Breadcrumb"
import Image from "@/components/Image"
import Tabs from "@/components/Tabs"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import CardsOstanding from "@/components/CardsOustanding"
import Table from "@/components/Table"
import Button from "@/components/Button"

const EducativeOfferProgram: NextPageWithLayout<any> = ({ data }: any) => {

  useEffect(() => {
    console.log("post", data)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  const dataSuperior = {
    head: {
      title: "Lienciatura en Administración de empresas",
      description: "Consulta el plan de estudios que ofrecemos y elige qué tipo de apoyo se adapta a tus necesidades. UANE, es sinónimo de servicio, de oportunidades y de trascendencia. Pocas Universidades en el país pueden expresar que el 80% de su alumnado es apoyado con algún tipo de beca. Eso y más, es UANE, algunas de nuestras becas llegan a cubrir el 100% de la colegiatura.",
      image: {
        alt:"plotinyou",
        src:"https://live.staticflickr.com/4638/27366012339_2a02fab73f_z.jpg",
      }
    },
    modality: {
      title:'Elige una de las tres modalidades disponibles para esta licenciatura:',
      tabsData: [],
      cardsOustandingData:[]
    },
    searchSection: {
      title: "Consulta tu plan de estudios en esta modalidad",
      subtitle: "Elige el campus de tu interés:",
      select: {
        value: "Campus Piedras Negras",
        title: "Los planes de estudio pueden variar por campus *"
      }
    },
    searchResult: {
      title: "Plan de estudios: ",
      plan: "Licenciatura en Administración de Empresas Presencial en Campus Piedras Negras",
      initText:"Inicio: ",
      initValue:"1 / Julio /2023 ",
      duracionText:"Duración: ",
      duracionValue:"10 periodos de 4 meses"
    }

  }
  return <>
    <ContentInsideLayout classNames="gap-6">
    <div className="col-span-12 mt-6">
      <Breadcum data={{
          textItems: [],
          icon: "home",
          tagOnItem: undefined,
          tagOnBack: undefined,
          textColor: undefined
        }} />
    </div>
    <div className="col-span-6 w-t:col-span-12 w-p:col-span-12 w-d:mb-12">
      <h1 className="text-13 font-bold font-Nunito leading-13 w-t:leading-[111%] w-p:leading-[125%] w-t:text-8.5 w-p:text-7.5">{dataSuperior.head.title}</h1>
      <p className="text-base font-Nunito leading-5 w-t:leading-[125%] w-p:leading-[125%] w-t:text-sm w-p:text-sm ">{dataSuperior.head.description}</p>
    </div>
    <div className="col-span-6 w-t:col-span-12 w-p:col-span-12 w-d:mb-12">
      <Image
        alt={dataSuperior.head.image.alt}
        src={dataSuperior.head.image.src}
        classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-4/3"
      />
    </div>
    <div className="col-span-12">
      <p className="text-6.5 font-Nunito font-semibold leading-[125%] w-t:leading-[125%] w-p:leading-[125%] w-t:text-6 w-p:text-6">{dataSuperior.modality.title}</p>
    </div>
    <div className="col-span-12 flex justify-center w-d:mb-2">
      <Tabs data={{items: [{label: 'Item Tab 1', icons: { primary: 'star', duplicate: false,}, disabled: false,},{label: 'Item Tab 1', icons: { primary: 'star', duplicate: false,}, disabled: false,}, {label: 'Item Tab 1', icons: {primary: 'star', duplicate: false, }, disabled: false, }], size: 'medium', }} />
    </div>
    <div className="col-span-12">
      <CardsOstanding data={{title: 'Conoce tu futuro perfil',
    cards: [
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 1',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#8B9BA3',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 2',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#6F7C82',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 1',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#8B9BA3',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 2',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#6F7C82',
      },
      
    ],
    wrapper: false,}} />
    </div>
    <div className="col-span-12 bg-SC-Actions-AC-200">
      <div className="w-d:py-[72px] w-d:px-[100px] w-t:p-6 w-p:p-6">
        <h1 className="text-5.5 w-t:text-base w-p:text-base font-Nunito font-bold leading-[130%]">{dataSuperior.searchSection.title}</h1>
        <p className="text-base w-t:invisible w-p:invisible font-Nunito font-bold leading-[130%]">{dataSuperior.searchSection.subtitle}</p>
        <p className="text-base w-t:text-3.5 w-p:text-3.5 font-Nunito leading-[125%] w-t:leading-[19px] mt-[17px]">{dataSuperior.searchSection.select.title}</p>
        <div>
        Aqui va el select
        </div>
      </div>
      <div className="opacity-25">
      <div className="grid gap-6 w-d:px-[100px] w-d:pb-[72px] w-t:p-6 w-p:p-6">
        <div>
          <p className="text-base w-t:text-3.5 w-p:text-3.5 font-Nunito leading-[125%]">{dataSuperior.searchResult.title}</p>
          <p className="text-base w-t:text-3.5 w-p:text-3.5 font-Nunito font-bold leading-[130%] w-t:leading-[125%] w-p:leading-[125%]">{dataSuperior.searchResult.plan}</p>
        </div>
        <div>
        <span className="text-base w-t:text-3.5 w-p:text-3.5 leading[125%] font-Nunito">{dataSuperior.searchResult.initText}</span>
        <span className="text-base w-t:text-3.5 w-p:text-3.5 leading[125%] font-Nunito font-bold">{dataSuperior.searchResult.initValue}</span>
        <span className="text-base w-t:text-3.5 w-p:text-3.5 leading[125%] font-Nunito">{dataSuperior.searchResult.duracionText}</span>
        <span className="text-base w-t:text-3.5 w-p:text-3.5 leading[125%] font-Nunito font-bold">{dataSuperior.searchResult.duracionValue}</span>
        </div>
      </div>
      <div className="w-d:px-[100px] w-d:pb-[72px] w-t:p-6 w-p:p-6">
        <Table data={{
            head: "Semestre 1",
            rows: ['Materia 1', 'Materia 2', 'Materia 3'],
            icon: ""
          }} />
      </div>
      <div className="w-d:px-[100px] w-d:pb-[72px] w-t:p-6 w-p:p-6 flex">
        <Button data={{
              id: undefined,
              type: undefined,
              title: 'undefined',
              size: undefined,
              icon: undefined,
              lyIcon: undefined,
              disabled: undefined,
              isExpand: undefined,
              tagOnClick: undefined,
              test: undefined
            }} />
        <Button data={{
            id: undefined,
            type: undefined,
            title: 'undefined',
            size: undefined,
            icon: undefined,
            lyIcon: undefined,
            disabled: undefined,
            isExpand: undefined,
            tagOnClick: undefined,
            test: undefined
          }} />
      </div>
      </div>
      
    </div>
    <div className="col-span-12 w-d:order-3 col-start-3 col-end-10 w-t:col-start-1 w-t:col-end-12 w-p:col-start-1 w-p:col-end-12">
      <p>aqui va el formulario</p>
    </div>
</ContentInsideLayout> 
  </>
}

export async function getStaticPaths() {
  return {
    paths: Routes["educative-offer"],
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const path = "program";
  const programs = [
    { [path]: "design", description: "soy algo", title: "Diseño" },
    { [path]: "code", description: "soy algo nuevo", title: "Código" }
  ];
  const { params: { program } } = context;
  const preFilter = programs.filter((item: any) => item.program === program)
  let dataProgram: {};
  if (!preFilter.length) {
    dataProgram = { error: true, message: "Info no avaliable" }
  } else {
    dataProgram = { ...preFilter[0] }
  }

  return {
    props: { data: {...dataProgram} },
  }
}

EducativeOfferProgram.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default EducativeOfferProgram;