import { createRef, FC, memo, useEffect } from "react"
import NavDrawerData from "@/types/NavDrawer.types"

const NavDrawer: FC<NavDrawerData> = memo(({ data, onClick, onText, onTextSingle }: NavDrawerData) => {
  const navDrawerPortalverseRef = createRef();
  
  useEffect(() => {
    (navDrawerPortalverseRef.current as any).data = {
      text: data.text || '',
      iconselected: data.iconselected || false,
      linkselected: data.linkselected || false,
      isleft: data.isleft || false,
      singleaction: data.singleaction || false,
      morecontent: data.morecontent || true,
      activesingle: data.activesingle || false,
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps 

  useEffect(() => {
    let observerRef: any = null;
    if (!!navDrawerPortalverseRef.current) {
      observerRef = navDrawerPortalverseRef.current;
      (navDrawerPortalverseRef.current as any).removeEventListener('onClick', onClick, false);
      (navDrawerPortalverseRef.current as any).removeEventListener('onText', onText, false);
      (navDrawerPortalverseRef.current as any).removeEventListener('onTextSingle', onTextSingle, false);
    }
    (navDrawerPortalverseRef.current as any).addEventListener('onClick', onClick, false);
    (navDrawerPortalverseRef.current as any).addEventListener('onText', onText, false);
    (navDrawerPortalverseRef.current as any).addEventListener('onTextSingle', onTextSingle, false);
    () => {
      if (!!observerRef) {
        (observerRef as any).removeEventListener('onClick', onClick, false);
        (observerRef as any).removeEventListener('onText', onText, false);
        (observerRef as any).removeEventListener('onTextSingle', onTextSingle, false);
      }
    }
  }, [onClick, onText, onTextSingle]);// eslint-disable-line react-hooks/exhaustive-deps 

  return <lottus-navdrawer-portalverse ref={navDrawerPortalverseRef}></lottus-navdrawer-portalverse>
});

export default NavDrawer;