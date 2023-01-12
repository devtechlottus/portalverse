import { ReactElement, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import DirectoryComponentData, { ContactData, SectionData } from "@/types/Directorio.types"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContactTarget from "@/components/ContactTarget"
import RichtText from "@/components/Richtext/Richtext"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const Directory: NextPageWithLayout<DirectoryComponentData> = ({ areas, meta }: DirectoryComponentData) => {
  const router = useRouter();

  useEffect(() => {
    if (!!meta.hidden) {
      router.push("/404");
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <section className="mx-auto mt-6 w-full col-span-12 w-t:col-span-8 w-p:col-span-4">
      <h1 className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-6 leading-16.25 text-SC/Blackandgrey/B-80">Directorio Universitario</h1>
      <RichtText data={{ content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}} />
      {
        areas.map(({ name, contacts }: SectionData, i: number) => <section key={`section-directory-${i}`}>
            <h2 className="font-Poppins font-bold text-10 leading-12.5">{name}</h2>
            <ContentInsideLayout classNames="mt-6 gap-6">
              {
                contacts.map(({ name, email, phone, image = '' }: ContactData, j: number) =>
                  <ContactTarget key={`card-item-${j}`} image={image} name={name} email={email} phone={phone} /> 
                )
              }
            </ContentInsideLayout>
          </section>
        )
      }
    </section>
  </>
}

export async function getStaticProps(context: any) {
  const { sections: { areas, head }, meta } = await getDataPageFromJSON('directorio.json');

  return {
    props: { areas, meta, head }
  }
}

Directory.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default Directory