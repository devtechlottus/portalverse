import { ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import Routes from "routes/Routes"
import Filter from "@/components/Filter/Filter"
import Lottie from "@/components/Lottie"
import RichtText from "@/components/Richtext"
import Spotify from "@/components/Spotify"
import Youtube from "@/components/Youtube"
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import ContentLayout from "@/layouts/Content.layout"
import Tabs from "@/components/Tabs"
import Banner from "@/components/Banner"
import Button from "@/components/Button/Button"
import CardWebsite from "@/components/CardWebsite"
import NavDrawer from "@/components/NavDrawer"
import Numbers from "@/components/Numbers"
import PromoLink from "@/components/PromoLink"
import OustandingModule from "@/components/OustandingModule"
import Breadcum from "@/components/Breadcum"
import Link from "@/components/Link"

const ComponentPage = ({ data }: any) => {

  const [ componentState, setComponentState ] = useState<any>({});

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("lottus-elements-uane/elements")
    }
  }, [])

  useEffect(() => {
    setComponentState(data);
  }, [data])// eslint-disable-line react-hooks/exhaustive-deps

  const handleOnSelectedOptions = (options: string[]) => console.log("handleOnSelectedOptions", options)
 
  const renderComponent = (component: string) => {
    switch(component) {
      case "youtube":
        console.log("youtube", componentState)
        return <Youtube data={componentState.data} />
        break;
      case "spotify":
        console.log("spotify", componentState)
        return <Spotify data={componentState.data} /> 
        break;
      case "lottie":
        console.log("lottie", componentState)
        return <Lottie data={componentState.data} /> 
        break;
      case "richtext":
        console.log("richtext", componentState)
        return <RichtText data={componentState.data} /> 
        break;
      case "filter":
        console.log("filter", componentState)
        return <Filter data={componentState.data} />
      case "filter-dropdown":
        // console.log("filter", componentState)
        return <FilterDropdown data={componentState.data} onSelectedOptions={handleOnSelectedOptions} />
        break;
      case "tabs":
        console.log("tabs", componentState)
        return <Tabs data={componentState.data} /> 
        break;
      case "button":
        console.log("button", componentState);
        return <Button onClick={ ()=> {
          console.log("aqui")
        }} data={componentState.data} />
        break;
      case "banner":
        console.log("banner", componentState)
        return <Banner data={componentState.data} />
        break;
      case "cardWebsite":
        console.log("cardWebsite", componentState)
        return <CardWebsite data={componentState.data} />
        break;
      case "navDrawer":
        console.log("navDrawer", componentState);
        return <NavDrawer onClick={ ()=> {
          console.log("aqui")
        }} data={componentState.data} />
        break;
      case "numbers":
        console.log("numbers", componentState);
        return <Numbers data={componentState.data} />
        break;
      case "promoLink":
        console.log("promoLink", componentState);
        return <PromoLink data={componentState.data} />
        break;
      case "oustandingModule": 
        console.log("oustandingModule", componentState)
        return <OustandingModule data= {componentState.data} />
        break;
      case "breadcum":
        console.log("breadcum", componentState)
        return <Breadcum data= {componentState.data} />
        break;
      case "link":
        console.log("link", componentState)
        return <Link data= {componentState.data} />
        break;
      }      
  }

  return <>
    <Head>
      <title>{ componentState.title }</title>
    </Head>
    {
      renderComponent(componentState.component)
    }
  </>
}

