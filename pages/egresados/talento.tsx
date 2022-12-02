import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import ContentFullLayout from "@/layouts/ContentFull.layout"

const ThankYouPage: NextPageWithLayout = ({ data }: any) => {

  return <>
    <Head>
      <title>Talento</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="w-d:col-span-8 w-t:col-span-7 w-p:col-span-4 w-d:mb-12 w-t:mb-6 w-p:mb-6">
          <h1 className="text-13 w-t:text-8.25 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%] mb-5">{ data.head.title }</h1>
          <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] ">{ data.head.description }</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
           data.experiences.cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item}/>
           </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden w-p:hidden my-[72px]">
          <NewBanner data={ data.sectionApply.banner } />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-t:mt-[65px] w-t:mb-[41px] w-p:my-12">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <NewBanner data={ data.sectionApply.banner } />
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
        head:{
          title: 'Egresados talento',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra'
        },
        experiences: {
          cards: [{ 
            urlImage: 'https://img.freepik.com/foto-gratis/mira-captura-recortada-atractivo-joven-apuesto-emocionado-camiseta-azul-que-senala-dedos-arriba-despues-haber-mirado-sorprendido-expresion-alegre-feliz-cara-broadley-sonriendo_176420-10316.jpg?w=2000',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Marcos López',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkText: {
              text: 'Ver video',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              icon: 'visibility',
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
            urlImage: 'https://img.freepik.com/foto-gratis/feliz-joven-alegre-telefono-movil-celebrando-victoria_171337-18119.jpg?w=2000',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Susana Ramirez',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
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
            urlImage: 'https://img.freepik.com/foto-gratis/chica-atractiva-satisfecha-sosteniendo-algo-mano-mostrando-pulgar-arriba-senal-aprobacion_1258-19083.jpg?w=2000',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Rosio Jimenez',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
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
            urlImage: 'https://i.pinimg.com/736x/9f/c2/95/9fc29549f0e798046353bb399590c362.jpg',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Mariano Morales',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
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
            urlImage: 'https://cdn.pixabay.com/photo/2017/06/09/05/17/woman-2385785_960_720.jpg',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Julieta Sanchez',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
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
            urlImage: 'https://i.pinimg.com/736x/24/bc/5f/24bc5fbf7db9eba9b740480a3a474221.jpg',
            subtitle: 'Licenciatura en Relaciones Internacionales',
            title: 'Rodolofo Dominguez',
            text: 'El convenio está enfocado en la colaboración académica, científica y cultural, a través de programas anuales que comprenden, entre otros proyectos, el desarrollo de investigaciones conjuntas, programas intercambio',
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
          }]
        },
        sectionApply:{
          banner: {
          image: {
            desktop: 'https://media.istockphoto.com/id/1264977318/es/foto/gente-de-negocios-entusiasmada-y-exitosa.jpg?s=612x612&w=0&k=20&c=4xQJGbvzrb8zscIZkm2LYAzbqPSVtkuo-z2CW1P4j4s=',
            mobile: 'https://media.istockphoto.com/id/1264977318/es/foto/gente-de-negocios-entusiasmada-y-exitosa.jpg?s=612x612&w=0&k=20&c=4xQJGbvzrb8zscIZkm2LYAzbqPSVtkuo-z2CW1P4j4s=',
          },
          title: '¿Quieres postularte?',
          text: 'egresados@uane.edu.mx 55-1224-2345',
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

export default ThankYouPage