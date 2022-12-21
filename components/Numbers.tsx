import { createRef, FC, memo, useEffect } from "react"
import { NumbersData } from "@/types/Numbers.types"
import cn from "classnames"


const Numbers: FC<NumbersData> = memo(({ data, classNames }: NumbersData) => {
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
      shadowColor: data.shadowColor || false
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps
  
  return <>
  <div className={cn("", classNames, {"shadow-[-5px_5px_#00BEB4] rounded": data.shadowColor === true})}>
    <lottus-numbers-portalverse ref={numbersPortalverseRef}></lottus-numbers-portalverse>
  </div>
  </>
});

export default Numbers