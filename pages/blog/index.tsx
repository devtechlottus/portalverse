import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import BannerPortalverse from "@/components/BannerPortalverse"
import ContentLayout from "@/layouts/Content.layout"
import CardWebsite from "@/components/CardWebsite"

const Blog: NextPageWithLayout = ({ sections, meta }: any) => {
  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
			<ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <BannerPortalverse data={ sections.head.banner } />
        </div>
      </ContentFullLayout>
			<ContentLayout classNames="mt-12">
				<BannerPortalverse classNames="w-t:hidden w-p:hidden" data={ sections.head.banner }/>
				<div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
					<p className="font-Poppins font-bold text-8.5 w-t:text-6 w-p:text-6 leading-[111%] w-t:leading-[125%] w-p:leading-[125%]">{sections.blogNotices.title}</p>
				</div>
				<section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
           sections.blogNotices.notas.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item} onClick={()=> router.push(`${router.pathname}/${item.redirect}`)}/>
           </section>)
          }
        </section>
			</ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {	

  const { sections, meta } = await getDataPageFromJSON('blog/blog.json');

  return {
    props: {data: {  level:'blog' }, sections, meta }
  }
}

export default Blog