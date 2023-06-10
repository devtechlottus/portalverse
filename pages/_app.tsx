import { useEffect } from "react"

import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"
import { useRouter } from "next/router"
import * as fbq from '../lib/fb-pixel'
import Script from "next/script"
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("@lottus23/lottus-elements-uane/elements")
    }
  }, [])
  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Component {...pageProps} />
    </>)
}

export default MyApp
