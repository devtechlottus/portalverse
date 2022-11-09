import { useEffect } from "react"
import "@/styles/globals.scss"
import { AppPropsWithLayout } from "@/types/Layout.types"

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("lottus-elements-uane/elements")
    }
  }, [])

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
