import { createRef, FC, memo, useEffect } from "react"
import { LinkData } from "@/types/Link.types"

const Link: FC<LinkData> = memo(({ data, onClick }: LinkData) => {
  const linkRef = createRef();
  
  useEffect(() => {
    (linkRef.current as any).data = {
      text: data.text || '',
      size: data.size || '',
      isBold: data.isBold || false,
      disabled: data.disabled || false,
      id:data.id || '',
      icon: data.icon || '',
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!linkRef.current) {
      (linkRef.current as any).removeEventListener('onClick', onClick, false);
    }
    (linkRef.current as any).addEventListener('onClick', onClick, false);
  }, [onClick]);// eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    return () => {
      if (!!linkRef.current) {
        (linkRef.current as any).removeEventListener('onClick', onClick, false);
      }
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-link ref={linkRef}></lottus-link>
});
  
export default Link