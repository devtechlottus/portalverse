import fetcher from "@/utils/fetcher"
import getBlogPosts from "@/utils/getBlogPosts"

const getBlogPageData = async () => {
  const blogPageData = await fetcher<any>(
    //@ts-ignore
    process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    query,
    process.env.NEXT_PUBLIC_STRAPI_TOKEN
  );

  const listConfigData = blogPageData?.blogPage?.data?.attributes?.sections?.[1];
  const { title, maxentries, relatesto, sortdate } = listConfigData;
  const blogPosts = await getBlogPosts({ maxentries, sortdate });

  const blogPostsData = { title, blogPosts };

  return { blogPageData, blogPostsData };
};

const query = `
query BlogPage {
  blogPage {
		data {
      attributes {
        title
        slug
        seo {
          metaTitle
        }
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
}
`

export default getBlogPageData