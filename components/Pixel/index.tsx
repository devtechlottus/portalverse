
import React from 'react'
import Head  from 'next/head'

export default ({script, pixel}: { script: string, pixel: string }) => {

  return(
    <Head>
      <>
        <script dangerouslySetInnerHTML={{ __html: script }}/>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={pixel}
          />
        </noscript>
      </>
    </Head>
  )
}