import { useEffect, useState } from "react"
import Script from "next/script"
import { useRouter } from "next/router"
import Head from 'next/head'
import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"
import * as gtag from "@/lib/gtag"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
    gtag.pageview(url);
  };

  router.events.on("routeChangeComplete", handleRouteChange);

  return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("@lottus23/lottus-elements-uane/elements")
    }
  }, [])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      
      <Component {...pageProps} />
    </>)
}

export default MyApp
