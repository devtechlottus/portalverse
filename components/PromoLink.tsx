import { createRef, FC, memo, useEffect } from "react"
import { PromoLinkData } from "@/types/Promolink.types"
import cn from "classnames"

const PromoLink: FC<PromoLinkData> = memo(({ data, classNames,   onClick } : PromoLinkData) => {
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
      shadowColor: data.shadowColor || false
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let observerRef: any = null;
    if (!!promoLinkPortalverseRef.current) {
      observerRef = promoLinkPortalverseRef.current;
      (promoLinkPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
    }
    (promoLinkPortalverseRef.current as any).addEventListener('onClick', onClick, false);
    () => {
      if (!!observerRef) {
        (observerRef as any).removeEventListener('onClick', onClick, false);
      }
    }
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <div className={cn("", classNames, {"shadow-[-5px_5px_#00BEB4] rounded": data.shadowColor === true})}>
      <lottus-promo-link-portalverse ref={promoLinkPortalverseRef}></lottus-promo-link-portalverse>
    </div>
  </>
})

export default PromoLink;