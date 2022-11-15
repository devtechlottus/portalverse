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
import Button from "@/components/Button"
import CardWebsite from "@/components/CardWebsite"
import NavDrawer from "@/components/NavDrawer"
import Numbers from "@/components/Numbers"
import PromoLink from "@/components/PromoLink"
import OustandingModule from "@/components/OustandingModule"
import Breadcum from "@/components/Breadcrumb"
import Link from "@/components/Link"
import Paginator from "@/components/Paginator"
import Modal from "@/components/Modal"
import ModalIframe from "@/components/ModalIframe"
import Feedback from "@/components/Feedback"
import Mosaic from "@/components/Mosaic"
import Newsletter from "@/components/Newsletter"
import { ButtonInit, LinkIconsInit } from "@/components/fixture"
import NewBanner from "@/components/NewBanner"
import CustomHead from "@/components/CustomHead"
import CardsOstanding from "@/components/CardsOustanding"
import Carousel from "@/components/Carousel"
import Slider from "@/components/Slider"

const ComponentPage = ({ data }: any) => {

  const [ componentState, setComponentState ] = useState<any>({});

  useEffect( () => {
    // we need import elements with commonJS
    if (typeof window !== 'undefined') {
      require("lottus-elements-uane/elements")
    }
  }, []);

  useEffect(() => {
    setComponentState(data);
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  // Modal functionality begin
  const [isShow, setIsShow] = useState(false);
  const handleVisibilityModal = () => setIsShow(!isShow);
  // Modal functionality end

  const handleOnSelectedOptions = (options: string[]) => console.log("handleOnSelectedOptions", options);

  const renderCardsCarousel = (sections: any[]) => !!sections.length
    ? <>{sections.map((section: any, i: number) => <CardWebsite key={`card-website-${i}`} data={section} />)}</>
    : <></>
 
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
      case "paginator":
        console.log("paginator", componentState)
        return <Paginator data={componentState.data} />
        break;
      case "modal":
        return <>
          <Button data={ButtonInit} onClick={handleVisibilityModal}/>
          <Modal isShow={isShow} onClose={handleVisibilityModal} data={componentState.data}>
            <h1>jfk</h1>
          </Modal>
        </>
        break;
      case "modal-iframe":
        console.log("modal-iframe", componentState)
        return <ModalIframe data={componentState.data}/>
        break;
      case "feedback":
        console.log("feedback", componentState)
        return <Feedback data={componentState.data}>
          <p>Soy el feedback</p>
        </Feedback>
        break;
      case "mosaic":
        console.log("mosaic", componentState)
        return <Mosaic data={componentState.data}/>
        break;
      case "newsletter":
        console.log("newsletter", componentState)
        return <Newsletter data={componentState.data} />
        break;
      case "newBanner":
        console.log("newBanner", componentState)
        return <NewBanner data={componentState.data} />
        break;
      case "customHead":
        console.log("customHead", componentState)
        return <CustomHead data={componentState.data} />
        break;
      case "cardsOustanding":
        console.log("cardsOustanding", componentState)
        return <CardsOstanding data={componentState.data} />
        break
      case "carousel":
        console.log("carousel", componentState)
        return <Carousel data={componentState.data} />
        break;
      case "slider":
        console.log("slider", componentState)
        return <Slider data={componentState.data} />
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
    { [path]: "cardsOustanding", title: "CardsOustanding", data: {  title: 'Conoce tu futuro perfil',
    cards: [
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 1',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#8B9BA3',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        title: 'Perfil de ingreso 2',
        text: 'Al estudiar la Licenciatura en Administración de Empresas, serás un profesionista capaz de contribuir en la planeación, organización, dirección y control de los recursos de la empresarial y las tecnologías de la información como herramientas de apoyo para la toma de decisiones, orientando sus acciones hacia el desarrollo del negocio.',
        backgroundColor: '#6F7C82',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/210434/isolated/preview/ad1f02838cc1708abd60437127a486d5-persona-reclinada-con-car-aacute-cter-de-lista-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        backgroundColor: '#535D62',
      },
      {
        image: {
          desktop:
            'https://images.vexels.com/media/users/3/210434/isolated/preview/ad1f02838cc1708abd60437127a486d5-persona-reclinada-con-car-aacute-cter-de-lista-by-vexels.png',
          mobile:
            'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959',
        },
        backgroundColor: '#383E41',
      },
    ],
    wrapper: false,}},
    { [path]: "customHead", title: "CustomHead", data: {  id: '123', text: 'Busca tu nivel educativo', type: '', color: '', bgcolor: '',}},
    { [path]: "newBanner", title: "NewBanner", data:{image: {
      desktop: 'https://www.adobe.com/es/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium',
      mobile: 'https://www.adobe.com/es/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium',
    },
    title: 'soy un newbanner',
    text: 'jsanjkankjana',
    contentCenter: false,
    contentLeft: false,
    action: {
      ...ButtonInit,
      title: 'Conocer más',
    },
    wrapper: true}},
    { [path]: "newsletter", title: "Newsletter", data:{  type: 'text', typeSearch: 'filed', alphabetical: true, placeholder: 'Buscar', autocomplete: 'off', upperCase: false, icon: 'search', size: 'small',}},
    { [path]: "mosaic", title: "Mosaic", data:{images: [{id: '1', image: 'https://www.adobe.com/es/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium', icon: 'zoom_out_map', }, {id: '2', image: 'https://www.fotocommunity.es/styleguide/img/homepage/ottilia.jpg', icon: 'zoom_out_map', }, {id: '3', image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/35F4/production/_116221831_mediaitem116221830.jpg', icon: 'zoom_out_map',}, {id: '4', image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/35F4/production/_116221831_mediaitem116221830.jpg', icon: 'zoom_out_map',},{id: '1', image: 'https://www.adobe.com/es/express/feature/image/media_1bb4d071398492506a1b76b3b6f9d69a5e96d7ffc.png?width=750&format=png&optimize=medium', icon: 'zoom_out_map',}, {id: '2', image: 'https://th.bing.com/th/id/R.e2607cf730a72b5ce7024be6003c558c?rik=nsEV30f5tEd4Uw&riu=http%3a%2f%2finformacionimagenes.net%2fwp-content%2fuploads%2f2017%2f05%2fAnimales-salvajes-55.jpg&ehk=BIvlyNek99FY06ulqPA8F8XiK49vWahPniSVCLV4P5Y%3d&risl=&pid=ImgRaw&r=0', icon: 'zoom_out_map', }, {id: '3', image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/35F4/production/_116221831_mediaitem116221830.jpg', icon: 'zoom_out_map', }, {id: '4', image: 'https://th.bing.com/th/id/R.b9760e7cd34211c15d5e34d07dd8ba4c?rik=fSZN4Dk2BlNUUw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-k5NoJq9ax90%2fTwwRmC0VYmI%2fAAAAAAAAAbY%2fWvIsdkfWI8c%2fs1600%2fBeautiful_Animal_Wallpaper_rp5pe.jpg&ehk=fg%2bG0NrN5rmEaj9A0IsT9JdEbhPmKGvSOtFlzetkSf0%3d&risl=&pid=ImgRaw&r=0', icon: 'zoom_out_map',},],}},
    { [path]: "feedback", title: "Feedback", data:{left: {name: 'info', status: 'normal', }, right: {name: 'info', }, type: 'alert', isTextEvent: false, textEvent: 'Dismiss', tagOnRight: 'testOnRight',}},
    { [path]: "modal-iframe", title: "ModalIframe", data:{  title: 'Titulo', icon: 'close',}},
    { [path]: "modal", title: "Modal", data:{icon: 'close', title: 'The standard Lorem', tagOnClose: 'testOnClose', wrapper: true,}},
    { [path]: "paginator", title: "Paginator", data: {  iconPrevious: 'arrow_back_ios', iconNext: 'arrow_forward_ios', size: 'small', maxNumbers: 10,}},
    { [path]: "link", title: "Link", data:{  text: 'xdxd', size: 'small', isBold: false, disabled: false, id: '123', icon: 'person',}},
    { [path]: "breadcum", title: "Breadcum", data:{tagOnItem: 'testOnItem', tagOnBack: 'testOnBack', textItems: [{value: 'text1', text: 'Firt text', }, {value: 'text2', text: 'Second text', }, {value: 'text3', text: 'Third text large end', },], icon: 'home', textColor: 'black',}},
    { [path]: "oustandingModule", title: "OustandingModule", data: {image: {mobile: 'https://fmrockandpop.com/media/k2/items/cache/2ded9d06202dff1f6b8071cb70aba6eb_L.webp?t=20220524_174959', desktop: 'https://images.vexels.com/media/users/3/204811/isolated/preview/a307512393af96412f590360aba3fdfd-mujer-feliz-con-car-aacute-cter-de-libros-by-vexels.png',}, title: 'Perfil de ingreso',text: 'At vero eos et accusamus et iusto odio dignissi ducimus qui blanditiis praesentium voluptatum\n\n- Atque corrupti quos dolores et quas molestias \n- Excepturi sint occaecati cupiditate non provident\n- Excepturi sint occaecati cupiditate non providentExcepturi sint occaecati cupiditate non provident', backgroundColor: '#8B9BA3',}},
    { [path]: "promoLink", title: "PromoLink", data: {  urlImage: { mobile: 'https://thumbs.dreamstime.com/z/fondo-del-coraz%C3%B3n-del-amor-del-arco-iris-60045149.jpg', desktop: 'https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=',}, text: 'Mab', icon: 'person', color: '', opacity: '', height: '300px', enable: true, nobackground: false,}},
    { [path]: "numbers", title: "Numbers", data:{  icon: 'person', prefix: '+', number: '1222', suffix: '+', title: 'hola', body: 'aaa', container: true,}},
    { [path]: "navDrawer", title: "NavDrawer", data:{ text: 'Hola', iconselected: false, linkselected: false, isleft: false, singleaction: false, morecontent: false, activesingle: false}},
    { [path]: "cardWebsite", title:"CardWebsite", data:{ 
        urlImage: 'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
        subtitle: 'SUBTITULO',
        title: 'Coursera y UANE se unen para ti',
        text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
        border: true,
        allContent: true,
        height: '',
        isShowCardWebsiteContent: true,
        id: '',
        type: 'small',
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
          text: 'vvv',
          iconSecond: 'person',
          isBold: true,
          size: 'large',
          isUnderline: false,
          disabled: false,
          icon: 'person',
        },
        wrapper: true
      }
    },
    { [path]: "banner", title:"Banner", data:{ title: 'Hola', subtitle: 'jejeje', state: 'black', size: 'small', middle: false, center: false, bottom: false, left: false, urlImage: {mobile: 'https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_04.jpg', desktop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6K_vYDisviIeacdi_G2t5LzGol_o27rivExNw7wtm&s',}, overlay: '', height: '', action: {id: 'undefined', type: 'primary', title: "Hola", size: 'small', icon: "person", lyIcon: false, disabled: false, isExpand: false, tagOnClick: 'testClick', test: ''}, wrapper: true}},
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
    },
    {
      [path]: 'carousel',
      title: 'Carousel',
      data: {
        iconleft: 'arrow_back_ios',
        iconright: 'arrow_forward_ios',
        size: '',
        slides: [
          {
            urlImage:
              'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: 'SUBTITULO',
            title: 'Coursera y UANE se unen para ti',
            text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkIcon: {
              text: '',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
            linkText: {
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
          },
          {
            urlImage:
              'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: 'SUBTITULO',
            title: 'Coursera y UANE se unen para ti',
            text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkIcon: {
              text: '',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
            linkText: {
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
          },
          {
            urlImage:
              'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: 'SUBTITULO',
            title: 'Coursera y UANE se unen para ti',
            text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkIcon: {
              text: '',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
            linkText: {
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
          },
          {
            urlImage:
              'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: 'SUBTITULO',
            title: 'Coursera y UANE se unen para ti',
            text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkIcon: {
              text: '',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
            linkText: {
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
          },
          {
            urlImage:
              'https://image.shutterstock.com/image-photo/graduates-student-graduation-caps-thrown-260nw-1937758900.jpg',
            subtitle: 'SUBTITULO',
            title: 'Coursera y UANE se unen para ti',
            text: 'Se firma una alianza con Coursera para acceder a contenidos que complementen la formación profesional de su comunidad educativa',
            border: true,
            allContent: true,
            height: '',
            isShowCardWebsiteContent: true,
            id: '',
            type: 'vertical',
            link: true,
            background: false,
            linkIcon: {
              text: '',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
            linkText: {
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
              isUnderline: false,
              disabled: false,
              iconFirst: '',
            },
          },
        ],
        wrapper: true,
      }
    },
    {
      [path]: "slider",
      title: "Slider",
      data: {
        width: '100%',
        height: '100%',
        iconleft: 'arrow_back_ios',
        iconright: 'arrow_forward_ios',
        slides: [
          {
            urlImage: {
              mobile:
                'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',

              desktop:
                'https://image.shutterstock.com/image-photo/lake-teletskoye-altai-republic-siberia-260nw-2155866837.jpg',
            },
            heightmobile: '',
            title: 'Estudia una carrera a tu ritmo ¡y aprovecha tu fin de semana!',
            text: 'Carreras sabatinas con sesiones sabatinas de 4 horas',
            description: 'probando slide',
            center: false,
            left: false,
            middle: false,
            bottom: false,
            action: {
              ...ButtonInit,
              title: 'Conocer más',
            },
            link: {
              ...LinkIconsInit,
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
            },
          },
          {
            urlImage: {
              mobile:
                'https://image.shutterstock.com/image-photo/lake-teletskoye-altai-republic-siberia-260nw-2155866837.jpg',

              desktop:
                'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
            },
            heightmobile: '250px',
            title: 'Estudia una carrera a tu ritmo ¡y aprovecha tu fin de semana!',
            text: 'Carreras sabatinas con sesiones sabatinas de 4 horas',
            description: 'probando slide',
            center: true,
            left: false,
            middle: false,
            bottom: false,
            action: {
              ...ButtonInit,
              title: 'Aceptar',
            },
            link: {
              ...LinkIconsInit,
              text: 'Conocer más',
              iconSecond: 'arrow_forward_ios',
              isBold: true,
              size: 'large',
            },
          },
        ],
        wrapper: true,
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