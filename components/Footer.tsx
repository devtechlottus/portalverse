import { createRef, useEffect } from "react";

const Footer = (props: any) => {

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
  };

  const dataLink = {
    text: 'Texto link g',
    isBold: true,
    size: 'large',
    iconFirst: '',
    iconSecond: 'arrow_forward_ios',
    isUnderline: false,
    id: '123',
    disabled: false,
  };
  const dataLinkText = {
    text: 'Texto link g',
    isBold: true,
    size: 'large',
    iconFirst: '',
    iconSecond: 'arrow_forward_ios',
    isUnderline: false,
    id: '123',
    disabled: false,
  };
  const dataLinkLottus = {
    text: '©Lottus Education 2022',
    isBold: false,
    size: 'small',
    icon: '',
    id: '123',
    disabled: false,
  };
  const dataLinkPrivacy = {
    text: 'Aviso de privacidad',
    isBold: false,
    size: 'small',
    icon: '',
    id: '123',
    disabled: false,
  };

  const datafooterportalverse = {
    image:
      'data:image/png;base64,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',
    text: 'Suscríbete a nuestro newsletter',
    social: [
      'https://www.pngarts.com/files/16/FB-Icon-Facebook-Logo-Grey-Circle-PNG.png',
      'https://i.pinimg.com/474x/07/47/e6/0747e6515ba1571fac463d8347b76d9f.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHZRcn2P2LLjk4tUjpt4tW9vj4XQfpVKE4g&usqp=CAU',
      'https://cdn-icons-png.flaticon.com/512/1384/1384012.png',
      'https://w7.pngwing.com/pngs/269/635/png-transparent-tiktok-logo-icon.png',
    ],
    certificationsImg: [
      'https://images.vexels.com/media/users/3/141831/isolated/preview/cfc7d87575b1671aa844a4cf418b9d2c-certificado-redondeado-rojo.png',
      'https://static.vecteezy.com/system/resources/previews/002/586/589/non_2x/certified-badge-logos-for-certification-company-emblem-icon-template-vector.jpg',
      'https://seeklogo.com/images/C/certificado-iso-9001-logo-F246CCB55C-seeklogo.com.jpg',
    ],

    encabezados: [
      {
        title: 'Accesos',
        link: ['Aula virtual', 'SIUANE', 'Biblioteca digital', 'ExaUANE'],
      },
      {
        title: 'Conoce UANE',
        link: ['Directorio', 'Internacionalización', 'Somos UANE', 'Nuestros campus', 'Noticias'],
      },
      {
        title: 'Servicios para el estudiante',
        link: [
          'Prácticas profesionales',
          'Bolsa de trabajo',
          'Convenios empresariales',
          'Erasmus empleabilidad',
          'Línea segura',
        ],
      },
      {
        title: 'Oferta educativa',
        link: ['Bachillerato', 'Licenciaturas', 'Postgrados', 'Educación continua', 'Presencial'],
      },
    ],
    linkPhone: {
      ...dataLinkPhone,
    },
    link: {
      ...dataLink,
    },
    linkText: {
      ...dataLinkText,
    },
    copyrightText: 'Derechos Reservados',
    linkLottus: {
      ...dataLinkLottus,
    },
    linkPrivacy: {
      ...dataLinkPrivacy,
    },
  };

  useEffect(() => {
    (footerPortalverseRef.current as any).data = {...datafooterportalverse};
  }, [datafooterportalverse]) // eslint-disable-line react-hooks/exhaustive-deps

  return <lottus-filter-footer-portalverse ref={footerPortalverseRef}></lottus-filter-footer-portalverse>
}

export default Footer;