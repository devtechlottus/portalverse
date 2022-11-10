import { CustomHeadData } from "@/types/CustomHead.types"
import { createRef, FC, memo, useEffect } from "react"

const CustomHead: FC<CustomHeadData> = memo(({data}: CustomHeadData) => {
  const customHeadPortalverseRef = createRef();
  
  useEffect(() => {
    (customHeadPortalverseRef.current as any).data = {
      id:  data.id ||'',
      text: data.text || 'Busca tu nivel educativo',
      type: data.type || '',
      color: data.color || 'gray',
      bgcolor: data.bgcolor || '',
    }
  }, [data]);

  return <lottus-custom-head-portalverse ref={customHeadPortalverseRef}></lottus-custom-head-portalverse>
})

export default CustomHead