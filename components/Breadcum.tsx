import { createRef, FC, memo, useEffect } from "react"
import { BreadcumData } from "@/types/Breadcum.types"

const Breadcum: FC<BreadcumData> = memo(({ data, onItem, onBack }: BreadcumData) => {
  const breadcumPortalverseRef = createRef();

  useEffect(() => {
      (breadcumPortalverseRef.current as any).data = {
        tagOnItem: data.tagOnItem || '',
        tagOnBack: data.tagOnBack ||'',
        textItems: data.textItems || [
          {
            value: '',
            text: '',
          },
        ],
        icon: data.icon || '',
        textColor: data.textColor || '',
      }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!breadcumPortalverseRef.current) {
      (breadcumPortalverseRef.current as any).removeEventListener('onItem', onItem);
      (breadcumPortalverseRef.current as any).removeEventListener('onBack', onBack);
    }
    (breadcumPortalverseRef.current as any).addEventListener('onItem', onItem);
    (breadcumPortalverseRef.current as any).addEventListener('onBack', onBack);
    () => {
      (breadcumPortalverseRef.current as any).removeEventListener('onItem', onItem);
      (breadcumPortalverseRef.current as any).removeEventListener('onBack', onBack);
    }
  }, [onItem, onBack]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-breadcrumb ref={breadcumPortalverseRef}></lottus-breadcrumb>
});

export default Breadcum;