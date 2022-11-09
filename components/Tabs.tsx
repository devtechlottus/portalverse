import { createRef, FC, memo, useEffect } from "react";
import TabsComponentData from "@/types/Tabs.types"

const Tabs: FC<TabsComponentData> = memo(({data, tabIndex}: TabsComponentData) => {
  const tabsPortalverseRef = createRef();

  useEffect(() => {
    (tabsPortalverseRef.current as any).data = {
      items: data.items || [],
      size: data.size || '',
    }
    
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (tabsPortalverseRef.current as any).addEventListener('tabIndex', tabIndex);
  }, []);

  return <lottus-tabs-portalverse ref={tabsPortalverseRef}></lottus-tabs-portalverse>
});

export default Tabs;