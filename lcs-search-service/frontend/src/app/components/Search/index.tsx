import { gql, useQuery } from '@apollo/client'

const SEARCH_PLACES = gql`
  query searchByNameOrAddress($search: String!) {
    places(distinct_on: name, where: { _or: [{ address: { _like: $search } }, { name: { _like: $search } }] }) {
      name
    }
  }
`
export function Search({ value }: { value: string }) {
  const { data } = useQuery(SEARCH_PLACES, {
    variables: { search: `%${value}%` }
  })
  return <div>I am search: {data?.places.length}</div>
}
