import IconComponent from "@/components/Icon";
import Image from "@/components/Image";
import Map from "@/components/Map";
import ContentInsideLayout from "@/layouts/ContentInside.layout";

const Campus = ({ data }: any) => {
  return <ContentInsideLayout classNames="gap-6">
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
      <Image alt="campus" src="https://viveloensaltillo.com/wp-content/uploads/2021/11/1254x851usne-768x521.png"></Image>
    </div>
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-18">
      <p className="font-Poppins font-bold text-10 leading-12.5">{`¿En cuál de nuestros ${data.length} campus te gustaría estudiar?`}</p>
    </div>
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-18">
      {
        data.map(({ title, coords, description, image }: any, i: number) => <ContentInsideLayout classNames="mb-8" key={`campus-data-${i}`}>
            <Image classNames="col-span-4 w-t:col-span-3 w-p:col-span-4" alt={`campus-image-${i}`} src={image} />
            <div className="col-span-4 border w-t:col-span-2 w-p:col-span-4 border-gray-300 rounded pl-3">
              <p className="font-Nunito font-normal text-base leading-5 my-2">{ title }</p>
              <p className="font-Poppins font-semibold text-4.5 leading-5.625 mb-2">{ description.state }</p>
              <p className="flex mb-2">
                <IconComponent name="marker" className="mr-3" />
                { description.address }
              </p>
              <p className="flex mb-2">
                <IconComponent name="phone" className="mr-3 w-4" />
                { description.phone }
              </p>
              <p className="flex mb-2">
                <IconComponent name="email" className="mr-3 w-4" />
                { description.email }
              </p>
              <div className="flex justify-end pr-3">
                <p>Ver mapa</p>
                <IconComponent name="eye" className="ml-1 w-4" />
              </div>
            </div>
            <Map coords={coords} classNames="col-span-4 w-t:col-span-3 w-p:col-span-4">
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
  </ContentInsideLayout>
};

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const coords = [
    // https://www.openstreetmap.org/query?lat=19.46439&lon=-99.12108
    {
      lat: "19.46439",
      lon: "-99.12108"
    },
    // https://www.openstreetmap.org/query?lat=19.41591&lon=-99.04127
    {
      lat: "19.41591",
      lon: "-99.04127"
    },
    // https://www.openstreetmap.org/query?lat=19.41976&lon=-99.08964
    {
      lat: "19.41976",
      lon: "-99.08964"
    },
    // https://www.openstreetmap.org/query?lat=19.48365&lon=-99.06166
    {
      lat: "19.48365",
      lon: "-99.06166"
    },
  ];
  const images = [
    "https://randompicturegenerator.com/img/national-park-generator/g9db90a4895fd247d6ec1bdcc1f23670677923dd749071f7caa35f1e1515b1d5acd1c3ef3c325fdbb9a492d3e3f48f842_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/gad38a27d3bf053db62da0024f15492145e5cceb227371b0755fed1def74efefb5540c9f0021cbf5c68fd1ad08b2be74c_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/g49d2e5ff72fda75e0ee250194cb54fd1101db07454ac95922535a8abcc3a683ae845a6e8da24a33af554e714f7392966_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/g088288e88cfbfe923c5cdd9f0112c0a773427f9aed044d5be3a9e709dc4f6197d118526a69c1dd6188ca94da2408f4cc_640.jpg",
  ]
  const campusAll = coords.map(({ lat, lon }: any, i: number) => ({
    title: `Campus ${i}`,
    image: images[i],
    coords: [lat, lon],
    description: {
      state: "State 1",
      name: `Campus ${i}`,
      address: "cscd lsdcsd lskdncklds lskd clsd",
      phone: "48758734435",
      email: "bcoiwnwe@csdlcns.mmv"
    },
  }));

  return {
    props: { data: [ ...campusAll ] },
  }
}


export default Campus;