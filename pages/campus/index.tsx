import Image from "@/components/Image";
import ContentInsideLayout from "@/layouts/ContentInside.layout";

const Campus = ({ data }: any) => {
  console.log("data", data);
  return <ContentInsideLayout classNames="gap-6">
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4">
      <Image alt="campus" src="https://viveloensaltillo.com/wp-content/uploads/2021/11/1254x851usne-768x521.png"></Image>
    </div>
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-18">
      <p className="font-Poppins font-bold text-10 leading-12.5">{`¿En cuál de nuestros ${data.length} campus te gustaría estudiar?`}</p>
    </div>
    <div className="col-span-12 w-t:col-span-8 w-p:col-span-4 mt-18">
      {
        data.map(({ title, coords, description, image }: any, i: number) => <ContentInsideLayout key={`campus-data-${i}`}>
            <Image classNames="col-span-4" alt={`campus-image-${i}`} src={image} />
            <div className="col-span-4 border border-gray-300 rounded pl-3">
              <p>{ title }</p>
              <p>{ description.state }</p>
              <p>{ description.name }</p>
              <p>{ description.address }</p>
              <p>{ description.phone }</p>
              <p>{ description.email }</p>
            </div>
            {/* <Map classNames="col-span-4" /> */}
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
      lon: "19.46439",
      lat: "-99.12108"
    },
    // https://www.openstreetmap.org/query?lat=19.41591&lon=-99.04127
    {
      lon: "19.41591",
      lat: "-99.04127"
    },
    // https://www.openstreetmap.org/query?lat=19.41976&lon=-99.08964
    {
      lon: "19.41976",
      lat: "-99.08964"
    },
    // https://www.openstreetmap.org/query?lat=19.48365&lon=-99.06166
    {
      lon: "19.48365",
      lat: "-99.06166"
    },
  ];
  const images = [
    "https://randompicturegenerator.com/img/national-park-generator/g9db90a4895fd247d6ec1bdcc1f23670677923dd749071f7caa35f1e1515b1d5acd1c3ef3c325fdbb9a492d3e3f48f842_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/gad38a27d3bf053db62da0024f15492145e5cceb227371b0755fed1def74efefb5540c9f0021cbf5c68fd1ad08b2be74c_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/g49d2e5ff72fda75e0ee250194cb54fd1101db07454ac95922535a8abcc3a683ae845a6e8da24a33af554e714f7392966_640.jpg",
    "https://randompicturegenerator.com/img/national-park-generator/g088288e88cfbfe923c5cdd9f0112c0a773427f9aed044d5be3a9e709dc4f6197d118526a69c1dd6188ca94da2408f4cc_640.jpg",
  ]
  const campusAll = coords.map((coords: any, i: number) => ({
    title: `Campus ${i}`,
    image: images[i],
    coords,
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