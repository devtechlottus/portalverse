import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';

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

  return <>
    <Head>
      <title>Portalverse</title>
    </Head>
    <h1 className='text-center'>Welcome to Portalverse</h1>
    <Link href="/directorio">
      <a>
        Directorio
      </a>
    </Link>
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
  </>
}

export default Home
