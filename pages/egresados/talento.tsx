import Head from "next/head"
import { useState } from "react"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import CardWebsite from "@/components/CardWebsite"
import NewBanner from "@/components/NewBanner"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Modal from "@/components/Modal"
import Youtube from "@/components/Youtube"
import { YoutubeOptions } from "@/types/Youtube.types"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const ThankYouPage: NextPageWithLayout = ({ sections, meta }: any) => {

  const [ youtubeConfig, setYoutubeConfig ] = useState<YoutubeOptions>({
    id: '',
    type: 'single',
    controls: true,
  });

  // Modal functionality begin
  const [isShow, setIsShow] = useState(false);
  const handleVisibilityModal = (action = 'open') => {
    setIsShow(!isShow);
    if (action === 'close') {
      setYoutubeConfig({ ...youtubeConfig, id: '' });
    }
  };
  // Modal functionality end

  const handleClickTalent = (id: string) => {
    setYoutubeConfig({ ...youtubeConfig, id });
    handleVisibilityModal()
  }

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <Modal isShow={isShow} onClose={() => handleVisibilityModal('close')} data={{icon: 'close', title: 'Video de egresado', tagOnClose: 'testOnClose', wrapper: true,}}>
          <Youtube data={{options: {...youtubeConfig}, dimensions: { height: "383px" }}} />
        </Modal>
        <div className="w-d:col-span-8 w-t:col-span-7 w-p:col-span-4 w-d:mb-12 w-t:mb-6 w-p:mb-6">
          <h1 className="text-13 w-t:text-8.25 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%] mb-5">{ sections.head.title }</h1>
          <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] ">{ sections.head.description }</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
           sections.experiencias.cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
              <CardWebsite data={item} onClick={() => handleClickTalent(item.video)} />
            </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-t:hidden w-p:hidden my-[72px]">
          <NewBanner data={ sections.aplica.banner } />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="w-d:hidden w-t:mt-[65px] w-t:mb-[41px] w-p:my-12">
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <NewBanner data={ sections.aplica.banner } />
        </div>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { sections, meta } = await getDataPageFromJSON('egresados-talento.json');

  return {
    props: { sections, meta }
  }
}

export default ThankYouPage