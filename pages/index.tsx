import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ContentInsideLayout from '@/layouts/ContentInside.layout';
import Tabs from '@/components/Tabs';
import Button from '@/components/Button/Button';
import Banner from '@/components/Banner';
import { ButtonInit } from '@/components/fixture';
import CardWebsite from '@/components/CardWebsite';
import data from '@/dummy/dummy';
import NavDrawer from '@/components/NavDrawer';

const Home: NextPage = () => {
  const components = [
    "youtube",
    "spotify",
    "lottie",
    "richtext",
    "filter",
    "filter-dropdown",
    "tabs",
    "button",
    "banner",
    "cardWebsite",
    "navDrawer",
    "numbers"
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
        <ul className='flex justify-start'>
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
      <div className='col-span-12 w-t:col-span-8 w-p:col-span-4 my-2'>
          <NavDrawer data={{
          text: 'hola',
          iconselected: false,
          linkselected: false,
          isleft: false,
          singleaction: false,
          morecontent: false,
          activesingle: false
        }} 
        onClick={ ()=> {
          console.log("aqui")
        }}/>

        <Button onClick={ () => {
          console.log("hetre")
          }} data={{title: 'Continuar', type: 'primary', icon: '', isExpand: false,}} />
      </div>
    </ContentInsideLayout>
  </>
}

export default Home
