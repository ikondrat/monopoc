import { gql, useQuery } from '@apollo/client'
import { Places } from './Places'

const SEARCH_PLACES = gql`
  query searchByNameOrAddress($search: String!) {
    places(distinct_on: name, where: { _or: [{ address: { _like: $search } }, { name: { _like: $search } }] }) {
      name
      address
      uuid
    }
  }
`

export function Search({ value }: { value: string }) {
  const { data } = useQuery(SEARCH_PLACES, {
    variables: { search: `%${value}%` }
  })

  if (!value) return <div>Type text to see results</div>
  return (
    <div>
      {data?.places.length && <Places places={data?.places} />}
      {!data?.places.length && <p>No results found for "{value}"</p>}
    </div>
  )
}
