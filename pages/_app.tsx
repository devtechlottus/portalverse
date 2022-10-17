import type { AppProps } from 'next/app'
import HeaderFooterLayout from '@/layouts/HeaderFooter.layout'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <HeaderFooterLayout>
    <Component {...pageProps} />
  </HeaderFooterLayout>
}

export default MyApp
