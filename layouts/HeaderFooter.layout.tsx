import { useRouter } from "next/router"
import Footer from "@/components/Footer"
import Header from "@/components/HeaderPortalverse"
import HeaderFooterLayoutProps from "@/types/HeaderFooterLayout.types"
import Breadcrumbs from "@/components/Breadcrumbs/BreadcrumbPortalverse"
import ContentLayout from "@/layouts/Content.layout"
import menus from "@/dummy/header"

export default function HeaderFooterLayout({ children, breadcrumbs = true }: HeaderFooterLayoutProps) {
  const router = useRouter();

  const logotypeClick = () => router.push('/');

  const clickCTA = () => router.push("/pedir-informacion");

  return <>
    <Header menus={menus} onClickLogo={logotypeClick} onClickCTA={clickCTA} logotype={{ src:"/images/logotipo.png", alt:"logotipo-uane" }} />
    <ContentLayout>
      <Breadcrumbs classNames="col-span-12 w-t:col-span-8 w-p:col-span-4" visible={breadcrumbs} />
    </ContentLayout>
    { children }
    <Footer 
      onLinkMenu={() => {
        console.log('holi');
      }}
      data={{
        image: '/images/logotipo.png',
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
          data: {
            text: '',
            size: '',
            isUnderline: false,
            isBold: false,
            disabled: false,
            id: undefined,
            iconFirst: '',
            iconSecond: ''
          },
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        },
        link: {
          data: {
            text: 'holis',
            size: '',
            isUnderline: false,
            isBold: false,
            disabled: false,
            id: undefined,
            iconFirst: '',
            iconSecond: ''
          },
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        },
        linkText: {
          data: {
            text: '',
            size: '',
            isUnderline: false,
            isBold: false,
            disabled: false,
            id: undefined,
            iconFirst: '',
            iconSecond: ''
          },
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        },
        copyrightText: 'Derechos Reservados',
        linkLottus: {
          data: {
            text: '',
            size: '',
            isUnderline: false,
            isBold: false,
            disabled: false,
            id: undefined,
            iconFirst: '',
            iconSecond: ''
          },
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        },
        linkPrivacy: {
          data: {
            text: 'dnfnfdkandak',
            size: '',
            isUnderline: false,
            isBold: false,
            disabled: false,
            id: undefined,
            iconFirst: '',
            iconSecond: ''
          },
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        }
      }}
    />
  </>
}