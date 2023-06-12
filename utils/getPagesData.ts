import { fetchStrapiGraphQL } from "@/utils/getStrapi";

type PagesResponse = {
  pages: {
    data: Array<{
      id: number;
      attributes: {
        slug: string;
      };
    }>;
  };
};

const getPagesData = async () => {
  const pagesData = await fetchStrapiGraphQL<PagesResponse>(PAGES);
  return pagesData?.pages?.data;
};

const PAGES = `
query Pages {
  pages(pagination: {start: 0, limit: -1}) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
`;

export default getPagesData;
