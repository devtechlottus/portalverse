import { useState } from "react"
import Head from "next/head"
import IconComponent from "@/components/Icon"
import Image from "@/components/Image"
import Map from "@/components/Map"
import ContentLayout from "@/layouts/Content.layout"
import ContentInsideLayout from "@/layouts/ContentInside.layout"
import HeaderFooterLayout from "@/layouts/HeaderFooter.layout"
import LinkContactTarget from "@/components/LinkContactTarget"
import Modal from "@/components/Modal"
import ContentFullLayout from "@/layouts/ContentFull.layout"
import BannerPortalverse from "@/components/BannerPortalverse"
import SliderPortalverse from "@/components/SliderImagesPortalverse"

const Campus = ({ data, banner, title }: any) => {

  // Modal functionality begin
  const [isShow, setIsShow] = useState(false);
  const handleVisibilityModal = () => {
    if (isShow) {
      setCoordsMap(null);
      setInfoMap("");
    }
    setIsShow(!isShow);
  };
  // Modal functionality end

  const [coordsMap, setCoordsMap] = useState<any>(null);
  const [infoMap, setInfoMap] = useState<string>("");

  const handleOpenModal = (coords: any, title: string) => {
    setCoordsMap(coords);
    setInfoMap(title);
    handleVisibilityModal();
  };

  return <>
    <Head>
      <title>{ title }</title>
    </Head>
    <HeaderFooterLayout>
      <ContentFullLayout classNames="w-d:hidden w-t:col-span-8 w-p:col-span-4">
        <BannerPortalverse data={ banner } />
      </ContentFullLayout>
      <ContentLayout>
        <BannerPortalverse classNames="w-t:hidden w-p:hidden" data={ banner } />        
        <Modal isShow={isShow} onClose={handleVisibilityModal} data={{icon: 'close', title: infoMap, tagOnClose: 'testOnClose', wrapper: true,}}>
          {
            !!coordsMap
              ? <Map coords={coordsMap} zoom={15} scroll classNamesMap="w-d:h-[583px] w-t:h-[581px] w-p:h-[355px] w-[100%]">
                  {
                    ({TileLayer, Marker, Popup}: any) => (
                      <>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                        <Marker position={coordsMap}>
                          <Popup><b>{ infoMap }</b></Popup>
                        </Marker>
                      </>
                    )
                  }
                </Map>
              : null
          }
        </Modal>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <Image alt="campus" src="https://viveloensaltillo.com/wp-content/uploads/2021/11/1254x851usne-768x521.png"></Image>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          <p className="font-Poppins font-bold text-10 leading-12.5">{`¿En cuál de nuestros ${data.length} campus te gustaría estudiar?`}</p>
        </div>
        <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
          {
            data.map(({ title, coords, description, images: items }: any, i: number) => <ContentInsideLayout classNames="mb-8" key={`campus-data-${i}`}>
                <SliderPortalverse data={{ items }} classNames="col-span-4 w-p:hidden" classNameSlide="aspect-2/1" />
                <Image classNames="w-d:hidden w-t:hidden col-span-4 w-t:col-span-4 w-p:col-span-4 w-p:aspect-2/1" alt={items[0].alt} src={items[0].src} />
                <div className="col-span-4 border w-t:col-span-4 w-p:col-span-4 border-gray-300 rounded pl-3">
                  <p className="font-Nunito font-normal text-base leading-5 my-2">{ description.state }</p>
                  <p className="font-Poppins font-semibold text-4.5 leading-5.625 my-2">{ description.name }</p>
                  <ContentInsideLayout>
                    <IconComponent name="marker" className="col-span-1 w-t:col-span-1 w-p:col-span-1" />
                    <p className="col-span-11 w-t:col-span-7 w-p:col-span-3">{ description.address }</p>
                  </ContentInsideLayout>
                  <ContentInsideLayout>
                    <IconComponent name="phone" className="col-span-1 w-t:col-span-1 w-p:col-span-1 w-4 mt-2" />
                    <LinkContactTarget type="phone" info={description.phone} classNames="col-span-11 w-t:col-span-7 w-p:col-span-3"/>
                  </ContentInsideLayout>
                  <ContentInsideLayout>
                    <IconComponent name="email" className="col-span-1 w-t:col-span-1 w-p:col-span-1 w-4 mt-2" />
                    <LinkContactTarget type="email" info={description.email} classNames="col-span-11 w-t:col-span-7 w-p:col-span-3" />
                  </ContentInsideLayout>
                  <div className="flex justify-end pr-3" onClick={() => handleOpenModal(coords, title)}>
                    <p>Ver mapa</p>
                    <IconComponent name="eye" className="ml-1 w-4" />
                  </div>
                </div>
                <Map coords={coords} classNames="w-t:hidden w-p:hidden col-span-4 w-t:col-span-3 w-p:col-span-4" classNamesMap="h-[214px]">
                  {
                    ({TileLayer, Marker, Popup}: any) => (
                      <>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                        <Marker position={coords}>
                          <Popup><b>{ description.name }</b></Popup>
                        </Marker>
                      </>
                    )
                  }
                </Map>
              </ContentInsideLayout>
            )
          }
        </div>
      </ContentLayout>
    </HeaderFooterLayout>
  </>
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const campusAll = [
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["25.4551028", "-100.9690094"],
      description: {
        state: "Coahuila",
        name: "Campus Campus Saltillo",
        address: "Blvd. José Musa de León #944, Col. Los Pinos, Saltillo, Coahuila, C.P. 25204",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["25.5770235", "-103.4519563"],
      description: {
        state: "Coahuila",
        name: "Campus Torreón",
        address: "Periférico Raúl López Sánchez # 13, Col. El Roble II, Torreón, Coah., C.P. 27119",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["26.9017234", "-101.4222771"],
      description: {
        state: "Coahuila",
        name: "Campus Monclova",
        address: "Miguel Blanco Num. 140, Colonina Zona Centro, Monclova, Coahuila, C.P. 25700",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["27.8739617", "-101.1280291"],
      description: {
        state: "Coahuila",
        name: "Campus Sabinas",
        address: "Calle Cuauhtémoc #2552, Col. Prolongación Fundadores,Sabinas, Coah. C.P. 26740",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["28.6791114", "-100.5440673"],
      description: {
        state: "Coahuila",
        name: "Campus Piedras Negras",
        address: "Arq. Germán Robles Gil Maza #310 Fracc, S. Felipe, Sur, 26070 Piedras Negras, Coah.",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["25.680335", "-100.318919"],
      description: {
        state: "Nuevo León",
        name: "Campus Monterrey",
        address: "José Ma. Pino Suarez #506, Zona Centro, Monterrey, N.L., C.P. 64000",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["26.066566", "-98.335228"],
      description: {
        state: "Tamaulipas",
        name: "Campus Reynosa",
        address: "Avenida Paraíso N°102, Fraccionamiento, Casa Bella, Reynosa, Tamaulipas, C.P. 88747",
        phone: "",
        email: ""
      }
    },
    {
      images: [
        {
          src: "https://picsum.photos/200/300",
          alt: "image-1"
        },
        {
          src: "https://picsum.photos/300/400",
          alt: "image-2"
        },
        {
          src: "https://picsum.photos/400/500",
          alt: "image-3"
        },
      ],
      coords: ["25.8874448", "-97.5645895"],
      description: {
        state: "Tamaulipas",
        name: "Campus Matamoros",
        address: "PROLONGACIÓN CONSTITUYENTES NÚMERO 1002 COL. LAS RUSIAS CP 87560",
        phone: "",
        email: ""
      }
    },
  ];

  return {
    props: { data: [ ...campusAll ], title: "Campus", banner:{title: "Nuestros Campus", subtitle: "Agrega experiencias internacionales a tus estudiso ", image: "https://www.elegircarrera.net/blog/wp-content/uploads/2017/10/campus-universitario-2000x1200.jpg"} },
  }
}

export default Campus