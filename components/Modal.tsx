import { createRef, FC, memo, useEffect } from "react"
import ModalData from "@/types/Modal.types"

const Modal: FC<ModalData> = memo(({data, isShow, onBtn, onClose}: ModalData) => {
  const modalPortalverseRef = createRef();
  
  useEffect(() => {
    (modalPortalverseRef.current as any).data = {
      icon: data.icon || '',
      title: data.title || '',
      tagOnClose: data.tagOnClose || '',
    };
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    (modalPortalverseRef.current as any).isShow = isShow;
  }, [isShow]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!modalPortalverseRef.current) {
      (modalPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
      (modalPortalverseRef.current as any).removeEventListener('onClose', onClose, false);    
    }
    (modalPortalverseRef.current as any).addEventListener('onBtn', onBtn, false);
    (modalPortalverseRef.current as any).addEventListener('onClose', onClose, false);
  },[onBtn, onClose]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      if (!!modalPortalverseRef.current) {
        (modalPortalverseRef.current as any).removeEventListener('onBtn', onBtn, false);
        (modalPortalverseRef.current as any).removeEventListener('onClose', onClose, false);    
      } 
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-modal ref={modalPortalverseRef}></lottus-modal>
})

export default Modal