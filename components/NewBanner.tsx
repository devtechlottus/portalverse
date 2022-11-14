import { createRef, FC, memo, useEffect } from "react"
import NewBannerData from "@/types/NewBanner.types"
import { ButtonInit } from "@/components/fixture"

const NewBanner: FC<NewBannerData> = memo(({data, onBtn}: NewBannerData) => {
  const newBannerPortalverseRef = createRef();

  useEffect(() => {
    (newBannerPortalverseRef.current as any).data = {
      image: data.image || {
        desktop: '',
        mobile: '',
      },
      title: data.title || '',
      text: data.text || '',
      contentCenter: data.contentCenter || false,
      contentLeft: data.contentLeft || false,
      action: data.action || {
        ...ButtonInit,
        title: 'Conocer más',
      },
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps 

  useEffect(() => {
    if (!!newBannerPortalverseRef.current) {
      (newBannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
    }
    (newBannerPortalverseRef.current as any).addEventListener('onBtn', onBtn, false);
  }, [onBtn]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    return () => {
      if (!!newBannerPortalverseRef.current) {
        (newBannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-new-banner-portalverse ref={newBannerPortalverseRef}></lottus-new-banner-portalverse>


})

export default NewBanner