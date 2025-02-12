export async function handler(event) {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API_URL;
  const { id } = JSON.parse(event.body || "{}");

  if (!HYGRAPH_ENDPOINT) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "HYGRAPH_API_URL is missing",
      }),
    };
  }
  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query ($id: ID!) {
            news(where: { id: $id }) {
              id
              title
              text
              photo {
                url
              }
              categories
            }
          }`,
        variables: {
          id: id,
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify(data.data.news),
      };
    } else {
      throw new Error(data.errors || "An error occurred");
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
