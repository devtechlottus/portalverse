import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import RichtText from "@/components/Richtext/Richtext"
import Image from "@/components/Image"
import CardProgram from "@/components/CardProgram"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import Routes from "@/routes/Routes"

const DetalleCursoEducacionContinua: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout classNames="gap-6">
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4">
          <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-7.5 leading-13 w-t:leading-[111%] w-p:leading-[125%] mb-6">{sections.head.title}</p>
          <RichtText data={{
            content: sections.head.description
          }} />
        </div>
        <div className="col-span-6 w-t:col-span-4 w-p:col-span-4">
          <Image
              alt={ sections.head.image.desk.alt }
              src={ sections.head.image.desk.src }
              classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1 mb-6"
            />
          aqui va el formulario
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-t:hidden">
          <p className="font-Poppins font-bold text-10 pt-6 w-t:text-8.5 w-p:text-7.5 leading-[125%]">{sections.relatedCourses.title}</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12 w-d:hidden w-t:hidden">
          {
           sections.relatedCourses.courses.map((item:any, i:number) => <section key={`section-educativeProgram-${i}`}>
            <CardProgram image={item.image.desk} title={item.title} link={item.link} onClick={()=> router.push(item.redirect)}/>
           </section>)
          }
        </section>
      </ContentLayout>
      <ContentFullLayout classNames="bg-SC/Backgrounds/BG-GRAY w-p:hidden">
        <ContentLayout>
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
            <p className="font-Poppins font-bold text-10 pt-6">{sections.relatedCourses.title}</p>
          </div>
          <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12">
            {
             sections.relatedCourses.courses.map((item:any, i:number) => <section key={`section-educativeProgram-${i}`}>
              <CardProgram image={item.image.desk} title={item.title} link={item.link} onClick={()=> router.push(item.redirect)}/>
             </section>)
            }
          </section>
        </ContentLayout>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}
export async function getStaticPaths() {
  const data = Routes["oferta-educativa"].filter(({params:{level}}:any) => level === 'educacion-continua')[0]
  const {params:{programs}} = data
  return {
    paths: [...programs],
    fallback: false,
  }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { params:{ program }} = context
  const { sections, meta } = await getDataPageFromJSON(`/educacion-continua/${program}.json`);

  return {
    props: { sections, meta }
  }
}

export default DetalleCursoEducacionContinua