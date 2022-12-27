import Head from "next/head"
import { useRouter } from "next/router"
import NextPageWithLayout from "@/types/Layout.types"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import RichtText from "@/components/Richtext/Richtext"
import Image from "@/components/Image"
import CardWebsite from "@/components/CardWebsite"
import Numbers from "@/components/Numbers"
import PromoLink from "@/components/PromoLink"
import Mosaic from "@/components/Mosaic"
import Youtube from "@/components/Youtube"
import { getDataPageFromJSON } from "@/utils/getDataPage"

const SomosUane: NextPageWithLayout = ({ sections, meta }: any) => {

  const router = useRouter()

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout breadcrumbs={true}>
      <ContentLayout>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-13 w-t:text-8.5 w-p:text-7.5 leading-[125%] w-t:leading-[111%] mb-6">{sections.head.title}</p>
          <p className="font-Poppins font-bold text-5.5 mb-6">{sections.head.subtitle}</p>
          <RichtText data={{
            content: sections.head.description
          }} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image
            alt={ sections.head.image.desk.alt }
            src={ sections.head.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
          />
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.history.title}</p>
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <Image
            alt={ sections.history.image.desk.alt }
            src={ sections.history.image.desk.src }
            classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
          />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          <RichtText data={{
            content: sections.history.description
          }} />
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-darkBlue text-white mt-18 w-t:mt-3 w-p:mt-3">
        <ContentLayout classNames="my-6">
          <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 my-6">
            <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.missionAndVission.title}</p>
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-d:hidden my-6">
            <Image
              alt={ sections.missionAndVission.image.desk.alt }
              src={ sections.missionAndVission.image.desk.src }
              classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
            />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
            <RichtText font="dark" data={{
            content: sections.missionAndVission.description
          }} />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 w-t:hidden w-p:hidden mb-6">
            <Image
              alt={ sections.missionAndVission.image.desk.alt }
              src={ sections.missionAndVission.image.desk.src }
              classNames="aspect-2/1 w-t:aspect-2/1 w-p:aspect-2/1"
            />
          </div>
        </ContentLayout>
      </ContentFullLayout>
      <ContentLayout classNames="mt-12 w-t:mt-6 w-p:mt-6">
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 my-auto">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{sections.ourValues.title}</p>
          {
            sections.ourValues.values.map((item:any, i:number) => <section className="mt-6" key={`section-values-${i}`}>
             <CardWebsite data={item}/>
            </section>)
          }
        </div>
        <div className="w-d:col-span-6 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-2 gap-6 w-t:grid-cols-2 w-p:grid-cols-1 w-d:mt-8 ">
          {
            sections.ourValues.numbers.map((item:any, i:number) => <section key={`section-numbers-${i}`}>
              <Numbers data={item}/>
            </section>)
          }
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{ sections.community.title}</p>
        </div>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            sections.community.links.map((item:any, i:number) => <section key={`section-community-${i}`}>
              <PromoLink data={item} onClick={()=> router.push(item.redirect)}/>
            </section>)
          }
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%] mb-6">{ sections.experiences.title}</p>
          <Mosaic data={sections.experiences.images}/>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%] mb-6">{ sections.ourScholarships.title}</p>
        </div>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-4 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            sections.ourScholarships.scholarships.map((item:any, i:number) => <section key={`section-schoolarships-${i}`}>
              <PromoLink data={item} onClick={()=> router.push(item.redirect)} typeShadowColor={item.shadowColor}/>
            </section>)
          }
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-12 w-t:mt-6 w-p:mt-6">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%]">{ sections.ourConventions.title}</p>          
        </div>
        <div className="w-d:col-span-12 w-t:col-span-8 w-p:col-span-4 grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
          {
            sections.ourConventions.conventions.map((item:any, i:number) => <section key={`section-conventions-${i}`}>
              <CardWebsite data={item}/>
            </section>)
          }
        </div>
      </ContentLayout>
      <ContentLayout classNames="mt-18 w-t:mt-6 w-p:mt-6">
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 my-auto">
          <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%] mb-6">{ sections.ourCertifications.title}</p>
          <RichtText data={{
            content: sections.ourCertifications.description
          }} />
        </div>
        <div className="col-span-6 w-t:col-span-8 w-p:col-span-4">
          {
            sections.ourCertifications.certifications.map((item:any, i:number) => <section className="mt-6" key={`section-values-${i}`}>
             <CardWebsite data={item}/>
            </section>)
          }
        </div>
      </ContentLayout>
      <ContentFullLayout classNames="bg-darkBlue text-white mt-12 w-t:mt-6 w-p:mt-6 mb-12 w-t:mb-6 w-p:mb-6">
        <ContentLayout>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 my-6">
            <Youtube data={ sections.meetYourRector.video} />
          </div>
          <div className="col-span-6 w-t:col-span-8 w-p:col-span-4 my-auto">
            <p className="font-Poppins font-bold text-10 w-t:text-6 w-p:text-6 leading-[125%] mb-6">{sections.meetYourRector.title}</p>
            <RichtText font="light" data={{
            content: sections.meetYourRector.description
          }} />
          </div>
        </ContentLayout>
      </ContentFullLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {

  const { sections, meta } = await getDataPageFromJSON('somos-uane.json');

  return {
    props: { sections, meta }
  }
}

export default SomosUane