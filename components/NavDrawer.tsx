import NavDrawerData from "@/types/NavDrawer.types";
import { createRef, FC, memo, useEffect } from "react";


const NavDrawer: FC<NavDrawerData> = memo(({data, onClick, onText, onTextSingle}: NavDrawerData) => {
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
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (navDrawerPortalverseRef.current as any).addEventListener('onClick', onClick);
    (navDrawerPortalverseRef.current as any).addEventListener('onText', onText);
    (navDrawerPortalverseRef.current as any).addEventListener('onTextSingle', onTextSingle);
  }, [])
  return <lottus-navdrawer-portalverse ref={navDrawerPortalverseRef}></lottus-navdrawer-portalverse>
});

export default NavDrawer;