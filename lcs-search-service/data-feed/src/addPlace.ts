import { GraphQLClient, gql } from 'graphql-request'
import { Place } from './types'

const query = gql`
  mutation InsertPlaces(
    $address: String!
    $name: String!
    $working_hours: json
    $phone_number: String
    $website: String
  ) {
    insert_places(
      objects: {
        address: $address
        working_hours: $working_hours
        name: $name
        phone_number: $phone_number
        website: $website
      }
    ) {
      affected_rows
    }
  }
`

export default async function addPlace(place: Place) {
  const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT)
  await client.request(query, {
    address: place.address,
    working_hours: place.working_hours,
    name: place.name,
    phone_number: place.phone_number,
    website: place.website
  })
}
