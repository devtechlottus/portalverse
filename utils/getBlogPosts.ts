import fetcher from "@/utils/fetcher"

const getBlogPosts = async  (variables: any) => {
  const {maxentries, sortdate} = variables
  const querySortDate = sortdate === "latest" ? "publication_date:desc" : "publication_date:asc"
  const queryVariables = {
    maxentries,
    sortdate: querySortDate
  }
  //@ts-ignore
  const data = await fetcher<any>(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API, query, process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_TOKEN, queryVariables)
  
  return data
}

const query = `query BlogEntries ($maxentries:Int, $sortdate:[String]) {
    blogPosts(pagination:{page:1, pageSize:$maxentries}, sort:$sortdate){
      data {
        attributes {
          title
          slug
          publication_date
                  featured_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`

export default getBlogPosts