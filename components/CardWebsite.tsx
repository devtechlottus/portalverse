import { createRef, FC, memo, useEffect, useState } from "react"
import CardWebsiteComponentData from "@/types/CardWebsite.types"
import Link from "@/components/Link";
import { LinkIconsInit, LinkInit } from "@/components/fixture";
import RichtText from "./Richtext";

const CardWebsite: FC<CardWebsiteComponentData> = memo(({ data, onClick }: CardWebsiteComponentData) => {
  const cardWebsitePortalverseRef = createRef();

  const [ linkTextData, setLinkTextData ] = useState({...LinkInit});
  const [ linkLinkData, setLinkLinkData ] = useState({...LinkInit});

  const [content, setContent] = useState('')

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
      linkIcon: data.linkText || {...LinkInit},
      linkText: data.linkIcon || {...LinkInit},
      wrapper: data.wrapper || false
    };
    setLinkLinkData({...linkLinkData, ...data.linkIcon});
    setLinkTextData({...linkTextData, ...data.linkIcon});
    setContent(`${data.subtitle || ''}\n${data.title || ''}\n${data.text || ''}`)
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let observerRef: any = null;
    if (!!cardWebsitePortalverseRef.current) {
      observerRef = cardWebsitePortalverseRef.current;
      (cardWebsitePortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
    (cardWebsitePortalverseRef.current as any).addEventListener('onClick', onClick, false);
    return () => {
      if (!!observerRef) {
        (observerRef as any).removeEventListener('onClick', onClick, false);
      }
    }
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-card-website-portalverse ref={cardWebsitePortalverseRef}>
    <div slot="areaCardWebsiteLink">
      <Link data={linkTextData} onClick={onClick} />
    </div>
    <div slot="areaCardWebsiteLinkIcon">
      <Link data={linkTextData} onClick={onClick} />
    </div>
    <div slot="areaContentCardWebsite">
      <RichtText data={{content}}/>
    </div>
  </lottus-card-website-portalverse>
});

export default CardWebsite;