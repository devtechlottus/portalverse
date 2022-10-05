import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>Diseño
      <Head>
        <title>Portalverse</title>
      </Head>
      <h1 className='text-center'>Welcome to Portalverse</h1>
      <h2>Programas Disponibles</h2>
      <ul>
        <li>
          <Link href="/educative-offer/design">
            <a>Diseño</a>
          </Link>
        </li>
        <li>
          <Link href="/educative-offer/code">
            <a>Código</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
