import { ReactElement } from "react"
import Head from "next/head"
import DirectoryComponentData, { ContactData, SectionData } from "@/types/Directorio.types"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContactTarget from "@/components/ContactTarget"

const Directory: NextPageWithLayout<DirectoryComponentData> = ({ directory }: DirectoryComponentData) => {
  return <>
    <Head>
      <title>Filtro educativo</title>
    </Head>
    <section className="mx-auto mt-6 w-full">
      <h1 className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-6 leading-16.25 text-dark">Directorio Universitario</h1>
      <p className="font-Nunito font-normal text-base leading-5 mb-8.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      {
        directory.map(({ title, contacts }: SectionData, i: number) => <section key={`section-directory-${i}`} className="mb-18">
            <h2 className="font-Poppins font-bold text-10 leading-12.5">{title}</h2>
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

export function getStaticProps(context: any) {
  const directory: SectionData[] = [
    {
      title: "Contacto general",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Hermosillo",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Saltillo",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Monterrey",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Torreón",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Monclova",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Piedras Negras",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Reynosa",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
    {
      title: "Campus Sabinos",
      contacts: [
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Servicios escolares",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Dirección general",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Biblioteca",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
        {
          image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
          name: "Línea segura",
          email: "email@uane.com",
          phone: "55 10 50 27 07",
        },
      ]
    },
  ]

  return {
    props: { directory }
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