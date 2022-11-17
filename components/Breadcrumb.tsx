import { createRef, FC, memo, useEffect } from "react"
import { BreadcumData } from "@/types/Breadcum.types"

const Breadcrumb: FC<BreadcumData> = memo(({ data, onItem, onBack }: BreadcumData) => {
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
    let observerRef: any = null;
    if (!!breadcumPortalverseRef.current) {
      observerRef = breadcumPortalverseRef.current;
      (breadcumPortalverseRef.current as any).removeEventListener('onItem', onItem, false);
      (breadcumPortalverseRef.current as any).removeEventListener('onBack', onBack, false);
    }
    (breadcumPortalverseRef.current as any).addEventListener('onItem', onItem, false);
    (breadcumPortalverseRef.current as any).addEventListener('onBack', onBack, false);
    return () => {
      if (!!observerRef) {
        (observerRef as any).removeEventListener('onItem', onItem, false);
        (observerRef as any).removeEventListener('onBack', onBack, false);
      }
    }
  }, [onItem, onBack]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-breadcrumb ref={breadcumPortalverseRef}></lottus-breadcrumb>
});

export default Breadcrumb;