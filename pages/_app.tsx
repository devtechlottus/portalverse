import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import HeaderFooterLayout from '@/layouts/HeaderFooter.layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <HeaderFooterLayout>
    <Component {...pageProps} />
  </HeaderFooterLayout>
}

export default MyApp
