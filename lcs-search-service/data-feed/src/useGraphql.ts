import axios from 'axios';

export default async function useGraphql(gqlQuery: string) {
  try {
    if (!process.env.GRAPHQL_ENDPOINT) {
      throw new Error('GRAPHQL_ENDPOINT is not defined');
    }
    const result = await axios({
      url: process.env.GRAPHQL_ENDPOINT,
      method: 'post',
      data: {
        query: gqlQuery
      }
    })
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
