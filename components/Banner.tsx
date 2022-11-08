import BannerComponentData from "@/types/Banner.types";
import { createRef, FC, memo, useEffect } from "react";
import Button from "./Button/Button";
import { ButtonInit } from "./fixture";

const Banner: FC<BannerComponentData> = memo(({data, onBtn}: BannerComponentData) => {
  const bannerPortalverseRef = createRef();

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
      action: data.action || {}
    };
  }, [data]);

  useEffect(() => {
    (bannerPortalverseRef.current as any).addEventListener('onBtn', onBtn);
  }, []);

  return (
    <>
    <lottus-banner-portalverse ref={bannerPortalverseRef}>
    </lottus-banner-portalverse>
    </>
  )
});

export default Banner;