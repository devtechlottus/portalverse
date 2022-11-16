import { createRef, FC, useEffect } from "react"
import SliderComponentData from "@/types/Slider.types"

const Slider: FC<SliderComponentData> = ({ data }: SliderComponentData) => {
  const sliderRef = createRef();

  useEffect(() => {
    (sliderRef.current as any).data = {
      width: data.width || '100%',
      height: data.height || '100%',
      slides: data.slides || [],
      iconleft: data.iconleft || '',
      iconright: data.iconright || '',
      wrapper: true
    };
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-slider-portalverse ref={sliderRef}></lottus-slider-portalverse>
};

export default Slider