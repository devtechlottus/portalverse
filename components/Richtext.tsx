import { createRef, FC, memo, useEffect } from "react"
import RichTextComponentData from "@/types/RichText.types"

const RichtText: FC<RichTextComponentData> = memo(({ data }: RichTextComponentData) => {
  const richTextRef = createRef();

  useEffect(() => {
    const { content } = data;
    (richTextRef.current as any).data = content;
  }, [data, richTextRef]);// eslint-disable-line react-hooks/exhaustive-deps
  
  return <lottus-rich-text ref={richTextRef}></lottus-rich-text>
});

export default RichtText