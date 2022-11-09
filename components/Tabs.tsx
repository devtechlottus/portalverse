import { createRef, FC, memo, useEffect } from "react";
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
    if (!!tabsPortalverseRef.current) {
      (tabsPortalverseRef.current as any).removeEventListener('tabIndex', tabIndex, false);
    }
    (tabsPortalverseRef.current as any).addEventListener('tabIndex', tabIndex, false);
    () => {
      (tabsPortalverseRef.current as any).removeEventListener('tabIndex', tabIndex, false);
    }
  }, [tabIndex]);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-tabs-portalverse ref={tabsPortalverseRef}></lottus-tabs-portalverse>
});

export default Tabs;