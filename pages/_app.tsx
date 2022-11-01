import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import HeaderFooterLayout from '@/layouts/HeaderFooter.layout'
import ContentLayout from '@/layouts/Content.layout'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("lottus-elements-uane/elements")
    }
  }, [])

  return <HeaderFooterLayout>
    <ContentLayout>
      <Component {...pageProps} />
    </ContentLayout>
  </HeaderFooterLayout>
}

export default MyApp
