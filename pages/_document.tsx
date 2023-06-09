import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=487461332128996&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}