import Head from "next/head"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import ContentLayout from "@/layouts/Content.layout"

const ThankYouPage: NextPageWithLayout = ({ data }: any) => {

  return <>
    <Head>
      <title>Talento</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="w-d:col-span-8 w-t:col-span-7 w-p:col-span-4">
          <h1 className="text-13 w-t:text-8.25 w-p:text-6 font-Poppins font-bold leading-[125%] w-t:leading-[111%] mb-5">{ data.head.title }</h1>
          <p className="text-base w-t:text-sm w-p:text-sm font-Nunito leading-[125%] ">{ data.head.description }</p>
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  return {
    props: {
      data: {
        head:{
          title: 'Egresados talento',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra'
        }
      }
    }
  }
}

export default ThankYouPage