
import React from 'react'
import Head  from 'next/head'

export default ({script, pixel}: { script: string, pixel: string }) => {

  return(
    <Head>
      <>
        <script dangerouslySetInnerHTML={{ __html: script }}/>
        <img height="1" width="1" src={pixel}/>
      </>
    </Head>
  )
}