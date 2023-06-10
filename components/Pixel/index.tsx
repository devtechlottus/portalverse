
import React from 'react'
import Head  from 'next/head'
import Script from 'next/script'

export default ({script, pixel}: { script?: string, pixel?: string }) => {

  return(
    <>
      <Head>
        { !!script && <Script strategy='afterInteractive' dangerouslySetInnerHTML={{ __html: script }}/>}
        { !!pixel &&
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={pixel}
            />
          </noscript>
        }
      </Head>
    </>
  )
}