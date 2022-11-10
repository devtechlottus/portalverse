import NewsletterData from "@/types/Newsletter.types";
import { createRef, FC, memo, useEffect } from "react";

const Newsletter: FC<NewsletterData> = memo(({data, onForm, hasErrorEmail, errorMessageEmail}: NewsletterData) => {
  const newsletterPortalverseRef = createRef();

  useEffect(() => {
    (newsletterPortalverseRef.current as any).data = {
      type: data.type || '',
      typeSearch: data.typeSearch || '',
      alphabetical: data.alphabetical || false,
      placeholder: data.placeholder || '',
      autocomplete: data.autocomplete || '',
      upperCase: data.upperCase || false,
      icon: data.icon || '',
      size: data.size || '',
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  //useEffect(() => {
  //  (newsletterPortalverseRef.current as any).email = email;
  //}, [email]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (newsletterPortalverseRef.current as any).hasErrorEmail = hasErrorEmail;
    (newsletterPortalverseRef.current as any).errorMessageEmail = errorMessageEmail;
  }, [hasErrorEmail, errorMessageEmail]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (newsletterPortalverseRef.current as any).addEventListener('onForm', onForm);
  }, [])

  return <lottus-newsletter ref={newsletterPortalverseRef}></lottus-newsletter>

})

export default Newsletter