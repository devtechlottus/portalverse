import Head from "next/head"
import { useRouter } from "next/router"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import CardWebsite from "@/components/CardWebsite"
import { ContactData, SectionData } from "@/types/Directorio.types"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import ContactTarget from "@/components/ContactTarget"
import Banner from "@/components/Banner"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import RichtText from "@/components/Richtext/Richtext"

const Alumnos: NextPageWithLayout = ({ sections, meta }: any) => {
  const router = useRouter();
  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mb-12">
          <p className="font-Poppins font-bold text-10 w-t:text-8.5 w-p:text-7.5 leading-13 w-t:leading-[111%] w-p:leading-[125%] mb-6">{ sections.head.title }</p>
          <RichtText data={{
            content: sections.head.description
          }} />
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12">
          {
           sections.accesos.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item} />
           </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
            sections.directorio.map(({ name: title, description ,contacts }: SectionData, i: number) => <section key={`section-directory-${i}`} className="">
              <ContentInsideLayout>
                <p className="font-Poppins font-bold text-10 leading-12.5 col-span-12 mb-6">{title}</p>
                <p className="font-Nunito text-base w-t:text-3.5 w-p:text-base col-span-7 leading-[125%]">{description}</p>
              </ContentInsideLayout>
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
        </div>
        {
          sections.calendario.banner.visible ? 
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
            <Banner 
            data={sections.calendario.banner}
            onBtn={ ()=> {
              router.push(sections.calendario.banner.redirect)
            }}/>
          </div>
          : null
        }
        
      </ContentLayout>
    </HeaderFooterLayout>
   </>
}

export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('alumnos.json');

  return {
    props: { sections, meta }
  }
}

export default Alumnos