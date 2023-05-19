import { Grid, Typography } from '@mui/material'
import { WorkingHoursType } from './types'
const days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export const groupByWorkingHours = (working_hours: WorkingHoursType): [[(typeof days)[number][], string[]]] => {
  const items = [] as any
  let prevKey: string = ''
  days.forEach((day: any) => {
    // @ts-ignore
    const dayData = day in working_hours ? working_hours[day] : undefined
    const key = dayData ? JSON.stringify(dayData) : 'closed'

    if (prevKey === key) {
      items[items.length - 1][0].push(day)
    } else {
      items.push([[day], dayData ? dayData.map((item: any) => `${item.start}-${item.end}`).sort() : []])
      prevKey = key
    }
  })

  return items
}

export default function WorkingHours({ working_hours }: { working_hours: WorkingHoursType }) {
  const items = groupByWorkingHours(working_hours)
  return (
    <>
      {items.map(item => (
        <Grid container key={JSON.stringify(item[0])} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">
              {item[0].length === 1 && item[0][0]}
              {item[0].length > 1 && [item[0][0], item[0][item[0].length - 1]].join(' - ')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {!item[1].length && <Typography variant="body1">Closed</Typography>}
            {item[1].length > 1 &&
              item[1].map(hours => (
                <Typography variant="body1" key={hours}>
                  {hours}
                </Typography>
              ))}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
