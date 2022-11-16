import { createRef, FC, memo, useEffect } from "react"
import TabsComponentData from "@/types/Tabs.types"

const Tabs: FC<TabsComponentData> = memo(({data, tabIndex}: TabsComponentData) => {
  const tabsPortalverseRef = createRef();

  useEffect(() => {
    (tabsPortalverseRef.current as any).data = {
      items: data.items || [],
      size: data.size || '',
    }
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let observerRef: any = null;
    if (!!tabsPortalverseRef.current) {
      observerRef = tabsPortalverseRef.current;
      (tabsPortalverseRef.current as any).removeEventListener('tabIndex', tabIndex, false);
    }
    (tabsPortalverseRef.current as any).addEventListener('tabIndex', tabIndex, false);
    return () => {
      if(!!observerRef){
        (observerRef as any).removeEventListener('onClick', tabIndex, false);
      }
    }
  }, [tabIndex]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-tabs-portalverse ref={tabsPortalverseRef}></lottus-tabs-portalverse>
});

export default Tabs