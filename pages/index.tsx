import Head from "next/head"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import OfertaEducativa from "@/old-components/OfertaEducativa"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import CardWebsite from "@/old-components/CardWebsite"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import SliderPortalverse from "@/old-components/SliderPortalverse"
import Video from "@/old-components/Video"
import NumbersPortalverse from "@/old-components/NumbersPortalverse/NumbersPortalverse"
import BannerPortalverse from "@/old-components/BannerPortalverse"
import CarouselCards from "@/old-components/CarouselCards/CarouselCards"
import Button from "@/old-components/Button/Button"
import CardWebsitePortalverse from "@/old-components/CardWebsitePortalverse"
import { getHomePageData } from "@/utils/getHomePageData"
import { ComponentSection } from "@/utils/strapi/queries";
import { SeoData } from "@/utils/strapi/sections/SEO"
import { OverlayCardListSection } from "@/utils/strapi/sections/OverlayCardList"
import { BannerSection } from "@/utils/strapi/sections/Banner"
import { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider"
import { StatisticsCardListSection } from "@/utils/strapi/sections/StatisticsCardList"
import BannerPortalverseWrapper from "@/components/BannerPortalverseWrapper"
import { ListconfigSection } from "@/utils/strapi/sections/Listconfig"
import getBlogPosts, { BlogPostsData } from "@/utils/getBlogPosts"
import { findSection, findSections } from "@/utils/strapi"

const Home: NextPageWithLayout = ({ data: { sections, meta, strapi } }: any) => {
  const router = useRouter();

  const strapiSections = strapi?.sections as Array<ComponentSection>;
  const strapiSeo = strapi?.seo as SeoData;
  const blogPosts = strapi?.blogPostsData as BlogPostsData;

  console.log("strapiSections", strapiSections);

  const slider = findSection<HeroSliderSection>(
    strapiSections,
    "ComponentSectionsHeroSlider"
  );

  const overlayCards = findSections<OverlayCardListSection>(
    strapiSections,
    "ComponentSectionsOverlayCardList"
  );

  const banners = findSections<BannerSection>(
    strapiSections,
    "ComponentSectionsBanner"
  );
  const internationalizationBanner = banners[0];
  const podcastBanner = banners[1];

  const statisticsCardsSection = findSection<StatisticsCardListSection>(
    strapiSections,
    "ComponentSectionsStatisticsCardList"
  );
  const statisticsCards = statisticsCardsSection?.cards;

  const handleRedirectCampus = (redirect: string) => router.push(redirect)

  return <>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverse data={{ ...sections.head.banner }} mobile = {true}/>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverse data={{ ...sections.head.banner, height: "600px" }} mobile = {false}/>
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
          <BannerPortalverseWrapper data={{...internationalizationBanner, height: "300px"}} onClick={ () => router.push(`${internationalizationBanner?.ctaUrl}`)}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <BannerPortalverseWrapper data={{...internationalizationBanner, height: "300px"}} onClick={ () => router.push(`${podcastBanner?.ctaUrl}`)}/>
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
      {/* <ContentLayout>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-8 mt-[72px]">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-p:ac-type-h3-bold-solid-poppins-tabmob">{ sections.vozUane.title }</p>
        </section>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12 w-t:mb-6 w-p:mb-6">
          {
            sections.vozUane.notas.map((item:any, i:number) => <section key={`section-blog-${i}`}>
             <CardWebsitePortalverse classNames="w-d:h-[250px] w-t:h-[250px] w-p:[250px]" data={item}/>
            </section>)
          }
        </section>
      </ContentLayout> */}
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

  const homePageData = await getHomePageData();
  const attributes = homePageData?.homePage?.data?.attributes;

  const strapiSections = attributes?.sections;
  const strapiSeo = attributes?.seo;

  const listConfig = findSection<ListconfigSection>(
    strapiSections,
    "ComponentSectionsListconfig"
  );

  const blogPostsData = await getBlogPosts({
    pageSize: listConfig?.maxentries,
    sort:
      listConfig?.sortdate === "latest"
        ? "publication_date:desc"
        : "publication_date:asc",
  });

  return {
    props: {
      data: {
        sections,
        meta,
        strapi: { sections: strapiSections, seo: strapiSeo, blogPostsData },
      },
    },
  };
}

export default Home
