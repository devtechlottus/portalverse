import { createRef, FC, useEffect } from "react";
import RichTextComponentData from "@/types/RichText.types";

const RichtText: FC<RichTextComponentData> = ({ data }: RichTextComponentData) => {

  const richTextRef = createRef();

  useEffect(() => {
    const { content } = data;
    (richTextRef.current as any).data = content;
  }, [data, richTextRef])
  
  return <lottus-rich-text ref={richTextRef}></lottus-rich-text>
}

export default RichtText