
import React from 'react'
import Head  from 'next/head'

import FACEBOOK_PIXEL_1 from './facebook/pixel-1'

export default ({name}: any) => {

  return(
    <Head>
      {name === 'META_PIXEL_1' && <FACEBOOK_PIXEL_1 />}
    </Head>
  )
}