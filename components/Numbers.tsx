import { createRef, FC, memo, useEffect } from "react"
import { NumbersData } from "@/types/Numbers.types"

const Numbers: FC<NumbersData> = memo(({ data }: NumbersData) => {
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
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps
  
  return <lottus-numbers-portalverse ref={numbersPortalverseRef}></lottus-numbers-portalverse>
});

export default Numbers