import Head from "next/head"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import OfertaEducativa from "@/components/OfertaEducativa"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import CardWebsite from "@/components/CardWebsite"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import SliderPortalverse from "@/components/SliderPortalverse"
import Video from "@/components/Video"
import NumbersPortalverse from "@/components/NumbersPortalverse/NumbersPortalverse"
import BannerPortalverse from "@/components/BannerPortalverse"
import CarouselCards from "@/components/CarouselCards/CarouselCards"
import Button from "@/components/Button/Button"

const Home: NextPageWithLayout = ({ data: { sections, meta } }: any) => {
  const router = useRouter();

  const handleRedirectCampus = (redirect: string) => router.push(redirect)

  return <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverse data={{ ...sections.head.banner }} />
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverse data={{ ...sections.head.banner, height: "600px" }} />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-12 w-t:mt-6 w-p:mt-6">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-t:ac-type-h3-bold-solid-poppins-tablet w-p:ac-type-h3-bold-solid-poppins-tablet">{ sections.oferta.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-12 w-t:mb-6 w-p:mb-6">
          <OfertaEducativa data={sections.oferta.levels} classNames="opacity-80 w-d:mb-8"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="col-span-8">
          <BannerPortalverse data={sections.bannerInternacional} onClick={ () => router.push(`${sections.bannerInternacional.redirect}`)}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <BannerPortalverse data={sections.bannerInternacional} onClick={ () => router.push(`${sections.bannerInternacional.redirect}`)}/>
        </div>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ">
          {
            sections.numbers.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
              <NumbersPortalverse data={item}/>
            </section>)
          }
        </div>
      </ContentLayout>
      {/* <ContentFullLayout>
        <section className="w-d:grid-cols-12 w-t:grid-cols-8 w-p:grid-cols-4 bg-[#F4F4F4] px-[84px] w-p:pl-6 w-p:pr-0 pt-12">
          <CarouselCards data={sections.campus} />
          <section className="flex justify-center mt-6 pb-8">
            <Button dark data={{...sections.campus.button}} onClick={() => handleRedirectCampus(sections.campus.button.redirect) }/> 
          </section>
        </section>
      </ContentFullLayout> */}
      <ContentLayout>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-p:ac-type-h3-bold-solid-poppins-tabmob">{ sections.vozUane.title }</p>
        </section>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12 w-t:mb-6 w-p:mb-6">
          {
            sections.vozUane.notas.map((item:any, i:number) => <section key={`section-blog-${i}`}>
             <CardWebsite data={item}/>
            </section>)
          }
        </section>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden gap-6 my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="w-t:col-span-8 w-p:col-span-4">
          <BannerPortalverse data={sections.bannerPodcast} onClick={() => router.push(`${sections.bannerPodcast.redirect}`)}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden my-6">
        <div className="col-span-12 w-p:col-span-4">
          <BannerPortalverse data={sections.bannerPodcast} onClick={() => router.push(`${sections.bannerPodcast.redirect}`)}/>
        </div>
      </ContentLayout>
      <ContentLayout>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <OpenForm pathThankyou={`/thank-you`} image={{ src: "https://drive.google.com/uc?export=view&id=1CxZzCcuuptzexZwBWNtktMbIT5Z9dB6B", alt:"image-person" }} />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <p className="mb-6 text-Poppins font-semibold text-[22px] w-p:text-6">{sections.descubre.title}</p>
            {
              <Video dimensions={["330px","400px","200px"]} data={ sections.descubre } />
            }
          </div>
          
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('home.json');

  return {
    props: { 
      data: { sections, meta }
    },
  }
}

export default Home
