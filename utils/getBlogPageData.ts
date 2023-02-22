import fetcher from "@/utils/fetcher"
import getBlogPosts from "./getBlogPosts"

const getBlogPageData = async  () => {
  //@ts-ignore
  const blogPageData = await fetcher<any>(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API, query, process.env.NEXT_PUBLIC_STRAPI_TOKEN)
  const listConfigData = blogPageData?.blogPage?.data?.attributes?.sections?.[1]
  const { title,
    maxentries,
    relatesto,
    sortdate,
  } = listConfigData
  const blogPostsData = await getBlogPosts({maxentries, sortdate})
  return {blogPageData, blogPostsData}
}

const query = `query BlogPage {
    blogPage {
      data {
        attributes {
          title
          slug
          sections {
            ...on ComponentSectionsHeroSlider {
              slide {
                title
                subtitle
                desktopImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                tabletImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ctaUrl
                ctaText
                contentVariant
                overlay
              }
            }
            ...on ComponentSectionsListconfig {
              title
              maxentries
              relatesto
              sortdate
            }
          }
        }
      }
    }
  }`

export default getBlogPageData