import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import Link from 'next/link'

export interface PlaceProps {
  name: string
  address: string
  uuid: string
}

export function Place({ name, address, uuid }: PlaceProps) {
  return (
    <Link href={`/place/${uuid}`}>
      <Card>
        <CardHeader title={name} />
        <CardContent>
          <Typography variant='body1'>{address}</Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
