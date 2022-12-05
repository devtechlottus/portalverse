import { ReactElement } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import CardWebsite from "@/components/CardWebsite"
import { ContactData, SectionData } from "@/types/Directorio.types"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import ContactTarget from "@/components/ContactTarget"
import Banner from "@/components/Banner"

const Alumnos: NextPageWithLayout = ({ data }: any) => {
  const router = useRouter();
  return <>
    <Head>
      <title>{ data.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 mb-12">
          <p className="font-Poppins font-bold text-10 w-t:text-8.5 w-p:text-7.5 leading-13 w-t:leading-[111%] w-p:leading-[125%] mb-6">{ data.head.title }</p>
          <p className="font-Nunito text-base w-t:text-3.5 w-p:text-3.5 leading-[125%]">{ data.head.description }</p>
        </div>
        <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 mb-12">
          {
           data.cards.map((item:any, i:number) => <section key={`section-blog-${i}`}>
            <CardWebsite data={item} />
           </section>)
          }
        </section>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
            directory.map(({ title, description ,contacts }: SectionData, i: number) => <section key={`section-directory-${i}`} className="mb-18">
              <ContentInsideLayout>
                <p className="font-Poppins font-bold text-10 leading-12.5 col-span-12">{title}</p>
                <p className="font-Nunito text-base w-t:text-3.5 w-p:text-base col-span-7 leading-[125%]">{description}</p>
              </ContentInsideLayout>
              <ContentInsideLayout classNames="mt-6 gap-6">
                {
                  contacts.map(({ name, email, phone, image = '' }: ContactData, j: number) =>
                    <ContactTarget key={`card-item-${j}`} image={image} name={name} email={email} phone={phone} /> 
                  )
                }
              </ContentInsideLayout>
              </section>
            )
          }
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Banner 
            data={data.schoolCalendar.banner}
            onBtn={ ()=> {
              router.push(`${router.pathname}/calendario-escolar`)
            }}/>
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
   </>
}



export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: 'Alumnos',
        head:{
          title: 'Acceso al estudiante',
          description: 'Lorem ipsum dolor sit amet consectetur. Ultrices amet vulputate bibendum id. Feugiat vel condimentum amet dignissim at neque nunc pellentesque rhoncus. Vulputate molestie fermentum sollicitudin in eu quis cursus luctus bibendum. Dui ac tempus magna neque. Quisque faucibus neque elementum nisi mauris est nisl ac. In sodales cras augue ipsum.'
        },
        cards: [{ 
          urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1mAjk7blwP1jGnU45XfcCeicbVRJ9rE-FdQFTovdoeEnMYonChejcOeEYtHwkGHJjlk&usqp=CAU',
          subtitle: '',
          title: 'Espacio universitario internacionalizacion en la UNAE',
          text: 'Realiza tus pagos, solicita o consulta tus trámites y lleva registro de tus actividades escolares.',
          border: true,
          allContent: true,
          height: '',
          isShowCardWebsiteContent: true,
          id: '',
          type: 'vertical',
          link: true,
          background: false,
          linkText: {
            text: 'Ver video',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: 'visibility',
          },
          linkIcon: {
            text: 'Ver video',
            iconSecond: 'play_circle',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: '',
          },
          wrapper: true,
        },
        { 
          urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8fPWgJJCI7-bEpXSg6DJa909NOPr0W7hTWMTMyS36eTZpq96SyjbvGNDvoscxlLhjS0&usqp=CAU',
          subtitle: '',
          title: 'Aula virtual',
          text: 'Accede a tus clases y actividades de cada materia, entrega tus trabajos o realiza tus ejercicios y evaluaciones.',
          border: true,
          allContent: true,
          height: '',
          isShowCardWebsiteContent: true,
          id: '',
          type: 'vertical',
          link: true,
          background: false,
          linkText: {
            text: 'Conocer más',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: 'star',
          },
          linkIcon: {
            text: 'Ver más',
            iconSecond: '',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: '',
          },
          wrapper: true,
          video: "8LDTk1DLg4M"
        },
        { 
          urlImage: 'https://pcredcom.com/blog/wp-content/uploads/2020/06/tipos-de-computadoras.jpg',
          subtitle: '',
          title: 'Biblioteca virtual',
          text: 'Explora nuestras colecciones y consulta dentro del acervo bibliográfico que ponemos a tu alcance.',
          border: true,
          allContent: true,
          height: '',
          isShowCardWebsiteContent: true,
          id: '',
          type: 'vertical',
          link: true,
          background: false,
          linkText: {
            text: 'Conocer más',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: 'star',
          },
          linkIcon: {
            text: 'Ver más',
            iconSecond: 'arrow_right',
            isBold: true,
            size: 'large',
            isUnderline: false,
            disabled: false,
            icon: '',
          },
          wrapper: true,
        },],
        schoolCalendar:{
          banner:{ title: 'Calendario escolar', subtitle: 'Consulta el calendario escolar del periodo actual', state: '', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://previews.123rf.com/images/moodboard/moodboard1703/moodboard170304313/75511401-longitud-total-de-j%C3%B3venes-estudiantes-universitarios-masculinos-y-femeninos-caminando-en-el-sendero.jpg', desktop: 'https://previews.123rf.com/images/moodboard/moodboard1703/moodboard170304313/75511401-longitud-total-de-j%C3%B3venes-estudiantes-universitarios-masculinos-y-femeninos-caminando-en-el-sendero.jpg',}, overlay: '', height: '', action: {id: 'undefined', type: 'primary', title: "Consultar", size: 'small', icon: "", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true}
        }
      }
    }
  }
}

const directory: SectionData[] = [
  {
    title: "Directorio universitario",
    description: 'Todos los que integramos la universidad estamos para atenderte y escucharte, contacta a cualquier área de la universidad',
    contacts: [
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Servicios escolares",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Dirección general",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Dirección general",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Biblioteca",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Línea segura",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
      {
        image: "https://blogcomparasoftware-192fc.kxcdn.com/wp-content/uploads/2021/02/dimensionamiento-de-un-call-center-1024x576.png",
        name: "Línea segura",
        email: "email@uane.com",
        phone: "55 10 50 27 07",
      },
    ]
  },
]
export default Alumnos

function handleClickTalent(video: any): void {
  throw new Error("Function not implemented.")
}
