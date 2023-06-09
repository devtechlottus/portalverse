import { useEffect, useState } from "react"
import Script from "next/script"
import { useRouter } from "next/router"
// import Head from 'next/head'
import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"
// import * as gtag from "@/lib/gtag"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //   gtag.pageview(url);
  // };

  // router.events.on("routeChangeComplete", handleRouteChange);

  // return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

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
      {/* <Script id='google-tag-manager'
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NGBCMHM');`,
      }}/>
      <Script id='hot-jar'
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3340067,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      }}/> */}
      
      <Component {...pageProps} />
    </>)
}

export default MyApp
