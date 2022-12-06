import { useRouter } from "next/router"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Button from "@/components/Button"
import NewBanner from "@/components/NewBanner"
import { ButtonInit } from "@/components/fixture"
import ReasonsToContact from "@/forms/container/ReasonsToContact"
import Head from "next/head"
import Breadcrumbs from "@/components/Breadcrumbs/BreadcrumbPortalverse"

const PonteEnContacto: NextPageWithLayout = ({ data }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{ data.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout>
        <ContentInsideLayout>
          <div className="col-span-5 w-t:col-span-8 w-p:col-span-4 bg-darkBlue text-white w-t:pb-6">
            <ContentInsideLayout classNames="grid-cols-5 w-t:grid-cols-8">
              <div className="col-span-5 col-start-2 col-end-5 w-t:col-span-8 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-p:col-end-5">
                <Breadcrumbs />
              </div>
              <h1 className="col-span-5 col-start-2 col-end-5 w-t:col-span-8 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-p:col-end-5 text-10 w-p:text-[30px] w-p:m-6 font-bold font-Poppins leading-[125%]">{ data.text.title }</h1>
              <p className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 text-base font-Poppins w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[24px] w-t:leading-[125%] w-p:leading-3[130%]"><span className="material-icons mr-2">{ data.text.phone.icon }</span>{ data.text.phone.text }</p>
              <p className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 text-base font-Poppins w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[24px] w-t:leading-[125%] w-p:leading-3[130%]"><span className="material-icons mr-2">{ data.text.email.icon }</span>{ data.text.email.text }</p>
              <p className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 text-base font-Poppins w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[24px] w-t:leading-[125%] w-p:leading-3[130%]"><span className="material-icons mr-2">{ data.text.schedule.icon }</span>{ data.text.schedule.text }</p>
              <section className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1">
                <p className="text-4.5 w-t:text-6 font-Poppins font-bold w-d:mt-6 w-t:mt-6 w-p:mt-2 w-p:mx-6 leading-[125%]">{ data.text.campus.title}</p>
              </section>
              <section className="col-span-5 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1 w-d:mb-18 mt-6">
              <Button data={data.text.campus.button} />
              </section>
              <p className="col-span-5 col-start-2 col-end-11 w-t:col-start-2 w-t:col-end-8 w-p:col-start-1  text-4.5 font-bold font-Poppins w-d:mt-12 w-t:mt-18 w-p:mt-16 w-p:ml-6 leading-[125%]">{ data.text.socialMediaTitle }</p>
              <section className="grid w-d:grid-cols-4 w-t:grid-cols-4 w-p:grid-cols-4 col-start-2 col-end-5 w-t:col-start-2 w-t:col-end-6 w-p:col-start-1 w-p:col-end-4 w-d:mt-[38px] w-t:mt-[38px] w-p:my-[20px] w-p:ml-6 w-d:mb-6 w-t:mb-[6.5rem] w-p:mb-13">
              {
                data.text.icons.map((item:any, i:number) => <span key={`span-icons-${i}`} className="material-icons">
                  {item}
                </span>)
              }
              </section>
            </ContentInsideLayout>
          </div>
          <div className="col-span-7 w-t:col-span-8 w-p:col-span-4">
            <ContentInsideLayout classNames="grid-cols-7 w-t:grid-cols-8">
              <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 col-start-3 col-end-11 w-t:col-start-1 w-t:col-end-8 w-p:col-start-1 w-p:col-end-4">
                <div className="mt-18">
                  <ReasonsToContact />
                </div>
              </div>
            </ContentInsideLayout>
          </div>
        </ContentInsideLayout>
        <ContentFullLayout>
          <NewBanner 
            data={data.text.banner } 
            onBtn={ () =>{
              router.push(`/directorio`)
              console.log('hola')
              } 
            } />
        </ContentFullLayout>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: "Ponte en Contacto",
        text: {
          title: "Contacto",
          phone: {text: '8004433667700', icon: "phone"},
          email: {text:'info@uane.edu.mx', icon: "mail"},
          schedule:{text: "L-V de 9:00-18:00 Hrs", icon: "schedule"},
          campus:{title:"Visítanos en nuestros campus", button:{title: 'Ver ubicaciones', type: 'outlined', icon: '', isExpand: false,}},
          socialMediaTitle: 'Síguenos en redes sociales' ,
          icons: ['person', 'person', 'person', 'person'],
          banner: {
            image: {
              desktop: 'https://www.shutterstock.com/image-photo/beautiful-caucasian-female-student-studying-260nw-1777314632.jpg',
              mobile: 'https://lamenteesmaravillosa.com/wp-content/uploads/2018/02/chica-estudiando-420x265.jpg',
            },
            title: 'Consulta el directorio de la universidad',
            text: '',
            contentCenter: false,
            contentLeft: false,
            action: {
              ...ButtonInit,
              title: 'Ver directorio',
            },
            wrapper: true
          }
        },
      }
    }
  }
}

export default PonteEnContacto