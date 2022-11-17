import Head from "next/head"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Routes from "@/routes/Routes"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import licenciatura from "@/dummy/licenciatura"
import especialidad from "@/dummy/especialidad"
import doctorado from "@/dummy/doctorado"
import maestria from "@/dummy/maestria"
import bachillerato from "@/dummy/bachillerato"
import Image from "@/components/Image"
import Link from "next/link"
import ContentInsideLayout from "@/layouts/ContentInside.layout"

const Level: NextPageWithLayout<any> = ({ data: { level, config: { title, banner: { image, description: descriptionBanner }, head: { title: titleHead, description: descriptionHead } }, programs } }: any) => {
  return <>
    <Head>
      <title>{ title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentFullLayout classNames="w-d:hidden w-t:col-span-8 w-p:col-span-4">
        <div style={{"backgroundImage":`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${image.src})`}} className="col-span-12 w-t:col-span-8 w-p:col-span-4 aspect-2/1 bg-cover flex flex-col items-center justify-center p-10">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ descriptionBanner?.title }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ descriptionBanner?.subtitle }</h3>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div style={{"backgroundImage":`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${image.src})`}} className="col-span-12 w-t:col-span-8 w-p:col-span-4 aspect-2/1 bg-cover flex flex-col items-center justify-center w-t:hidden w-p:hidden p-10">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ descriptionBanner.title }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ descriptionBanner.subtitle }</h3>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex flex-col">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ titleHead }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ descriptionHead }</h3>
        </div>
        <ContentInsideLayout classNames="mt-12 gap-6 col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
            programs.map(({ route, info: { head: { titleGral, image: { src, alt } } } }: any, i: number) => <div key={`program-${i}`} className="flex flex-col col-span-3 w-t:col-span-4 w-p:col-span-4">
              <Image src={src} alt={alt} classNames="aspect-4/3" />
              <div>
                <p>{titleGral}</p>
                <Link href={`${level}/${route}`}>
                  <a>Ver más</a>
                </Link>
              </div>
            </div>)
          }
        </ContentInsideLayout>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

export async function getStaticPaths() {
  return {
    paths: Routes["oferta-educativa"],
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const { params: { level: levelSelected } } = context;
  const diccionario: any = {
    licenciatura,
    especialidad,
    doctorado,
    maestria,
    bachillerato,
  };
  const infoLevel: any = diccionario[levelSelected];
  const { config, programs } = Routes["oferta-educativa"].reduce((prev: any, { params: { level, programs, config } }: any) => level === levelSelected ? { ...prev, config: { ...prev.config, ...config }, programs: [ ...prev.programs, ...programs ] } : { ...prev }, { config: {}, programs: [] });
  const infoPrograms = programs.reduce((prev: any, { params: { program: route } }: any) => [ ...prev, { route, info: infoLevel[route] } ], []);
  return {
    props: { data: { level: levelSelected, config, programs: [...infoPrograms] } },
  }
}

export default Level