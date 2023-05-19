'use client'
import { gql, useQuery } from '@apollo/client'
import { Container, Grid, Link, Typography } from '@mui/material'
import WorkingHours from './WorkingHours'

type PageParams = {
  params: {
    id: string
  }
}

const PLACE_DETAILS = gql`
  query PlaceDetails($id: uuid!) {
    places(where: { uuid: { _eq: $id } }) {
      name
      address
      phone_number
      uuid
      website
      working_hours
    }
  }
`

export default function Page(props: PageParams) {
  const { data, loading } = useQuery(PLACE_DETAILS, {
    variables: { id: props.params.id }
  })

  if (loading) return <Container maxWidth="lg">Loading...</Container>

  const place = data?.places[0]
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h6">Address</Typography>
              <Typography variant="body1" sx={{ pl: 2 }}>
                {place?.address}
              </Typography>
            </Grid>
            {place?.website && (
              <Grid item>
                <Typography variant="h6">Website</Typography>
                <Typography variant="body1" sx={{ pl: 2 }}>
                  <Link href={place?.website}>{place?.website}</Link>
                </Typography>
              </Grid>
            )}
            {place.phone_number && (
              <Grid item>
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1" sx={{ pl: 2 }}>
                  <Link href={`tel:${place?.phone_number}`}>{place?.phone_number}</Link>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Openning hours</Typography>
          <WorkingHours working_hours={place?.working_hours.days} />
        </Grid>
      </Grid>
    </Container>
  )
}
