import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import Youtube from "@/components/Youtube"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"

const PedirInformacion: NextPageWithLayout = ({ data }: any) => {
  return <HeaderFooterLayout>
    <ContentLayout>
      <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11 text-13.5 w-t:text-8.5 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%]">{ data.title }</section>
      <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11 text-base w-t:text-3.5 w-p:text-3.5 font-Nunito leading-[125%]">{ data.description }</section>
      <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11">Aqui va el formulario</section>
      <section className="col-span-12 w-t:col-span-8 w-p:col-span-4 w-d:col-start-3 w-d:col-end-11">
        <Youtube data={ data.video } />
      </section>
    </ContentLayout>
  </HeaderFooterLayout>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        title: 'Tu oportunidad está en UANE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  Ut enim ad minim veniam, quis nostrud Ut enim ad minim veniam, quis nostrud ',
        video: {options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} }
      }
    }
  }
}

export default PedirInformacion