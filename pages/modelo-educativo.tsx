import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"
import Image from "@/components/Image"

const ModeloEducativo: NextPageWithLayout = ({ data }: any) => {
  return <HeaderFooterLayout>
    <ContentLayout>
      <div className="w-d:col-span-7 w-t:col-span-7 w-p:col-span-4">
        <h1 className="text-13 w-t:text-8.25 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%]">{ data.title }</h1>
        <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] ">{ data.description }</p>
      </div>
      <div className="w-d:col-span-12 w-t:hidden w-p:hidden w-d:mb-12 w-t:mb-6">
        <Image alt={ data.image.desk.alt } src={ data.image.desk.src } classNames="aspect-2/1"/>
      </div> 
      <div className="w-t:col-span-8 w-p:col-span-4 w-d:hidden">
        <Image alt={ data.image.mobile.alt } src={ data.image.mobile.src } classNames="aspect-3/4"/>
      </div> 
      <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
        <p className="text-10 w-t:text-6 w-p:text-6 font-Poppins font-bold leading-[125%] ">{ data.textWithDescription.title }</p>
        <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%]">{ data.textWithDescription.text }</p>
      </div>
      <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:mt-[48px]" >
        <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%]">{ data.text }</p>
      </div>
    </ContentLayout>    
  </HeaderFooterLayout>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: 'Nuestro Modelo educativo modular',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud',
        image: {
          desk:{
            alt: 'imagen',
            src: 'https://www.uane.edu.mx/multi/images/UANE-fit.jpg'
          },
          mobile:{
            alt: 'imagen',
            src: 'https://www.lavozdetamaulipas.mx/wp-content/uploads/2018/08/ANUNCIO-UANE.jpg'
          }
        },
        textWithDescription : {
          title: 'Lorem ipsum dolo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisdo eiusmod tempor incididunt ut labore',
        },
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
      }
    }
  }
}

export default ModeloEducativo