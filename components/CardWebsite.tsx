import { createRef, FC, memo, useEffect } from "react";
import CardWebsiteComponentData from "@/types/CardWebsite.types";

const CardWebsite: FC<CardWebsiteComponentData> = memo(({data, onClick,}: CardWebsiteComponentData) => {
  const cardWebsitePortalverseRef = createRef();

  useEffect(()=> {
    (cardWebsitePortalverseRef.current as any).data ={
      id: data.id || '',
      urlImage: data.urlImage || '',
      subtitle: data.subtitle || '',
      title: data.title || '',
      text: data.text || '',
      border: data.border || true,
      allContent: data.allContent || true,
      height: data.height || '',
      isShowCardWebsiteContent: data.isShowCardWebsiteContent || false,
      background: data.background || true,
      type: data.type || '',
      link: data.link || true,
      }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!cardWebsitePortalverseRef.current) {
      (cardWebsitePortalverseRef.current as any).removeEventListener('onClick', onClick);
    }
    (cardWebsitePortalverseRef.current as any).addEventListener('onClick', onClick);
    () => {
      (cardWebsitePortalverseRef.current as any).removeEventListener('onClick', onClick);
    }
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-card-website-portalverse ref={cardWebsitePortalverseRef}></lottus-card-website-portalverse>
})

export default CardWebsite;