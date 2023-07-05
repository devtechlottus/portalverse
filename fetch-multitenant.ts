
async function multitenantFetcher(){

  const rawResponse = await fetch("https://uane--strapi--mzkgzv7slhxf.code.run/api/pallete?populate=*&populate[1]=*", {
    headers: {
      "Authorization": "Bearer b77a24aea271766e37fdef44667646cc0a02212e8c4c1114f8255d03dca1e45fb79bb54759874fac23758abc7e58a3a00591f40c79f747e1eb69f512f520ac3d2661243ee0b35592c8e8492687caf4c7ec87065b07abad637ceec0337cbe812fa4fa9d42b45c25e404e6e868f37d6b79038aa51e3d2925ff266ea38f8af85c48"
    }
  })
  const response = await rawResponse.json() 
  // const { data : { attributes: { primary, secondary, surface, contextual, complementary } } } = response
  console.group('Multitenant data:')

  
    console.log('response:', response);
    // console.log('primary:', primary);
    // console.log('secondary:', secondary);
    // console.log('surface:', surface);
    // console.log('contextual:', contextual);
    // console.log('complementary:', complementary);
  console.groupEnd
}
multitenantFetcher()
