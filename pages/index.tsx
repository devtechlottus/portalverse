import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ContentInsideLayout from '@/layouts/ContentInside.layout';

const Home: NextPage = () => {
  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("lottus-elements-uane/elements")
    }
  }, [])

  const components = [
    "youtube",
    "spotify",
    "lottie",
    "richtext",
    "filter",
    "filter-dropdown"
  ];
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
    <h1>Welcome to Portalverse</h1>
    <ContentInsideLayout>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4'>
        <Link href="/directorio">
          <a>
            Directorio
          </a>
        </Link>
      </div>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4'>
        <h1>Preguntas Frecuentes</h1>
        <ul>
          {
            faqs.map(({ title, url }: any, i: number) => <li key={`faqs-${i}`}>
                <Link href={`/faq/${ url }`}>
                  <a>{ title }</a>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4'>
        <h2>Programas Disponibles</h2>
        <ul>
          {
            programs.map((item: string, i: number) => <li key={`program-${i}`}>
                <Link href={`/educative-offer/${item}`}>
                  <a>{item}</a>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4'>
        <h2>Componentes disponibles</h2>
        <ul>
          {
            components.map((item: string, i: number) => <li key={`component-${i}`}>
                <Link href={`/components/${item}`}>
                  <a>{item}</a>
                </Link>
              </li>
            )
          }
        </ul>  
      </div>
    </ContentInsideLayout>
  </>
}

export default Home
