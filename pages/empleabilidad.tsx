import Head from "next/head"
import { useRouter } from "next/router"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Image from "@/components/Image"
import BeWantedForm from "@/forms/container/BeWanted"
import Youtube from "@/components/Youtube"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import RichtText from "@/components/Richtext/Richtext"



const Empleabilidad: NextPageWithLayout = ({ data }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout>
        <div className="head col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2 w-d:hidden mb-6">
          <BannerPortalverse data={ data.header.banner }/>
        </div>
      </ContentFullLayout>
      <ContentLayout classNames="gap-6">
        <div className="head col-span-12 w-t:hidden w-p:hidden">
          <BannerPortalverse data={ data.header.banner }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:order-2 w-t:hidden w-p:hidden">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { data.sectionForm.titleIntroduction}</p>
          <RichtText data={ data.sectionForm.textIntroduction } />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-p:order-1 relative">
          <BeWantedForm pathThankyou={`/ThankYouPage?type=egresados`} classNames="absolute w-full h-auto bg-white bottom-0 rounded-lg" />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10"> { data.sectionVacancies.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">aqui va el carrrusel</div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{ data.sectionBussinesVinculation.title }</p>
          <RichtText  data={ data.sectionBussinesVinculation.description }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image src="/images/404.png" alt="error_image" classNames="aspect-3/4"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-darkBlue">
        <ContentLayout>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-4 w-d:hidden">
            <p className="font-Poppins text-white font-bold leading-[125%] text-6.5 w-t:text-6 w-p:text-6">{ data.sectionSuccessStories.title }</p>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-6 mb-6">
            <Youtube data={ data.sectionSuccessStories.video }/>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto w-t:hidden w-p:hidden">
            <p className="font-Poppins text-white font-bold leading-[125%] text-6.5 w-t:text-6 w-p:text-6 mb-6">{ data.sectionSuccessStories.title }</p>
            <RichtText data={ data.sectionSuccessStories.description }/>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mb-6 w-d:hidden">
            <RichtText data={ data.sectionSuccessStories.description }/>
          </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="gap-6 mt-[72px] w-t:mt-12 w-p:mt-12">
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mt-auto mb-auto">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{ data.sectionHowDoesItWork.title }</p>
          <RichtText data={ data.sectionHowDoesItWork.description }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Youtube data={ data.sectionHowDoesItWork.video }/>
        </div>
        <div className="w-t:col-span-8 w-p:col-span-4 w-d:hidden">
          <RichtText data={ data.sectionHowDoesItWork.description }/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6">{ data.sectionUpcomingEvents.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          aqui va el carrusel de eventos
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY mt-[72px] w-t:mt-12 w-p:mt-12">
        <ContentLayout>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-6">
            <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6">{ data.sectionNews.title }</p>
          </div>
          <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-6">
            {
             data.sectionNews.news.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item}/>
             </section>)
            }
          </section>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden w-p:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2">
          <NewBanner data={ data.sectionContactUs.banner }/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2">
          <NewBanner data={ data.sectionContactUs.banner }/>
        </div>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: 'Empleabilidad',
        header:{
          banner:{
            title: "Empleabilidad", 
            subtitle: "", 
            image: "https://www.uane.edu.mx/multi/images/programas/becas.jpg"
          },
        },
        sectionForm:{
          titleIntroduction: 'Lorem ipsum dolor sit amet',
          textIntroduction: { 
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra`
          }
        },
        sectionVacancies:{
          title: 'Vacantes disponibles',
          carrousel:{}
        },
        sectionBussinesVinculation:{
          title: 'Vinculación empresarial',
          description:{
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio`
          },
          image:{}
        },
        sectionSuccessStories:{
          title: 'Casos de éxito',
          description: {
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio`
          },
          video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} } 
        },
        sectionHowDoesItWork:{
          title: '¿Como funciona la plataforma?',
          description: {
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio`
          },
          video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} } 
        },
        sectionUpcomingEvents:{
          title: 'Próximos eventos',
          carrousel: {}
        },
        sectionNews:{
          title: 'Noticias',
          news:[
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
          ]
        },
        sectionContactUs:{
          banner: {
            image: {
              desktop: 'https://media.istockphoto.com/id/1178013034/photo/climbing-my-way-up-the-customer-service-ladder.jpg?s=612x612&w=0&k=20&c=pLfnuu-EfDfPi9onxWGZbFypzQC1Z0rMxWn4sFc3N-k=',
              mobile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRLzXTJXV0BuMjwpTUnRnpyzT8RFfHEg7tmzJGHvfVTuGn16qaG5g-khUrCPiDz83bJc&usqp=CAU',
            },
            title: '¿Tienes dudas? Contáctanos',
            text: 'soporte@uane.edu.mx 55-1224-2345',
            contentCenter: false,
            contentLeft: false,
            wrapper: true
          }
        }
      }
    }
  }
}

export default Empleabilidad