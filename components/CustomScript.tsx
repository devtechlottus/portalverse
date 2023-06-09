import Script from "next/script";

export default ({script, ID}: { script: string, ID: string }) => {

  return(
      <Script id={ID}
        dangerouslySetInnerHTML={{
          __html: script,
        }
      }/>
  )
}