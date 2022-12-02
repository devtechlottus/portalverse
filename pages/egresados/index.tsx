import { useRouter } from "next/router"
import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Youtube from "@/components/Youtube"
import Banner from "@/components/Banner"
import Button from "@/components/Button"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import BannerPortalverse from "@/components/BannerPortalverse"
import BeWantedForm from "@/forms/container/BeWanted"

const Egresados: NextPageWithLayout = ({ data }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>Egresados</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="head col-span-12 w-t:col-span-8 w-p:col-span-4 border-solid border-2">
          <BannerPortalverse data={ data.head.banner }/>
        </div>
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4 w-p:order-2">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { data.sectionForm.titleIntroduction}</p>
          <p className="font-Nunito leading-[125%] text-base w-t:text-3.5 w-p:text-3.5">{ data.sectionForm.textIntroduction }</p>
        </div>
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4 w-p:order-1 relative">
          <BeWantedForm pathThankyou={`/ThankYouPage?type=egresados`} classNames="absolute w-full h-auto bg-white bottom-0 rounded-lg" />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Youtube data={ data.sectionVideo.video }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6"> { data.sectionVideo.titleSection }</p>
          <p className="font-Nunito leading-[125%] text-base w-t:text-3.5 w-p:text-3.5 mb-6">{ data.sectionVideo.textSection }</p>
          <Button data={ data.sectionVideo.button } onClick={()=>{
            router.push(`${router.pathname}/talento`)
          }}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ data.sectionBanner.banner }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ data.sectionBanners.bannerOfertaEducativa }/>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={ data.sectionBanners.bannerTramites }/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="gap-6">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden my-6">
          <Banner data={ data.sectionBanner.banner }/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden mb-6">
          <Banner data={ data.sectionBanners.bannerOfertaEducativa }/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden">
          <Banner data={ data.sectionBanners.bannerTramites }/>
        </div>
      </ContentFullLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY w-t:bg-SC/Actions/AC-300 w-p:bg-SC/Actions/AC-300 mt-12">
        <ContentLayout>
          <div className="col-span-12 pt-6 pb-[53px]">
            <p className="font-Poppins font-bold leading-[125%] text-10 w-t:text-6 w-p:text-6 mb-6">{data.sectionNoticias.title}</p>
            {
              <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
              {
               data.sectionNoticias.news.map((item:any, i:number) => <section key={`section-blog-${i}`}>
                <CardWebsite data={item}/>
               </section>)
              }
            </section>
            }
          </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="my-[72px]">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <NewBanner data={ data.sectionDudas.banner } />
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>

}

export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        head: {
          banner: {
            title: "Egresados", 
            subtitle: "", 
            image: "https://www.uane.edu.mx/multi/images/programas/becas.jpg"
          },
        },
        sectionForm:{
          titleIntroduction: 'Introducción de este parrafo',
          textIntroduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra'
        },
        sectionVideo:{
          titleSection: 'Conoce a nuestros egresados talento',
          textSection: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
          button: {title: 'Saber más', type: 'primary', icon: '', isExpand: false,},
          video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '334px'} }
        },
        sectionBanner: {
          banner:{ title: 'Empleabilidad en UANE', subtitle: 'Inscríbete en nuestra Bolsa de Trabajo y encuentra empleo', state: '', size: 'medium', middle: false, center: false, bottom: false, left: true, urlImage: {mobile: 'https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_04.jpg', desktop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6K_vYDisviIeacdi_G2t5LzGol_o27rivExNw7wtm&s',}, overlay: 'white', height: '', action: {id: 'undefined', type: 'primary', title: "Hola", size: 'small', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true}
        },
        sectionBanners:{
          bannerOfertaEducativa: { title: 'Oferta educativa de egresados', subtitle: 'UANE te ofrece opciones preferenciales para continuar con tu opreparación profesional', state: '', size: 'medium', middle: false, center: false, bottom: false, left: true, urlImage: {mobile: 'https://www.questionpro.com/blog/wp-content/uploads/2018/07/evaluacion-de-empleados.jpg', desktop: 'https://www.questionpro.com/blog/wp-content/uploads/2018/07/evaluacion-de-empleados.jpg',}, overlay: '', height: '', action: {id: 'undefined', type: 'primary', title: "Hola", size: 'small', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true},
          bannerTramites: { title: 'Trámites de egresados', subtitle:'Entra al sistema de la universidad y revisa el estatus o solicita algún trámite nuevo', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: true, urlImage: {mobile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzYCpTM3Kc9sAhmJXAjQUwMMf8VPZIWZtoxvBho2zCsIzKNzMX7WJqRvKgsjGQF9NCkk&usqp=CAU', desktop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzYCpTM3Kc9sAhmJXAjQUwMMf8VPZIWZtoxvBho2zCsIzKNzMX7WJqRvKgsjGQF9NCkk&usqp=CAU',}, overlay: 'black', height: '', action: {id: 'undefined', type: 'primary', title: "Entra a SIUANE", size: 'small', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true}
        },
        sectionNoticias:{
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
                text: 'vvv',
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
                text: 'vvv',
                iconSecond: 'person',
                isBold: true,
                size: 'large',
                isUnderline: false,
                disabled: false,
                icon: 'person',
              },
              wrapper: true
            },
          ],
        },
        sectionDudas:{
          banner:{image: {
            desktop: 'https://media.istockphoto.com/id/1264977318/es/foto/gente-de-negocios-entusiasmada-y-exitosa.jpg?s=612x612&w=0&k=20&c=4xQJGbvzrb8zscIZkm2LYAzbqPSVtkuo-z2CW1P4j4s=',
            mobile: 'https://media.istockphoto.com/id/1264977318/es/foto/gente-de-negocios-entusiasmada-y-exitosa.jpg?s=612x612&w=0&k=20&c=4xQJGbvzrb8zscIZkm2LYAzbqPSVtkuo-z2CW1P4j4s=',
          },
          title: '¿Tienes dudas? Contáctanos',
          text: 'egresados@uane.edu.mx',
          contentCenter: false,
          contentLeft: false,
          action: {
            title: 'Saber más', type: 'primary', icon: '', isExpand: false,
          },
          wrapper: true}
        }
      }
    }
  }
}


export default Egresados