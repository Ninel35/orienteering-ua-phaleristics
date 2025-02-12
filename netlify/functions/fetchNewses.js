export async function handler(event) {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API_URL;
  const { searchString = "" } = JSON.parse(event.body || "{}");

  let allNews = [];
  let skip = 0;
  const batchSize = 100;
  let hasMore = true;

  try {
    while (hasMore) {
      const response = await fetch(HYGRAPH_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query ($searchString: String!, $first: Int!, $skip: Int!) {
              newses(
                where: {OR: [{ title_contains: $searchString }, {text_contains: $searchString}]},
                first: $first,
                skip: $skip
              ) {
                id
                title
                photo {
                  url
                }
                categories
                year
              }
            }`,
          variables: {
            searchString: searchString,
            first: batchSize,
            skip: skip,
          },
        }),
      });
      const data = await response.json();
      const newsBatch = data.data.newses;
      allNews = [...allNews, ...newsBatch];

      hasMore = newsBatch.length === batchSize;
      skip += batchSize;
    }
    return {
      statusCode: 200,
      body: JSON.stringify(allNews),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
