import { ReactElement } from "react"
import Head from "next/head"
import Link from "next/link"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import Routes from "@/routes/Routes"
import OfertaEducativa from "@/components/OfertaEducativa"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Banner from "@/components/Banner"

const Home: NextPageWithLayout = ({data}: any) => {
  const components = Routes["components"].map((route: any) => route["params"]["component"]);
  const oferta = Routes["oferta-educativa"].reduce((prev: any, { params: { level,config: { title, promo } } }: any) => [ ...prev, ({ level,title, promo:{...promo, text: title} })], []);
  const programs = [
    "design",
    "code",
  ];
  const faqs = [
    { title:"Nuevo Ingreso", url: "new-incomming" },
    { title:"Comunidad UANE", url: "community" },
    { title:"Aula Virtual", url: "virtual-classroom" },
    { title:"Internacionalización", url: "internationalization" },
  ];

  return <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <HeaderFooterLayout>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <BannerPortalverse data={ data.banner } />
      </ContentFullLayout>
      <ContentLayout classNamesOutside="gap-6">
        <BannerPortalverse classNames="w-t:hidden w-p:hidden" data={ {...data.banner, title:"BIENVENIDOS OSOS", subtitle:"¡Nos renovamos para darte la mejor oferta educativa!"} }/>
        <div className="w-d:mt-12 w-t:mt-6 w-p:mt-6 mb-6 ">
          <p className="text-10 w-t:text-6 w-p:text-6 font-Poppins font-bold">{ data.titleOffer }</p>
          <Link href="/oferta-educativa">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Oferta educativa
            </a>
          </Link>
        </div>
        <OfertaEducativa data={oferta} level={'oferta-educativa/'} classNames="opacity-80"/>
        <div className="my-6">
          <Banner data={{title: 'UANE Internacional', subtitle: 'internacionalízate agrega experiencias internacionales a tu eduacioón', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://cdn.milenio.com/uploads/media/2020/01/31/reconocio-alumnos-obtuvieron-promedios-mayores.jpg', desktop: 'https://cdn.milenio.com/uploads/media/2020/01/31/reconocio-alumnos-obtuvieron-promedios-mayores.jpg',}, overlay: 'black', height: '', action: {id: 'undefined', type: 'primary', title: "Hola", size: 'small', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true}} />
        </div>
        <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <Link href="/directorio">
            <a className='flex text-2xl hover:underline hover:text-red-800'>
              Directorio
            </a>
          </Link>
        </div>
        {
          //<div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          //  <Link href="/images">
          //   <a className='text-2xl hover:underline hover:text-red-800'>
          //     Imagenes
          //   </a>
          // </Link>
          //</div>
        }
        
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
              faqs.map(({ title, url }: any, i: number) => <li key={`faqs-${i}`}>
                  <Link href={`/faq/${ url }`}>
                    <a className='mx-8 text-xl hover:underline hover:text-red-800'>{ title }</a>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
        {

        
        //<div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
        //  <h2 className='text-2xl'>Programas Disponibles</h2>
        //  <ul className='flex justify-start'>
        //    {
        //      programs.map((item: string, i: number) => <li key={`program-${i}`}>
        //          <Link href={`/educative-offer/${item}`}>
        //            <a className='mx-8 text-xl hover:underline hover:text-red-800'>{item}</a>
        //          </Link>
        //        </li>
        //      )
        //    }
        //  </ul>
        //</div>
        
          //<div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          //  <h2 className='text-2xl'>Componentes disponibles</h2>
          //  <ul className='flex justify-start flex-wrap'>
          //    {
          //      components.map((item: string, i: number) => <li key={`component-${i}`}>
          //          <Link href={`/components/${item}`}>
          //            <a className='mx-8 text-xl hover:underline hover:text-red-800'>{item}</a>
          //          </Link>
          //        </li>
          //      )
          //    }
          //  </ul>  
          //</div>
        }
        
        </ContentLayout>
    </HeaderFooterLayout>
    
  </>
}

export async function getStaticProps(context: any) {
  return {
    props: { data: {banner:{title: "UANE estrena sitio web", subtitle: "Nos estamos renovando para darte la mejor oferta educativa", image: "https://www.uane.edu.mx/multi/images/programas/becas.jpg"},title: "UANE", titleOffer:"¿Qué me ofrece UANE para estudiar?" },
  banner2: {
    title: "hola",
    subtitle: "",
    state: "",
    size: "",
    middle: false,
    center: false,
    bottom: false,
    left: false,
    urlImage: {
      mobile: "",
      desktop: ""
    },
    overlay: "",
    height: "",
    action: {},
    wrapper: false
  }},
  }
}

export default Home
