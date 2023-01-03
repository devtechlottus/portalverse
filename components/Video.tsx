import { FC, useEffect, useState } from "react"
import VideoComponentData from "@/types/Video.types"
import Youtube from "./Youtube"


const Video: FC<VideoComponentData> = ({ dimensions, data }: VideoComponentData) => {
    const h =dimensions

    const [ changeDetect, setChangeDetect ] = useState<number>(0);
  
    const [ confVideo, setConfVideo ] = useState<any>({})
    
    const detectResize = () => {
      setChangeDetect((prevState: number) => prevState + 1);
    }
  
    useEffect(() => {
      detectResize();
      window.addEventListener('resize', detectResize);
      return () => window.removeEventListener('resize', detectResize);
    }, []);
  
    useEffect(() => {
      const { outerWidth } = window;
      let newH = h[0];
      if (outerWidth < 1024 && outerWidth >= 600) {
        newH = h[1];
      }
      if ( outerWidth < 600) {
        newH = h[2];
      }
      const newConf = {...data, dimensions: {...data.dimensions, height: newH}}
      setConfVideo({...newConf})
    }, [changeDetect]);// eslint-disable-line react-hooks/exhaustive-deps
    return <div >
      <Youtube data={ confVideo }/>
    </div>
    }
  
  export default Video

