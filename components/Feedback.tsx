import { createRef, FC, memo, useEffect } from "react"
import { FeedbackData } from "@/types/Feedback.types"

const Feedback: FC<FeedbackData> = memo(({ data, onRight }: FeedbackData) => {
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
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!!feedbackPortalverseRef.current) {
      (feedbackPortalverseRef.current as any).removeEventListener('onRight', onRight, false);
    }
    (feedbackPortalverseRef.current as any).addEventListener('onRight', onRight, false);
  }, [onRight]);// eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    return () => {
      if (!!feedbackPortalverseRef.current) {
        (feedbackPortalverseRef.current as any).removeEventListener('onRight', onRight, false);
      }
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-feedback ref={feedbackPortalverseRef}></lottus-feedback>  
});

export default Feedback