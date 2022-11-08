import FooterComponentData from "@/types/Footer.types"
import { createRef, FC, memo, useEffect } from "react"

const Footer: FC<FooterComponentData> = memo(({data, onLinkMenu, onLink, onLinkPhone, onLinkIcon, onLinkDirectory, onLinkCopyright, onLinkPrivacy}: FooterComponentData) => {
  const footerPortalverseRef = createRef()
  const dataLinkPhone = {
    text: '00000000',
    isBold: true,
    size: 'large',
    iconFirst: 'phone',
    iconSecond: '',
    isUnderline: false,
    id: '123',
    disabled: false,
  }

  const dataLink = {
    text: 'Texto link g',
    isBold: true,
    size: 'large',
    iconFirst: '',
    iconSecond: 'arrow_forward_ios',
    isUnderline: false,
    id: '123',
    disabled: false,
  }
  const dataLinkText = {
    text: 'Texto link g',
    isBold: true,
    size: 'large',
    iconFirst: '',
    iconSecond: 'arrow_forward_ios',
    isUnderline: false,
    id: '123',
    disabled: false,
  }
  const dataLinkLottus = {
    text: '©Lottus Education 2022',
    isBold: false,
    size: 'small',
    icon: '',
    id: '123',
    disabled: false,
  }
  const dataLinkPrivacy = {
    text: 'Aviso de privacidad',
    isBold: false,
    size: 'small',
    icon: '',
    id: '123',
    disabled: false,
  }
  useEffect(() => {
    (footerPortalverseRef.current as any).data = {
      image: data.image || '',
      text: data.text || '',
      social: data.social || [],
      certificationsImg: data.certificationsImg || [],
      encabezados: data.encabezados || [],
      linkPhone: data.linkPhone || {
        ...dataLinkPhone,
      },
      link: data.link || {
        ...dataLink,
      },
      linkText: {
        ...dataLinkText,
      },
      copyrightText: data.copyrightText || '',
      linkLottus: {
        ...dataLinkLottus,
      },
      linkPrivacy: {
        ...dataLinkPrivacy,
      },
    }
  }, [data])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    (footerPortalverseRef.current as any). addEventListener('onLinkMenu', onLinkMenu);
    (footerPortalverseRef.current as any). addEventListener('onLink', onLink);
    (footerPortalverseRef.current as any). addEventListener('onLinkPhone', onLinkPhone);
    (footerPortalverseRef.current as any). addEventListener('onLinkIcon', onLinkIcon);
    (footerPortalverseRef.current as any). addEventListener('onLinkDirectory', onLinkDirectory);
    (footerPortalverseRef.current as any). addEventListener('onLinkCopyright', onLinkCopyright);
    (footerPortalverseRef.current as any). addEventListener('onLinkPrivacy', onLinkPrivacy);
  }, [])
  
  return <lottus-filter-footer-portalverse ref={footerPortalverseRef}></lottus-filter-footer-portalverse>
})
export default Footer