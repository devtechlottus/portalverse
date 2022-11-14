import { createRef, FC, memo, useEffect } from "react"
import ModalIframeData from "@/types/ModalIframe"

const ModalIframe: FC<ModalIframeData> = memo(({data, onClose}: ModalIframeData) => {
  const modalIframePortalverseRef = createRef();

  useEffect(() => {
    (modalIframePortalverseRef.current as any).data = {
      title: data.title || '',
      icon: data.icon || '',
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!modalIframePortalverseRef.current) {
      (modalIframePortalverseRef.current as any).removeEventListener('onClose', onClose, false);
    }
    (modalIframePortalverseRef.current as any).addEventListener('onClose', onClose, false);
  }, [onClose]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    return () => {
      if (!!modalIframePortalverseRef.current) {
        (modalIframePortalverseRef.current as any).removeEventListener('onClose', onClose, false);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-modal-iframe-portalverse ref={modalIframePortalverseRef}></lottus-modal-iframe-portalverse>
})

export default ModalIframe