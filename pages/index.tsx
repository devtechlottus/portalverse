import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import Routes from "@/routes/Routes"
import OfertaEducativa from "@/components/OfertaEducativa"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Banner from "@/components/Banner"
import Youtube from "@/components/Youtube"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import Numbers from "@/components/Numbers"
import CardWebsite from "@/components/CardWebsite"
import OpenForm from "@/forms/container/OpenForm"

const Home: NextPageWithLayout = ({ data }: any) => {
  const components = Routes["components"].map((route: any) => route["params"]["component"]);
  const oferta = Routes["oferta-educativa"].reduce((prev: any, { params: { level,config: { title, promo } } }: any) => [ ...prev, ({ level,title, promo:{...promo, text: title} })], []);
  const router = useRouter();

  return <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <BannerPortalverse data={ data.banner } />
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <BannerPortalverse classNames="w-t:hidden w-p:hidden" data={ {...data.banner, title:"BIENVENIDOS OSOS", subtitle:"¡Nos renovamos para darte la mejor oferta educativa!"} }/>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-12 w-t:mt-6 w-p:mt-6">
          <p className="text-10 w-t:text-6 w-p:text-6 font-Poppins font-bold">{ data.titleOffer }</p>
          <Link href="/oferta-educativa">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Oferta educativa
            </a>
          </Link>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <OfertaEducativa data={oferta} level={'oferta-educativa/'} classNames="opacity-80 w-d:mb-8"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="col-span-8">
          <Banner data={data.banner2} 
          onBtn={ () => {
            router.push('/internacionalizacion')
          }}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden">
        <div className="col-span-12">
          <Banner data={data.banner2} 
          onBtn={ () => {
            router.push('/internacionalizacion')
          }}/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden gap-6 my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="w-t:col-span-8 w-p:col-span-4">
          <Banner data={data.bannerPodcast} 
          onBtn={ () => {
            router.push('/podcast')
          }}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden my-6">
        <div className="col-span-12 w-p:col-span-4">
          <Banner data={data.bannerPodcast} 
          onBtn={ () => {
            router.push('/podcast')
          }}/>
        </div>
      </ContentLayout>
      <ContentLayout>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ">
          {
            data.numbers.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
              <Numbers data={item}/>
            </section>)
          }
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <p className=" text-10 w-p:text-6 font-Poppins font-bold leading-[125%]">{ data.blogTitle }</p>
          </section>
          <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
            {
             data.blog.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item}/>
             </section>)
            }
          </section>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <OpenForm pathThankyou={`/ThankYouPage`} image={{ src: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg", alt:"image-person" }} />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <p className="font-5.5 font-Poppins font-bold mb-6 leading-[125%] w-t:leading-[130%]">{data.video.title}</p>
            <Youtube data={data.video} />
          </div>
      </ContentLayout>
      <ContentLayout>
          
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/directorio">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Directorio
            </a>
          </Link>
        </div>        
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/campus">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Campus
            </a>
          </Link>
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4'>
          <h1 className='text-2xl'>Preguntas Frecuentes</h1>
          <ul className='flex justify-start  flex-wrap'>
            {
              data.faqs.map(({ title, url }: any, i: number) => <li key={`faqs-${i}`}>
                  <Link href={`/faq/${ url }`}>
                    <a className='mx-8 text-xl hover:underline hover:text-red-800'>{ title }</a>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/ThankYouPage">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Thank you page
            </a>
          </Link>
        </div>   
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/ThankYouPage?type=egresados">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Thank you page egresados
            </a>
          </Link>
        </div>     
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/modelo-educativo">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Modelo educativo
            </a>
          </Link>
        </div> 
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/pedir-informacion">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Pedir información
            </a>
          </Link>
        </div>    
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/ponte-en-contacto">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Ponte en contacto
            </a>
          </Link>
        </div>   
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/becas">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Becas
            </a>
          </Link>
        </div>   
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/egresados">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Egresados
            </a>
          </Link>
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/egresados/talento">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Egresados talento
            </a>
          </Link>
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/alumnos">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Alumnos
            </a>
          </Link>
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/empleabilidad">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Empleabilidad
            </a>
          </Link>
        </div>
              
      {  
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <h2 className='text-2xl'>Componentes disponibles</h2>
          <ul className='flex justify-start flex-wrap'>
            {
              components.map((item: string, i: number) => <li key={`component-${i}`}>
                  <Link href={`/components/${item}`}>
                    <a className='mx-8 text-xl hover:underline hover:text-red-800'>{item}</a>
                  </Link>
                </li>
              )
            }
          </ul>  
        </div>
      }
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

export async function getStaticProps(context: any) {
  return {
    props: { 
      data: {
        banner:{
          title: "UANE estrena sitio web", 
          subtitle: "Nos estamos renovando para darte la mejor oferta educativa", 
          image: "https://www.uane.edu.mx/multi/images/programas/becas.jpg"
        },
        title: "UANE", 
        titleOffer:"¿Qué me ofrece UANE para estudiar?",
        banner2: {
          title: 'UANE Internacional', subtitle: 'internacionalízate agrega experiencias internacionales a tu eduacioón', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://cdn.milenio.com/uploads/media/2020/01/31/reconocio-alumnos-obtuvieron-promedios-mayores.jpg', desktop: 'https://cdn.milenio.com/uploads/media/2020/01/31/reconocio-alumnos-obtuvieron-promedios-mayores.jpg',}, overlay: 'black', height: '', action: {id: 'undefined', type: 'outlined', title: "Conocer más", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true
        },
        video:{
          title: 'Descubre más de la vida UANE',
          options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} ,
        },
        bannerPodcast:{
          title: 'Podcast Voz UANE', subtitle: 'Un espisodio nuevo cada 2 semanas en Spotify y Youtube', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg', desktop: 'https://home.kpmg/content/dam/kpmg/es/images/2021/01/podcast-1500x857.jpg',}, overlay: 'black', height: '', action: {id: 'undefined', type: 'outlined', title: "Conocer más", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true
        },
        numbers:[
          {icon: 'persons', prefix: '+', number: '77%', suffix: '+', title: 'Alumnos', body: 'con experiencias internacionales acceden a puestos directivos.', container: true,},
          {icon: 'persons', prefix: '+', number: '11', suffix: '+', title: 'Formas', body: 'diferentes de internacionalizar tu título en UANE.', container: true,},
          {icon: 'persons', prefix: '+', number: '1111', suffix: '+', title: 'Titulación', body: 'Obtén título de UANE y uno más de alguna univesidad extranjera.', container: true,},
          {icon: 'persons', prefix: '+', number: '9', suffix: '+', title: 'Alianzas', body: 'con universidades en el extranjero.', container: true,},
        ],
        blogTitle:'Voz UANE blog',
        blog:[
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
        ],
        faqs: [
          { title:"Nuevo Ingreso", url: "new-incomming" },
          { title:"Comunidad UANE", url: "community" },
          { title:"Aula Virtual", url: "virtual-classroom" },
          { title:"Internacionalización", url: "internationalization" },
        ]
      } 
    },
  }
}

export default Home
