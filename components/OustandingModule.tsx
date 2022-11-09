import { OustandingModuleData } from "@/types/OustandingModule.types";
import { createRef, FC, memo, useEffect } from "react";


const OustandingModule: FC<OustandingModuleData> = memo(({data} : OustandingModuleData) => {
    const oustandingModulePortalverseRef = createRef();

    useEffect(() => {
     (oustandingModulePortalverseRef.current as any).data = {
        image: data.image || {
            mobile: '',
            desktop:
              '',
          },
          title: data.title || '',
          text: data.text || '',
          backgroundColor: data.backgroundColor || '',
     }
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    return <lottus-outstanding-module-portalverse ref={oustandingModulePortalverseRef}></lottus-outstanding-module-portalverse>
});

export default OustandingModule;