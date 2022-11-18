import { useState } from "react"
import IconComponent from "@/components/Icon"
import Image from "@/components/Image"
import Map from "@/components/Map"
import ContentLayout from "@/layouts/Content.layout"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import LinkContactTarget from "@/components/LinkContactTarget"
import Modal from "@/components/Modal"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import BannerPortalverse from "@/components/BannerPortalverse"
import RichtText from "@/components/Richtext"
import Youtube from "@/components/Youtube"
import NextPageWithLayout from "@/types/Layout.types"

const ThankYouPage: NextPageWithLayout = ({ data }: any) => {

  // Modal functionality begin
  const [isShow, setIsShow] = useState(false);
  const handleVisibilityModal = () => {
    if (isShow) {
      setCoordsMap(null);
      setInfoMap("");
    }
    setIsShow(!isShow);
  };
  // Modal functionality end

  const [coordsMap, setCoordsMap] = useState<any>(null);
  const [infoMap, setInfoMap] = useState<string>("");

  const handleOpenModal = (coords: any, title: string) => {
    setCoordsMap(coords);
    setInfoMap(title);
    handleVisibilityModal();
  };

  return <HeaderFooterLayout>
    <ContentFullLayout classNames="">
      <ContentInsideLayout>
        <div className="col-span-5">
          <RichtText data={ data.text } />
        </div>
        <div className="col-span-7">
          <Youtube data={ data.video} />
        </div>
      </ContentInsideLayout>
    </ContentFullLayout>
  </HeaderFooterLayout>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        text: {content: `
        ## At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;
      
        
          > Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est.
        
        [Egone quaeris, inquit, quid sentiam?](http://loripsum.net/) [Immo videri fortasse.](http://loripsum.net/) Huius, Lyco, oratione locuples, rebus ipsis ielunior. Quid est, quod ab ea absolvi et perfici debeat? **Equidem e Cn.** Tria genera bonorum; Tu quidem reddes;
        
      
      `},
        video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} }
      }
    }
  }
}

export default ThankYouPage