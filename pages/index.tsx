import { ReactElement } from "react"
import Head from "next/head"
import Link from "next/link"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import Routes from "@/routes/Routes"

const Home: NextPageWithLayout = () => {
  const components = Routes["components"].map((route: any) => route["params"]["component"]);
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
      <title>Portalverse</title>
    </Head>
    <h1 className='text-5xl flex justify-center my-2'>Welcome to Portalverse</h1>
    <ContentInsideLayout>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
        <Link href="/directorio">
          <a className='flex text-2xl hover:underline hover:text-red-800'>
            Directorio
          </a>
        </Link>
      </div>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
        <Link href="/educative-offer">
          <a className='flex text-2xl hover:underline hover:text-red-800'>
            Filtro Oferta educativa
          </a>
        </Link>
      </div>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
        <Link href="/images">
          <a className='text-2xl hover:underline hover:text-red-800'>
            Imagenes
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
        <ul className='flex justify-start'>
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
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
        <h2 className='text-2xl'>Programas Disponibles</h2>
        <ul className='flex justify-start'>
          {
            programs.map((item: string, i: number) => <li key={`program-${i}`}>
                <Link href={`/educative-offer/${item}`}>
                  <a className='mx-8 text-xl hover:underline hover:text-red-800'>{item}</a>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
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
    </ContentInsideLayout>
  </>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout breadcrumbs={false}>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default Home
