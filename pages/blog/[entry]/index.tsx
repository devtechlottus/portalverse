import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import Routes from "@/routes/Routes"
import ContentLayout from "@/layouts/Content.layout"
import Image from "@/components/Image"
import RichtText from "@/components/Richtext/Richtext"
import CardWebsite from "@/components/CardWebsite"
import Button from "@/components/Button"
import Banner from "@/components/Banner"
import BannerWrapper from "@/components/BannerWrapper"


const EntryBlogDetail: NextPageWithLayout = ({ sections, meta }: any) => {
  const handleRedirect = (redirect:string) => router.push(redirect)

  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-1 w-d:col-end-8">
          <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-6 leading-[125%]">{sections.head.title}</p>
        </div>
        <div className="col-span-8 w-t:col-span-0 w-p:col-span-4">
          <Image
            alt={ sections.post.image.desk.alt }
            src={ sections.post.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
          />
          <div className="mt-6">
            <RichtText data={{
              content: sections.post.description
            }} />
          </div>
          <div className="mt-[72px] w-t:mt-12 w-p:mt-12 mb-6">
            <p className="font-Poppins font-bold text-7.5 leading-[125%]">{sections.relatedPost.title}</p>
          </div>
          <section className="col-span-8 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
            {
             sections.relatedPost.posts.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item}/>
             </section>)
            }
          </section>
          <div className="my-6 flex justify-center">
            <Button data={sections.relatedPost.button} onClick={()=>{router.push(sections.relatedPost.redirect)}}/>
          </div>
        </div>
        <div className="col-span-4 w-t:hidden w-p:hidden w-d:grid-cols-1">
          {
           sections.banners.map((item:any, i:number) => <section className="mb-6" key={`section-blog-${i}`}>
            <BannerWrapper data={item} typeBanner={item.type} banner={item} font={item.font} onBtn={() => router.push(item.redirect)}/>
           </section>)
          }
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:hidden">
          {
           sections.banners.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <Banner data={item} onBtn={() => router.push(item.redirect)}/>
           </section>)
          }
        </section>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}
export async function getStaticPaths() {
  const data = Routes["blog"].filter(({params:{ level }}:any) => level === 'entrada')[0]
  const { params:{ entries } } = data
  return {
    paths: [...entries],
    fallback: false,
  }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { params: { entry } } = context
  const { sections, meta } = await getDataPageFromJSON(`/blog/${entry}.json`);

  return {
    props: { sections, meta }
  }
}

export default EntryBlogDetail