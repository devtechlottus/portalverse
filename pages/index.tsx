import Head from "next/head"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import { getHomePageData } from "@/utils/getHomePageData"
import CustomScript from "@/components/CustomScript"
import ContentGenerator from "@/utils/ContentGenerator"
import { useRouter } from "next/router"


const Home: NextPageWithLayout = ({ data: { sections, meta } }: any) => {

  const router = useRouter();

 
  const gtag: { script: string, ID: string } ={
    ID:'google-tag-manager',
    script: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NGBCMHM');`,
  }
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

    <CustomScript {...gtag} />
    <CustomScript {...hotjar} />
    <Head>
      <title>{meta.title}</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={false}>
      <div className="flex flex-col w-p:space-y-12 w-t:space-y-12 w-d:space-y-18 w-d:mt-18">
        {sections?.length > 0 ? (
          <ContentGenerator blocks={sections} />
        ) : null}
      </div>
    </HeaderFooterLayout>
  </>
}

export async function getStaticProps(context: any) {
  const { meta } = await getDataPageFromJSON('home.json');

  const homePageData = await getHomePageData();
  const sections = homePageData?.homePage?.data?.attributes?.sections;

  return {
    props: {
      data: {
        sections,
        meta,
        strapi: { sections },
      },
    },
  };
}

export default Home;