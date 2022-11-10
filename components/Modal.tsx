import { createRef, FC, memo, useEffect } from "react"
import ModalData from "@/types/Modal.types"

const Modal: FC<ModalData> = memo(({data, onBtn, onClose}: ModalData) => {
  const modalPortalverseRef = createRef();
  
  useEffect(() => {
    (modalPortalverseRef.current as any).data = {
      icon: data.icon || '',
      title: data.title || '',
      tagOnClose: data.tagOnClose || '',
    } 
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (modalPortalverseRef.current as any).addEventListener('onBtn', onBtn);
    (modalPortalverseRef.current as any).addEventListener('onClose', onClose);
  },[]);

  return <lottus-modal ref={modalPortalverseRef}></lottus-modal>
})

export default Modal