import { Grid } from '@mui/material'
import { Place, PlaceProps } from '../Place'

export function Places({ places }: { places: PlaceProps[] }) {
  return (
    <Grid container spacing={4}>
      {places.map((place: PlaceProps) => (
        <Grid item xs={4} key={place.name}>
          <Place {...place} />
        </Grid>
      ))}
    </Grid>
  )
}
