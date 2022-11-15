import { createRef, FC, memo, useEffect, useState } from "react"
import NewBannerData from "@/types/NewBanner.types"
import { ButtonInit } from "@/components/fixture"
import Button from "@/components/Button";

const NewBanner: FC<NewBannerData> = memo(({data, onBtn}: NewBannerData) => {
  const newBannerPortalverseRef = createRef();

  const [actionInfo, setActionInfo] = useState({
    ...ButtonInit,
    title: 'Conocer más',
    id: "soybutton"
  });

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
      wrapper: true,
    };

    setActionInfo({
      ...actionInfo,
      ...data.action,
    });
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

  return <lottus-newbanner-portalverse ref={newBannerPortalverseRef}>
    <div slot="areaNewBannerButton">
      <Button data={actionInfo} />
    </div>
  </lottus-newbanner-portalverse>

})

export default NewBanner