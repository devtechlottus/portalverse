import { createRef, FC, memo, useEffect, useState } from "react"
import BannerComponentData from "@/types/Banner.types"
import Button from "./Button/Button";
import { config } from "process";
import { ButtonInit } from "./fixture";

const Banner: FC<BannerComponentData> = memo(({ data, onBtn }: BannerComponentData) => {
  const bannerPortalverseRef = createRef();

  const [configButton, setConfigButton] = useState({});

  useEffect(() => {
    (bannerPortalverseRef.current as any).data = {
      title: data.title || '',
      subtitle: data.subtitle || '',
      state: data.state || '',
      size: data.size || '',
      middle: data.middle || false,
      center: data.center || false,
      bottom: data.bottom || false,
      left: data.left || false,
      urlImage: data.urlImage || {
        mobile: '',
        desktop: '',
      },
      overlay: data.overlay || '',
      height: data.height || '',
      action: data.action || {},
      wrapper: data.wrapper || false
      };

    setConfigButton((state) => {
      return {...state, ...data.action}
    })
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!bannerPortalverseRef.current) {
      (bannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn);
    }
    (bannerPortalverseRef.current as any).addEventListener('onBtn', onBtn);
    () => {
      (bannerPortalverseRef.current as any).removeEventListener('onBtn', onBtn);
    }
  }, [onBtn]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-banner-portalverse ref={bannerPortalverseRef}>
    <div slot="areaBannerButtonDesk" >
      <Button data={{...data.action}}  />
    </div>
    <div slot="areaBannerButtonMobile" >
      <Button data={{...data.action, isExpand: true}}  />
    </div>
  </lottus-banner-portalverse>
});

export default Banner