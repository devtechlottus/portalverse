import { createRef, FC, memo, useEffect } from "react"
import { FeedbackData } from "@/types/Feedback.types"

const Feedback: FC<FeedbackData> = memo(({data, onRight}: FeedbackData) => {
  const feedbackPortalverseRef = createRef();

  useEffect(() => {
    (feedbackPortalverseRef.current as any).data = {
      left: data.left || {
        name: '',
        status: '',
      },
      right: data.right || {
        name: '',
      },
      type: data.type || '',
      isTextEvent: data.isTextEvent || false,
      textEvent: data.textEvent || '',
      tagOnRight: data.tagOnRight || '',
    }
  }, [data]);

  useEffect(() => {
    (feedbackPortalverseRef.current as any).addEventListener('onRight', onRight);
  }, []);

  return (
    <>
  <lottus-feedback ref={feedbackPortalverseRef}>
    
  </lottus-feedback>

    </>
  )
    
})

export default Feedback