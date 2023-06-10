import Head from "next/head"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import OpenForm from "@/forms/container/OpenForm"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import Video from "@/old-components/Video"
import { HomeComponentSection, getHomePageData } from "@/utils/getHomePageData"
import { SeoData } from "@/utils/strapi/sections/SEO"
import { OverlayCardListSection } from "@/utils/strapi/sections/OverlayCardList"
import { BannerSection } from "@/utils/strapi/sections/Banner"
import { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider"
import BannerPortalverseWrapper from "@/components/BannerPortalverseWrapper"
import { ListconfigSection } from "@/utils/strapi/sections/Listconfig"
import getBlogPosts, { BlogPostsData } from "@/utils/getBlogPosts"
import { findSection, findSections } from "@/utils/strapi"
import SliderPortalverseWrapper from "@/components/SliderPortalverseWrapper"
import OfertaEducativaWrapper from "@/components/OfertaEducativaWrapper"
import BlogPostCardWrapper from "@/components/BlogPostCardWrapper"
import NumbersPortalverse from "@/old-components/NumbersPortalverse/NumbersPortalverse"
import CustomScript from "@/components/CustomScript"
import Pixel from "@/components/Pixel"

const Home: NextPageWithLayout = ({ data: { sections, meta, strapi } }: any) => {
  const router = useRouter();

  const strapiSections = strapi?.sections as Array<HomeComponentSection>;
  const strapiSeo = strapi?.seo as SeoData;

  const blogListConfig = findSection<ListconfigSection>(strapiSections, "ComponentSectionsListconfig");
  const blogPostsData = strapi?.blogPostsData as BlogPostsData;


  const slider = findSection<HeroSliderSection>(
    strapiSections,
    "ComponentSectionsHeroSlider"
  );

  const overlayCardsSection = findSection<OverlayCardListSection>(
    strapiSections,
    "ComponentSectionsOverlayCardList"
  );

  const banners = findSections<BannerSection>(
    strapiSections,
    "ComponentSectionsBanner"
  );
  const banner1 = banners[0];
  const banner2 = banners[1];
  // const gtag: { script: string, ID: string } ={
  //   ID:'google-tag-manager',
  //   script: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //   })(window,document,'script','dataLayer','GTM-NGBCMHM');`,
  // }
  const hotjar: { script: string, ID: string } ={
    ID:'hot-jar',
    script: `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3340067,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
  }
  // TODO: Uncomment when Strapi support for custom statistics card color is added.
  // const statisticsCardsSection = findSection<StatisticsCardListSection>(
  //   strapiSections,
  //   "ComponentSectionsStatisticsCardList"
  // );

  return <>
    {/* <CustomScript {...gtag} /> */}
    <Pixel 
        script={`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '487461332128996');`}
        pixel="https://www.facebook.com/tr?id=487461332128996&ev=PageView"
      />
    <CustomScript {...hotjar} />
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <ContentFullLayout classNames="gap-6 w-d:hidden">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverseWrapper data={{ ...slider }} mobile = {true}/>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div className="w-t:hidden w-p:hidden col-span-12 w-t:col-span-8 w-p:col-span-4 mt-3">
          <SliderPortalverseWrapper data={{ ...slider, height: "600px" }} mobile = {false}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-d:mt-18">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-t:ac-type-h3-bold-solid-poppins-tablet w-p:ac-type-h3-bold-solid-poppins-tablet w-p:text-6 w-t:text-10 w-d:text-10">{ overlayCardsSection?.title }</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mb-12 w-t:mb-6 w-p:mb-6">
          <OfertaEducativaWrapper data={{...overlayCardsSection}} classNames="opacity-80 w-d:mb-8"/>
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="col-span-8">
          <BannerPortalverseWrapper data={{...banner1, height: "auto"}} onClick={ () => router.push(`${banner1?.ctaUrl}`)}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden">
          <BannerPortalverseWrapper data={{...banner1, height: "auto"}} onClick={ () => router.push(`${banner1?.ctaUrl}`)}/>
        </div>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ">
          {/* Use data from JSON */}
          {/* {
            statisticsCardsSection?.cards?.map((item, i:number) => <section key={`section-numbers-${i}`}>
              <NumbersPortalverseWrapper data={item}/>
            </section>)
          } */}
          {
            sections.numbers.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
              <NumbersPortalverse data={item} classNames="p-2 justify-center"/>
            </section>)
          }
        </div>
      </ContentLayout>
      <ContentLayout>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:mt-[72px] mt-[72px]">
          <p className="ac-type-h3-bold-solid-poppins-desktop w-p:ac-type-h3-bold-solid-poppins-tabmob">{ blogListConfig?.title }</p>
        </section>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12 w-t:mb-6 w-p:mb-6">
          {
            blogPostsData?.blogPosts?.data.map((blogPost, i:number) => <section key={`section-blog-${i}`}>
             <BlogPostCardWrapper data={blogPost} onClick={() => router.push(`/voz-uane/blog/${blogPost?.attributes?.slug}`)}/>
            </section>)
          }
        </section>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-p:hidden gap-6 my-6">
        <ContentInsideLayout classNames="gap-6">
        <div className="w-t:col-span-8 w-p:col-span-4">
          <BannerPortalverseWrapper data={{...banner2, height: "auto"}} onClick={ () => router.push(`${banner2?.ctaUrl}`)}/>
        </div>
        </ContentInsideLayout>
      </ContentFullLayout>
      <ContentLayout classNames="w-t:hidden my-6">
        <div className="col-span-12 w-p:col-span-4">
          <BannerPortalverseWrapper data={{...banner2, height: "auto"}} onClick={ () => router.push(`${banner2?.ctaUrl}`)}/>
        </div>
      </ContentLayout>
      <ContentLayout>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-8">
            <OpenForm pathThankyou={`/thank-you`} image={{ src: "https://assets.staging.bedu.org/UTEG/admisiones_pedir_informacion_avatar_6738c707b5.jpg", alt:"image-person" }} />
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

  const listconfig = findSection<ListconfigSection>(
    strapiSections,
    "ComponentSectionsListconfig"
  );

  const blogPostsData = await getBlogPosts({
    pageSize: listconfig?.maxentries,
    sort:
      listconfig?.sortdate === "latest"
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

export default Home;