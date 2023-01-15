import Head from "next/head"
import { useRouter } from "next/router"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import ContentLayout from "@/layouts/Content.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Banner from "@/components/Banner"
import Spotify from "@/components/Spotify"
import { getDataPageFromJSON } from "@/utils/getDataPage"


const Podcast: NextPageWithLayout = ({ sections, meta }: any) => {
  const router = useRouter();

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentFullLayout classNames="w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-12">
          <Banner data={sections.head.banner} onBtn={() => window.open(sections.head.banner.redirect)}/>
        </div>
      </ContentFullLayout>
      <ContentLayout classNames="">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden w-p:hidden mb-12">
          <Banner data={sections.head.banner} onBtn={() => window.open(sections.head.banner.redirect)}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 w-t:text-6.5 w-p:text-7.5 leading-[125%]">{ sections.lastPodcast.title}</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Spotify data={sections.lastPodcast.podcast} />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 w-t:text-6.5 w-p:text-7.5 leading-[125%]">{ sections.allPodcast.title}</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
           sections.allPodcast.items.map((item:any, i:number) => <section className="mb-6" key={`section-blog-${i}`}>
            <Spotify data={item}/>
           </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex justify-center">
          
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <Banner data={sections.vozUane.banner} onBtn={() => router.push(sections.vozUane.banner.redirect)}/>
        </div>
      </ContentLayout>
      <ContentFullLayout>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:hidden w-p:hidden">
          <Banner data={sections.vozUane.banner} onBtn={() => router.push(sections.vozUane.banner.redirect)}/>
        </div>
      </ContentFullLayout>

    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('podcast.json');

  // redirect not avaliable page
  if (!!meta.hidden) {
    return {
      notFound: true,
    }
  }

  return {
    props: { sections, meta }
  }
}

export default Podcast