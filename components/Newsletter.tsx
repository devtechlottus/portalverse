import { createRef, FC, memo, useEffect } from "react"
import NewsletterData from "@/types/Newsletter.types"

const Newsletter: FC<NewsletterData> = memo(({ data, hasErrorEmail, errorMessageEmail, onForm }: NewsletterData) => {
  const newsletterPortalverseRef = createRef();

  useEffect(() => {
    console.log("data", data);
    (newsletterPortalverseRef.current as any).email = "";
    (newsletterPortalverseRef.current as any).valueEmail = "";
    (newsletterPortalverseRef.current as any).isInputs = false;
    // (newsletterPortalverseRef.current as any).data = {
    //   type: data.type || '',
    //   typeSearch: data.typeSearch || '',
    //   alphabetical: data.alphabetical || false,
    //   placeholder: data.placeholder || '',
    //   autocomplete: data.autocomplete || '',
    //   upperCase: data.upperCase || false,
    //   icon: data.icon || '',
    //   size: data.size || '',
    // };
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (newsletterPortalverseRef.current as any).hasErrorEmail = hasErrorEmail;
    (newsletterPortalverseRef.current as any).errorMessageEmail = errorMessageEmail;
  }, [hasErrorEmail, errorMessageEmail]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let observerRef: any = null;
    if (!!newsletterPortalverseRef.current) {
      observerRef = newsletterPortalverseRef.current;
      (newsletterPortalverseRef.current as any).removeEventListener('onForm', onForm, false);
    }
    (newsletterPortalverseRef.current as any).addEventListener('onForm', onForm, false);
    return () => {
      if (!!observerRef) {
        (observerRef as any).removeEventListener('onForm', onForm, false);
      }
    }
  }, [onForm]); // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-newsletter ref={newsletterPortalverseRef}></lottus-newsletter>
});

export default Newsletter