export async function getStaticPaths() {
  const path = "components";
  return {
    paths: Routes[path],
    fallback: false,
  }
}
  
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const path = "component";
  const components = [
    { [path]: "link", title: "Link", data:{  text: 'xdxd', size: 'small', isBold: false, disabled: false, id: '123', icon: 'person',}},
    { [path]: "breadcum", title: "Breadcum", data:{tagOnItem: 'testOnItem', tagOnBack: 'testOnBack', textItems: [{value: 'text1', text: 'Firt text', }, {value: 'text2', text: 'Second text', }, {value: 'text3', text: 'Third text large end', },], icon: 'home', textColor: 'black',}},
    { [path]: "oustandingModule", title: "OustandingModule", data: {image: {mobile: 'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959', desktop: 'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',}, title: 'Perfil de ingreso',text: 'At vero eos et accusamus et iusto odio dignissi ducimus qui blanditiis praesentium voluptatum\n\n- Atque corrupti quos dolores et quas molestias \n- Excepturi sint occaecati cupiditate non provident\n- Excepturi sint occaecati cupiditate non providentExcepturi sint occaecati cupiditate non provident', backgroundColor: '#8B9BA3',}},
    { [path]: "promoLink", title: "PromoLink", data: {  urlImage: { mobile: 'https://thumbs.dreamstime.com/z/fondo-del-coraz%C3%B3n-del-amor-del-arco-iris-60045149.jpg', desktop: 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=',}, text: 'Mab', icon: 'person', color: '', opacity: '', height: '300px', enable: true, nobackground: false,}},
    { [path]: "numbers", title: "Numbers", data:{  icon: 'person', prefix: '+', number: '1222', suffix: '+', title: 'hola', body: 'aaa', container: true,}},
    { [path]: "navDrawer", title: "NavDrawer", data:{ text: 'Hola', iconselected: false, linkselected: false, isleft: false, singleaction: false, morecontent: false, activesingle: false}},
    { [path]: "cardWebsite", title:"CardWebsite", data:{ isLinkText: true, id: '', urlImage: 'https://cdn.shopify.com/s/files/1/1754/7787/files/Schermafbeelding_2017-01-28_om_14.33.13_600x600.png?v=1485980770', subtitle: 'wenas', title: 'Hola', text: 'hola card', border: false, allContent: false, height: '500px', isShowCardWebsiteContent: false, background: false, type: 'small', link: true,}},
    { [path]: "banner", title:"Banner", data:{ title: 'Hola', subtitle: 'jejeje', state: 'black', size: 'medium', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_04.jpg', desktop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6K_vYDisviIeacdi_G2t5LzGol_o27rivExNw7wtm&s',}, overlay: '', height: '', action: {id: 'undefined', type: 'primary', title: "Hola", size: 'large', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''},}},
    { [path]: "button", title: "Button", data:{title: 'Continuar', type: 'primary', icon: '', isExpand: false,}},
    { [path]: "tabs", title: "Tabs", data:{items: [{label: 'Item Tab 1', icons: { primary: 'star', duplicate: true,}, disabled: true,}, {label: 'Item Tab 1', icons: {primary: 'star', duplicate: true, }, disabled: false, }], size: 'medium', }},
    { [path]: "youtube", title: "Youtube", data: { options: { id: 'Ae84Xfec1HM', type: 'single', controls: true}, dimensions: { height: '500px'} } },
    { [path]: "spotify", title: "Spotify", data: { config: { type: 'episode', format: 'normal', id: '1iMWrWrpocYYtxS2wV6tJt',} } },
    { [path]: "lottie", title: "Lottie", data: { data: { path: 'https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json', }, dimensions: {}  }},
    { [path]: "richtext", title: "Richtext", data: { content: `
    ## At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;
  
    *Lorem ipsum dolor sit amet*, consectetur adipiscing elit. Ergo id est convenienter naturae vivere, a natura discedere. Duo Reges: constructio interrete. Vitae autem degendae ratio maxime quidem illis placuit quieta. [An nisi populari fama?](http://loripsum.net/) Sic enim censent, oportunitatis esse beate vivere. Non dolere, inquam, istud quam vim habeat postea videro; Et harum quidem rerum facilis est et expedita distinctio. Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo.
    
      > Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est.
    
    [Egone quaeris, inquit, quid sentiam?](http://loripsum.net/) [Immo videri fortasse.](http://loripsum.net/) Huius, Lyco, oratione locuples, rebus ipsis ielunior. Quid est, quod ab ea absolvi et perfici debeat? **Equidem e Cn.** Tria genera bonorum; Tu quidem reddes;
    
  
    - Sit sane ista voluptas.
    - Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem ad nos pertinere?
  
    
    1. Sit sane ista voluptas.
    2. Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem ad nos pertinere?
    
    - Sit sane ista voluptas.
    - Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem ad nos pertinere?
  
    1. Sit sane ista voluptas.
    2. Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem ad nos pertinere?
    
    
    His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Aliter enim nosmet ipsos nosse non possumus. <mark>Bonum patria: miserum exilium.</mark> Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Verba tu fingas et ea dicas, quae non sentias? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. <mark>Inquit, dasne adolescenti veniam?</mark> Quid de Platone aut de Democrito loquar? <mark>Cum praesertim illa perdiscere ludus esset.</mark> Haec dicuntur fortasse ieiunius; Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant?
    
    `} },
    { [path]: "filter", title: "Filter", data: {
        data1: {
          config: { label: 'dos', icon: 'grade' },
          options: [
            { label: 'una', active: false, value: 'una' },
            { label: 'dos', active: false, value: 'dos' },
            { label: 'tres', active: false, value: 'tres' },
            { label: 'cuatro', active: false, value: 'cuatro' },
            { label: 'cinco', active: false, value: 'cinco' },
            { label: 'seis', active: false, value: 'seis' },
            { label: 'siete', active: false, value: 'siete' },
          ]
        },
        data2: {
          config: { label: 'tres', icon: 'grade' },
          options: [
            { label: 'una', active: false, value: 'una' },
            { label: 'dos', active: false, value: 'dos' },
            { label: 'tres', active: false, value: 'tres' },
            { label: 'cuatro', active: false, value: 'cuatro' },
            { label: 'cinco', active: false, value: 'cinco' },
            { label: 'seis', active: false, value: 'seis' },
            { label: 'siete', active: false, value: 'siete' },
          ]
        },
        data3: {
          config: { label: 'uno', icon: 'grade' },
          options: [
            { label: 'una', active: false, value: 'una' },
            { label: 'dos', active: false, value: 'dos' },
            { label: 'tres', active: false, value: 'tres' },
            { label: 'cuatro', active: false, value: 'cuatro' },
            { label: 'cinco', active: false, value: 'cinco' },
            { label: 'seis', active: false, value: 'seis' },
            { label: 'siete', active: false, value: 'siete' },
          ]
        }
      }
    },
    {
      [path]: 'filter-dropdown', title: "Filter Dropdown", data: {
      config: { label: 'dos', icon: 'grade' },
        options: [
          { label: 'una', active: false, value: 'una' },
          { label: 'dos', active: false, value: 'dos' },
          { label: 'tres', active: false, value: 'tres' },
          { label: 'cuatro', active: false, value: 'cuatro' },
          { label: 'cinco', active: false, value: 'cinco' },
          { label: 'seis', active: false, value: 'seis' },
          { label: 'siete', active: false, value: 'siete' },
        ]
      }
    }
  ];
  const { params: { component } } = context;
  const preFilter = components.filter((item: any) => item.component === component)
  let dataComponent: {};
  if (!preFilter.length) {
    dataComponent = { error: true, message: "Info no avaliable" }
  } else {
    dataComponent = { ...preFilter[0] }
  }

  return {
    props: { data: {...dataComponent} },
  }
}

ComponentPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>
    <ContentLayout>
      { page }
    </ContentLayout>
  </HeaderFooterLayout>
}

export default ComponentPage;