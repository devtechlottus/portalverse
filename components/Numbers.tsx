import { NumbersData } from "@/types/Numbers.types";
import { createRef, FC, memo, useEffect } from "react";

const Numbers: FC<NumbersData> = memo(({data}) => {
  const numbersPortalverseRef = createRef();

  useEffect(() => {
    (numbersPortalverseRef.current as any).data = {
      icon: data.icon || '',
      prefix: data.prefix || '',
      number: data.number || '',
      suffix: data.suffix || '',
      title: data.title || '',
      body: data.body || '',
      container: data.container || false,
    }
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps
  
  return <lottus-numbers-portalverse ref={numbersPortalverseRef}></lottus-numbers-portalverse>
})

export default Numbers;