import { createRef, FC, memo, useEffect } from "react"
import { PromoLinkData } from "@/types/Promolink.types"

const PromoLink: FC<PromoLinkData> = memo(({ data, onClick } : PromoLinkData) => {
  const promoLinkPortalverseRef = createRef();

  useEffect(() => {
    (promoLinkPortalverseRef.current as any).data = {
      urlImage: data.urlImage || {
        mobile: '',
        desktop: '',
      },
      text: data.text || '',
      icon: data.icon || '',
      color: data.color || '',
      opacity: data.opacity || '',
      height: data.height || '',
      enable: data.enable || false,
      nobackground: data.nobackground || false,
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!promoLinkPortalverseRef.current) {
      (promoLinkPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
    (promoLinkPortalverseRef.current as any).addEventListener('onClick', onClick, false);
    () => {
      (promoLinkPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-promo-link-portalverse ref={promoLinkPortalverseRef}></lottus-promo-link-portalverse>
})

export default PromoLink;