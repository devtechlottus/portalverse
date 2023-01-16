import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import cn from "classnames"
import ContentLayout from "@/layouts/Content.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import NextPageWithLayout from "@/types/Layout.types"
import Routes from "@/routes/Routes"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import Image from "@/components/Image"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import { getDataPageFromJSON } from "@/utils/getDataPage"
import Filter from "@/components/Filter/Filter"


const Level: NextPageWithLayout<any> = ({ meta, filtro, programs, sections, level }: any) => {

  // const [ configPrograms, setConfigPrograms ] = useState<Array<any>>([]);
  // const [ configModalidad, setConfigModalidad ] = useState<Array<any>>([]);
  // const [ configCampus, setConfigCampus ] = useState<Array<any>>([]);
  // const [ configConocimiento, setConfigConocimiento ] = useState<Array<any>>([]);
  const [ filterConfig, setFilterConfig ] = useState<any>({});
  const [ visiblePrograms, setVisiblePrograms ] = useState<any[]>([]);
  const [ initialPrograms, setInitialPrograms ] = useState<any[]>([]);
  const [ mosaicActive, setMosaicActive ] = useState<boolean>(true);

  useEffect(() => {
    const configs = programs.map(({ config }: any) => config);
    const modalidades: any[] = [ ...Array.from<string>(new Set(configs.reduce((p: any, c: any) => {
      const { modalidad } = c;
      return [ ...p, ...modalidad ]
    }, []))) ].map((mod: string) => ({ value: mod, active: false, label: mod }));
    const campus: any[] = [ ...Array.from<string>(new Set(configs.reduce((p: any, c: any) => {
      const { campus } = c;
      return [ ...p, ...campus ]
    }, []))) ].map((camp: string) => ({ value: camp, active: false, label: camp }));
    const conocimiento: any[] = [ ...Array.from<string>(new Set(configs.reduce((p: any, c: any) => {
      const { areaConocimiento } = c;
      return [ ...p, ...areaConocimiento ]
    }, []))) ].map((conc: string) => ({ value: conc, active: false, label: conc }));
    // setConfigModalidad([ ...modalidades ]);
    // setConfigCampus([ ...campus ]);
    // setConfigConocimiento([ ...conocimiento ]);
    // setConfigPrograms([ ...configs ]);

    const allFilter = {
      modalidad: { options: [ ...modalidades ], config: { label: "Modalidades", icon: "edit_note" } },
      campus: { options: [ ...campus ], config: { label: "Campus", icon: "apartment" } },
      areaConocimiento: { options: [ ...conocimiento ], config: { label: "Áreas de Conocimiento", icon: "school" } }
    };
    setFilterConfig({ ...allFilter });
    setVisiblePrograms([ ...programs ]);
    setInitialPrograms([ ...programs ]);
  }, [programs]);

  const setNewSelecton = (filters: any) => {
    const filtersExists: any[] = Object.entries(filters).filter(([ key, value ]: any) => !!value.length).map(([ key ]: any) => key);
    if (!filtersExists.length) {
      setVisiblePrograms([...initialPrograms])
      return
    }
    const newVisiblePrograms = Array.from(new Set(filtersExists.reduce((p: any, c: any, i: number) => {
      const programs = filters[c].reduce((prev: any, curr: any) => {
        return [ ...prev, ...i === 0
          ? initialPrograms.filter((item: any) => item.config[c].includes(curr))
          : p.filter((item: any) => item.config[c].includes(curr))
        ]
      }, []);
      return [ ...programs ]
    } , [])));
    setVisiblePrograms([...newVisiblePrograms])
  }

  return <>
    <Head>
      <title>{ meta.title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentFullLayout classNames="w-d:hidden w-t:col-span-8 w-p:col-span-4 mb-6">
        <div style={{"backgroundImage":`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${sections.head.banner.image.src})`}} className="col-span-12 w-t:col-span-8 w-p:col-span-4 aspect-2/1 bg-cover flex flex-col items-center justify-center p-10">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ sections.head.banner.description.title }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ sections.head.banner.description.subtitle }</h3>
        </div>
      </ContentFullLayout>
      <ContentLayout>
        <div style={{"backgroundImage":`linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${sections.head.banner.image.src})`}} className="col-span-12 w-t:col-span-8 w-p:col-span-4 aspect-2/1 bg-cover flex flex-col items-center justify-center w-t:hidden w-p:hidden p-10">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-10 w-t:text-6 w-p:text-6">{ sections.head.banner.description.title }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ sections.head.banner.description.subtitle }</h3>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 flex flex-col">
          <h1 className="font-Poppins font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-d:text-13 w-t:text-6 w-p:text-6">{ sections.introduction.title }</h1>
          <h3 className="font-Nunito font-normal w-d:leading-5 w-t:leading-[17.5px] w-p:leading-[17.5px] w-d:text-base w-t:text-3.5 w-p:text-3.5">{ sections.introduction.description }</h3>
        </div>
        <div className={cn("col-span-12 w-t:col-span-8 w-p:col-span-4 flex flex-col", { "hidden": !filtro })}>
          <Filter color={"#B0003C"} data={filterConfig} onSelectionItems={(filters: any) => setNewSelecton(filters)} onChangeView={(status: boolean) => setMosaicActive(status) } />
        </div>
        <ContentInsideLayout classNames="mt-12 gap-6 col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
            visiblePrograms.map(({ route, title, config: { image: { src, alt } } }: any, i: number) => <div key={`program-${i}`} className={cn("flex hover:shadow-30 h-full border", { "flex-col w-d:col-span-3 w-t:col-span-4 w-p:col-span-4": mosaicActive, "w-d:col-span-12 w-t:col-span-8 w-p:col-span-4": !mosaicActive })}>
              <Image src={src} alt={alt} classNames={cn({ "aspect-4/3": mosaicActive, "w-[80px] h-full": !mosaicActive })} />
              <div className={cn("p-3 flex flex-col bg-white gap-2", { "w-full": !mosaicActive })}>
                <p>{title}</p>
                <Link href={`${level}/${route}`}>
                  <a className="flex items-center justify-end font-bold">
                    <span className="mr-1 w-t:hidden w-p:hidden">Ver más</span>
                    <span className="material-icons icon">chevron_right</span>
                  </a>
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
  const { params: { level } } = context;
  const { meta, filtro, programs, sections } = await getDataPageFromJSON(`/oferta-educativa/${level}.json`);

  return {
    props: {
      meta, filtro, programs, sections, level
    },
  }
}

export default Level