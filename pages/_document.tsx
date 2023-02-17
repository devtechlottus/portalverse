import { Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <body>
        {/* // // Meta Pixel Code (noscript) */}
        <noscript><img height="1" width="1" style={{"display":"none","visibility":"hidden"}} src="https://www.facebook.com/tr?id=487461332128996&amp;ev=PageView&amp;noscript=1"/></noscript>
        {/* // //End Meta Pixel Code (noscript) */}
        {/* // // Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGBCMHM"
        height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript>
        {/* // // End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}