import { Html, Head, Main, NextScript } from "next/document"
import Pixel from '../components/Pixel'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Pixel name='META_PIXEL_1' />

      <body>
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=487461332128996&ev=PageView&noscript=1"/>` }}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}