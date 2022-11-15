import { createRef, FC, useEffect, useState } from "react"
import CarouselPortalverseComponentData from "@/types/Carousel.types"
import CardWebsite from "@/components/CardWebsite";

const Carousel: FC<CarouselPortalverseComponentData> = ({ data, }: CarouselPortalverseComponentData) => {
  const carouselRef = createRef();

  const [slidesData, setSlidesData] = useState<any[]>([]);

  useEffect(() => {
    (carouselRef.current as any).data = {
      iconleft: data.iconleft || 'arrow_back_ios',
      iconright: data.iconright || 'arrow_forward_ios',
      size: data.size || '',
      slides: [...data.slides] || [],
      wrapper: false
    };

    setSlidesData([...data.slides]);
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-carousel-portalverse ref={carouselRef}>
    {/* <div className="flex" slot='areaCarouselCardDesk'> */}
      {/* {
        slidesData.map((slide: any, i: number) => <div slot={`areaCarouselCardDesk-${i}`} key={`card-website-${i}`}><CardWebsite  data={slide} /></div>)
      } */}
    {/* </div>
    <div className="flex" slot='areaCarouselCardMobile'> */}
      {/* {
        slidesData.map((slide: any, i: number) => <div slot={`areaCarouselCardMobile-${i}`} key={`card-website-${i}`}><CardWebsite data={slide} /></div>)
      } */}
    {/* </div> */}
  </lottus-carousel-portalverse>
};

export default Carousel