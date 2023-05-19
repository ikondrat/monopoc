import { WorkingHours } from './types'
const days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export const groupByWorkingHours = (working_hours: WorkingHours) => {
  const items = [] as any
  let prevKey: string = ''
  days.forEach((day: any) => {
    // @ts-ignore
    const dayData = day in working_hours ? working_hours[day] : undefined
    const key = JSON.stringify(dayData)
    if (!dayData) return

    if (prevKey === key) {
      items[items.length - 1][0].push(day)
    } else {
      items.push([[day], dayData.map((item: any) => `${item.start}-${item.end}`).sort()])
      prevKey = key
    }
  })

  return items
}
