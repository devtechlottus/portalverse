import { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
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
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection"
import Tabs from "@/components/Tabs"
import CardWebsite from "@/components/CardWebsite"
import Banner from "@/components/Banner"
import Accordion from "@/components/Accordion"
import faq from "@/dummy/faq"



const ThankYouPage: NextPageWithLayout = ({ data }: any) => {

  const router = useRouter()
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
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <div>
            <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-7.5">{data.header.title}</p>
          </div>
          {
            data.header.textIcons.map((item:any, i:number) => 
              <>
                <div className="flex mt-4">
                  <Icon name={item.icon} className="w-[55px] h-[55px] w-p:w-8 w-p:h-8"/>
                  <p className="font-Poppins font-bold my-auto ml-6 text-4.5 w-p:text-base">{item.text}</p>
                </div>
              </>
            )
          }
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center mt-4">
            <Button data={ data.header.button }/>
          </div>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image src="/images/404.png" alt="error_image" classNames="aspect-4/3"/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-[72px]">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{ data.sectionTabs.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center w-d:mb-2">
          <Tabs data={ data.sectionTabs.tabs } tabIndex={(active: number) => setTabActive(active)} />  
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <ContentInsideLayout classNames="gap-6">
            {
              contentTabs.map(({ image: { src, alt }, content: { title, description, action=null }, }: any, i: number) => <Fragment key={`description-beca-${i}`}>
                  <DescriptionSection
                    mode="light"
                    title={title}
                    description={description}
                    classNames={cn("col-span-7 grid grid-cols-7 gap-6 w-t:col-span-8 w-t:grid-cols-8 w-p:col-span-4 py-[40px] w-t:py-[94px] w-p:flex w-p:flex-col w-p:p-6", { "hidden w-p:hidden": tabActive !== i })}
                    titleStyles="col-start-2 col-end-7 w-t:col-end-8"
                    descriptionStyles="col-start-2 col-end-7 w-t:col-end-8"
                    action={
                      <div slot="actionDescription">
                        <Button data={action}/>
                      </div>
                    }
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
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={data.sectionInternacionalizacion.banner} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={data.sectionEmpleabilidad.banner} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={data.sectionBecas.banner} />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={data.sectionInternacionalizacion.banner} />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={data.sectionEmpleabilidad.banner} />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
          <Banner data={data.sectionBecas.banner} />
        </div>
      </ContentFullLayout>
      <ContentLayout classNames="mt-[72px]">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{data.sectionEgresados.title}</p>
          <p className="font-Poppins text-4.5 font-bold leading-[125%] mt-6">{data.sectionEgresados.description}</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:hidden">
          <Youtube data={data.sectionEgresados.video}/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <section className="grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            data.sectionEgresados.cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item}/>
           </section>)
          }
          </section>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 object-center	mt-6 flex justify-center">
            <Button data={data.sectionEgresados.button}/>
          </div>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:hidden w-t:hidden">
          <Youtube data={data.sectionEgresados.video}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins text-10 font-bold leading-[125%] w-t:text-6 w-p:text-6">{data.sectionFAQ.title}</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex-grow overflow-y-auto">
          {
            
            !!data.sectionFAQ.questions.length 
              ? <Accordion data={{items: data.sectionFAQ.questions}} />
              : null
          }
      </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center">
          <Button data={ data.sectionFAQ.button }
          onClick={() => {
            router.push('/faq/new-incomming')
          }}/>
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
        title: "Admisiones UANE",
        header:{
          title:'Inscríbete en UANE',
          textIcons:[
            {
              icon:'email',
              text: '48 años nos respaldan'
            },
            {
              icon:'email',
              text: '+13,500 alumnos en todas nuestras modalidades'
            },
            {
              icon:'email',
              text: '+50,000 egresados'
            },
            {
              icon:'email',
              text: '+760 convenios empresariales para una acelerada inserción laboral'
            },
          ],
          button: {title: 'Quiero más información', type: 'primary', icon: '', isExpand: false,},
        },
        sectionTabs:{
          title: 'Requisitos de admisión',
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
                    -------`,
                    action: {title: 'Quiero más información', type: 'primary', icon: '', isExpand: false,},
                  },
                  cards: [
                    { 
                      urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
                      subtitle: 'SUBTITULO',
                      title: 'Coursera y UANE se unen para ti',
                      text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
                      border: true,
                      allContent: true,
                      height: '',
                      isShowCardWebsiteContent: true,
                      id: '',
                      type: 'vertical',
                      link: true,
                      background: false,
                      linkText: {
                        text: 'Conocer más',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'star',
                      },
                      linkIcon: {
                        text: 'Ver más',
                        iconSecond: 'person',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'person',
                      },
                      wrapper: true
                    },
                    { 
                      urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
                      subtitle: 'SUBTITULO',
                      title: 'Coursera y UANE se unen para ti',
                      text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
                      border: true,
                      allContent: true,
                      height: '',
                      isShowCardWebsiteContent: true,
                      id: '',
                      type: 'vertical',
                      link: true,
                      background: false,
                      linkText: {
                        text: 'Conocer más',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'star',
                      },
                      linkIcon: {
                        text: 'Ver más',
                        iconSecond: 'person',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'person',
                      },
                      wrapper: true
                    },
                    { 
                      urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
                      subtitle: 'SUBTITULO',
                      title: 'Coursera y UANE se unen para ti',
                      text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
                      border: true,
                      allContent: true,
                      height: '',
                      isShowCardWebsiteContent: true,
                      id: '',
                      type: 'vertical',
                      link: true,
                      background: false,
                      linkText: {
                        text: 'Conocer más',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'star',
                      },
                      linkIcon: {
                        text: 'Ver más',
                        iconSecond: 'person',
                        isBold: true,
                        size: 'large',
                        isUnderline: false,
                        disabled: false,
                        icon: 'person',
                      },
                      wrapper: true
                    }
                  ]
                }
              },
              {
                label: 'Item Tab 2', icons: { primary: 'star', duplicate: true,}, disabled: false,
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
                    -------`,
                    action: {title: 'Quiero más información', type: 'primary', icon: '', isExpand: false,},
                  }
                }
              },
              {
                label: 'Item Tab 3', icons: {primary: 'star', duplicate: true, }, disabled: false, 
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
                    -------`,
                    action: {title: 'Quiero más información', type: 'primary', icon: '', isExpand: false,},
                  }
                }
              }
            ],
            size: 'medium',
          },
        },
        sectionInternacionalizacion:{
          banner:{
            title: 'UANE  Internacional', subtitle: 'Agrega experiencias internacionales a tus estudiso ', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg', desktop: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg',}, overlay: 'black', height: '', action: {id: '', type: 'primary', title: "Continuar", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true
          }
        },
        sectionEmpleabilidad:{
          banner:{
            title: 'Empleabilidad en UANE', subtitle: 'Agrega experiencias internacionales a tus estudiso ', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: true, urlImage: {mobile: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg', desktop: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg',}, overlay: 'black', height: '', action: {id: '', type: 'primary', title: "Continuar", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true
          }
        },
        sectionBecas:{
          banner:{
            title: 'Becas', subtitle: 'Agrega experiencias internacionales a tus estudiso ', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg', desktop: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg',}, overlay: 'black', height: '', action: {id: '', type: 'primary', title: "Continuar", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true
          }
        },
        sectionEgresados:{
          title: 'Los egresados de UANE nos cuentan sus historias',
          description: 'En UANE dejamos huella de oso en cada paso que damos, piensa y estudia en grande.',
          cards: [
            { 
              urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
              subtitle: 'SUBTITULO',
              title: 'Coursera y UANE se unen para ti',
              text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
              border: true,
              allContent: true,
              height: '',
              isShowCardWebsiteContent: true,
              id: '',
              type: 'vertical',
              link: true,
              background: false,
              linkText: {
                text: 'Conocer más',
                isBold: true,
                size: 'large',
                isUnderline: false,
                disabled: false,
                icon: 'star',
              },
              linkIcon: {
                text: 'Ver más',
                iconSecond: 'person',
                isBold: true,
                size: 'large',
                isUnderline: false,
                disabled: false,
                icon: 'person',
              },
              wrapper: true
            },
            { 
              urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
              subtitle: 'SUBTITULO',
              title: 'Coursera y UANE se unen para ti',
              text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
              border: true,
              allContent: true,
              height: '',
              isShowCardWebsiteContent: true,
              id: '',
              type: 'vertical',
              link: true,
              background: false,
              linkText: {
                text: 'Conocer más',
                isBold: true,
                size: 'large',
                isUnderline: false,
                disabled: false,
                icon: 'star',
              },
              linkIcon: {
                text: 'Ver más',
                iconSecond: 'person',
                isBold: true,
                size: 'large',
                isUnderline: false,
                disabled: false,
                icon: 'person',
              },
              wrapper: true
            },],
          button:{title: 'Quiero más información', type: 'primary', icon: '', isExpand: false,},
          video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '400px'} }
        },
        sectionFAQ:{
          title: 'Preguntas frecuentes',
          button:{title: 'Ver más preguntas', type: 'outlined', icon: '', isExpand: false,},
          questions: faq['community'].questions
        }
      }
    }
  }
}

export default ThankYouPage