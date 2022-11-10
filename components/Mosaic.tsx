import { MosaicData } from "@/types/Mosaic.types";
import { createRef, FC, memo, useEffect } from "react";

const Mosaic: FC<MosaicData> = memo(({data, onClick}: MosaicData) => {
  const mosaicPortalverseRef = createRef();

  useEffect(() => {
    (mosaicPortalverseRef.current as any).data = {
      images: data.images || [
        {
          id: '',
          image: '',
          icon: '',
        },
      ],
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps 

  useEffect(() => {
    (mosaicPortalverseRef.current as any).addEventListener('onClick', onClick);
  }, []);

  return <lottus-mosaic-portalverse ref={mosaicPortalverseRef}></lottus-mosaic-portalverse>
})

export default Mosaic