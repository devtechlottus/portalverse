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

const ModeloEducativo: NextPageWithLayout = ({ data }: any) => {

  const [ tabActive, setTabActive ] = useState<number>(0);
  const [ contentTabs, setContentTabs ] = useState<any>([]);

  useEffect(() => {
    const allContents = data.sectionTabs.tabs.items.reduce((prev: any, curr: any) => { 
      const { content } = curr;
      return  [...prev, content ];
    }, []);
    setContentTabs([...allContents]);
  }, [data.sectionTabs.tabs]);

  return <>
    <Head>
      <title>{ data.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <h1 className="text-13 font-bold font-Nunito leading-13 w-t:leading-[111%] w-p:leading-[125%] w-t:text-8.5 w-p:text-7.5 w-d:mb-6 w-t:mb-4 w-p:mb-3">{ data.header.title }</h1>
          <p className="text-5.5  font-bold font-Poppins leading-[130%] w-t:leading-[125%] w-p:leading-[125%] w-t:text-4.5 w-p:text-4.5 w-t:mb-4 w-p:mb-3">{ data.header.subtitle }</p>
          <p className="text-base font-Nunito leading-5 w-t:leading-[125%] w-p:leading-[125%] w-t:text-sm w-p:text-sm ">{ data.header.description }</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mb-12">
          <Image
            alt={ data.header.image.desk.alt }
            src={ data.header.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-4/3"
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:col-start-2 w-t:col-end-8">
          <NumbersComponent data={ data.numbers } />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          <Tabs data={ data.sectionTabs.tabs } tabIndex={(active: number) => setTabActive(active)} />  
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
          <p className="font-bold font-Poppins text-10">{ data.processSection.title }</p>
          <Image
            alt={data.processSection.image.alt}
            src={data.processSection.image.src}
            classNames={cn("aspect-4/3 w-t:aspect-3/4 m-p:aspect-1/2")}
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Feedback data={ data.feedbackSection.feedback} >
            <h1>{ data.feedbackSection.title }</h1>
            <p>{ data.feedbackSection.text }</p>
          </Feedback>
        </div>
        <div className="col-span-7 w-t:col-span-8 w-p:col-span-4">
          aqui va el formulario
        </div>
        <div className="col-span-5 w-t:col-span-8 w-p:col-span-4">
          aqui va la variante de card
          <p className="font-Poppins font-bold leading-[130%] text-5.5 mb-[30px]">{ data.sectionCallUs.title }</p>
          <CardWebsite data={ data.sectionCallUs.card }/>
        </div>
      </ContentLayout> 
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: "Becas",
        header:{
          title: 'Becas bachillerato y licenciatura',
          subtitle: 'El 80% del alumando tiene algún tipo de beca',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud',
          image: {
            desk:{
              alt: 'imagen',
              src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000'
            },
            mobile:{
              alt: 'imagen',
              src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000g'
            }
          }
        },
        numbers:[
          {icon: 'persons', prefix: '+', number: '77%', suffix: '+', title: 'Alumnos', body: 'con experiencias internacionales acceden a puestos directivos.', container: true,},
          {icon: 'persons', prefix: '+', number: '11', suffix: '+', title: 'Formas', body: 'diferentes de internacionalizar tu título en UANE.', container: true,},
          {icon: 'persons', prefix: '+', number: '1111', suffix: '+', title: 'Titulación', body: 'Obtén título de UANE y uno más de alguna univesidad extranjera.', container: true,},
          {icon: 'persons', prefix: '+', number: '9', suffix: '+', title: 'Alianzas', body: 'con universidades en el extranjero.', container: true,},
        ],
        sectionTabs:{
          tabs: {
            items: [
              {
                label: 'Item Tab 1', icons: { primary: 'star', duplicate: true,}, disabled: false,
                content: {
                  image: {
                    alt: 'imagen',
                    src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000',
                  },
                  content: {
                    title: 'Características de la Beca Servicio1',
                    description: `
                    La Beca Servicio se otorga en pesos y el monto autorizado se aplica exclusivamente al costo de la colegiatura. Se otorga a los estudiantes de escasos recursos económicos que tengan un promedio de aprovechamiento académico de por lo menos 80. Además de tener buena conducta. La beca deberá ser retribuida mediante actividades de servicio ya sea en beneficio de la Universidad o de la Comunidad.
        
        Aplica a:
        Niveles educativos: Bachillerato, licenciatura y postgrado
        Modalidades: 
        -------`
                  }
                }
              },
              {
                label: 'Item Tab 1', icons: { primary: 'star', duplicate: true,}, disabled: false,
                content: {
                  image: {
                    alt: 'imagen',
                    src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000',
                  },
                  content: {
                    title: 'Características de la Beca Servicio2',
                    description: `
                    La Beca Servicio se otorga en pesos y el monto autorizado se aplica exclusivamente al costo de la colegiatura. Se otorga a los estudiantes de escasos recursos económicos que tengan un promedio de aprovechamiento académico de por lo menos 80. Además de tener buena conducta. La beca deberá ser retribuida mediante actividades de servicio ya sea en beneficio de la Universidad o de la Comunidad.
        
        Aplica a:
        Niveles educativos: Bachillerato, licenciatura y postgrado
        Modalidades: 
        -------`
                  }
                }
              },
              {
                label: 'Item Tab 1', icons: {primary: 'star', duplicate: true, }, disabled: false, 
                content: {
                  image: {
                    alt: 'imagen',
                    src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000',
                  },
                  content: {
                    title: 'Características de la Beca Servicio3',
                    description: `
                    La Beca Servicio se otorga en pesos y el monto autorizado se aplica exclusivamente al costo de la colegiatura. Se otorga a los estudiantes de escasos recursos económicos que tengan un promedio de aprovechamiento académico de por lo menos 80. Además de tener buena conducta. La beca deberá ser retribuida mediante actividades de servicio ya sea en beneficio de la Universidad o de la Comunidad.
        
        Aplica a:
        Niveles educativos: Bachillerato, licenciatura y postgrado
        Modalidades: 
        -------`
                  }
                }
              }
            ],
            size: 'medium',
          },
        },
        processSection:{
          title:'Proceso',
          image:{
            alt: 'imagen',
            src: 'https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000'
          }
        },
        feedbackSection: {
          feedback:{left: {name: 'info', status: 'normal', }, right: {name: '', }, type: 'alert', isTextEvent: false, textEvent: 'Dismiss', tagOnRight: 'testOnRight',},
          text: 'Las becas mencionadas tienen efecto única y exclusivamente sobre el monto de las colegiaturas',
          title: 'No aplica sobre inscripción'
        },
        sectionCallUs:{
          title: '¿Tienes dudas? llámanos',
          card: 
          { 
            urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: '',
            title: 'Oficinas de servicios estudiantiles y Centros de admisión',
            text: `Nuestros asesores expertos te brindarán apoyo de lunes a viernes de 7:00 a 20:00 horas y sábados de 9:00 a 14:00 horas.\n55 10 50 27 07\nCorreo: serviciosestudiantiles@uane.edu.mx`,
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkText: {
              text: '',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              icon: 'star',
            },
            linkIcon: {
              text: '',
              iconSecond: '',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              icon: '',
            },
            wrapper: true
          }
        },
      }
    }
  }
}

export default ModeloEducativo