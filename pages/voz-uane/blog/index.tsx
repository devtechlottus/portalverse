import Head from "next/head"
import { useRouter } from "next/router"
import { env } from "process"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import NextPageWithLayout from "@/types/Layout.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import ContentLayout from "@/layouts/Content.layout"
import CardWebsite from "@/components/CardWebsite"
import Slider from "@/components/SliderPortalverse"
import { fetchStrapi, replaceURL } from "@/utils/getStrapi"
import getBlogPageData from "@/utils/getBlogPageData"

const Blog: NextPageWithLayout = ({ data }: any) => {
  console.log("Data", data)
  const { blogPageData, blogPostsData } = data;
  const blogPageAttributes = blogPageData?.blogPage?.data?.attributes;
  const metaTitle = blogPageAttributes?.seo?.metaTitle;
  const sliderData = blogPageAttributes?.sections?.[0];
  const router = useRouter()
  const linkIcon = {
    "text": "Ver más",
    "iconSecond": "",
    "isBold": true,
    "size": "large",
    "isUnderline": false,
    "disabled": false,
    "icon": ""
  }

  const slides = sliderData?.slide;

  const blogPosts = blogPostsData?.blogPosts?.blogPosts?.data;
  console.log("blogPosts", blogPosts);

  return <>
    <Head>
      <title>{ metaTitle }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
			<ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Slider data={{items: slides, width: "100%", height: "600px"}} />
        </div>
      </ContentFullLayout>
			<ContentLayout classNames="">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden w-p:hidden">
          <Slider data={{ items: slides, height: "600px" }} />
        </div>
				<div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:mt-6 w-p:mt-6">
					<p className="font-Poppins font-bold text-8.5 w-t:text-6 w-p:text-6 leading-[111%] w-t:leading-[125%] w-p:leading-[125%]">{blogPostsData?.title}</p>
				</div>
				<section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            blogPosts?.map((item:any, i:number) => {
              const attributes = item?.attributes;
              const title = attributes?.title;
              const slug = attributes?.slug;
              const image = attributes?.featured_image?.data?.attributes?.url;
              return (
                <section key={`section-blog-${i}`}>
                  <CardWebsite
                    onClick={() => router.push(`${router.pathname}/${slug}`)}
                    data={{
                      title,
                      urlImage: image,
                      linkIcon,
                      linkText: {
                        text: "Ver más",
                        size: "small",
                        isBold: false,
                        disabled: false,
                      },
                      type: "vertical",
                      wrapper: true,
                    }}
                  />
                </section>
              );
            })
          }
        </section>
			</ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {	
  const data = await getBlogPageData();
  return { props: { data }, revalidate: 10 };
}

export default Blog