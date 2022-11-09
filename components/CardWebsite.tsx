import CardWebsiteComponentData from "@/types/CardWebsite.types";
import { createRef, FC, memo, useEffect } from "react";
import LinkIcons from "./LinkLottus";


const CardWebsite: FC<CardWebsiteComponentData> = memo(({data, onClick,}: CardWebsiteComponentData) => {
    const cardWebsitePortalverseRef = createRef();

    useEffect(()=> {
      (cardWebsitePortalverseRef.current as any).data ={
        id: data.id || '',
        urlImage: data.urlImage || '',
        subtitle: data.subtitle || '',
        title: data.title || '',
        text: data.text || '',
        border: data.border || false,
        allContent: data.allContent || false,
        height: data.height || '',
        isShowCardWebsiteContent: data.isShowCardWebsiteContent || false,
        background: data.background || false,
        type: data.type || '',
        link: data.link || false,
        }
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      (cardWebsitePortalverseRef.current as any).addEventListener('onClick', onClick)

    }, [])

    return <lottus-card-website-portalverse ref={cardWebsitePortalverseRef}>
    </lottus-card-website-portalverse>
})

export default CardWebsite;