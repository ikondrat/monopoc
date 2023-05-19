import mockedWorkingHours from './mockedWorkedHours.json'
import { groupByWorkingHours } from '.'

describe('groupByWorkingHours', () => {
  it('should group working days by the same hours and sort them', () => {
    const result = groupByWorkingHours({
      ...mockedWorkingHours,
      sunday: [
        { end: '14:00', start: '11:30', type: 'OPEN' },
        { end: '10:00', start: '09:30', type: 'OPEN' }
      ]
    } as any)
    const expected = [
      [
        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        ['11:30-14:00', '18:30-22:00']
      ],
      [['sunday'], ['09:30-10:00', '11:30-14:00']]
    ]

    expect(result).toEqual(expected)
  })

  it('should render separate groups for different non-adjastent ranges', () => {
    const result = groupByWorkingHours({
      monday: [{ end: '16:00', start: '09:30', type: 'OPEN' }],
      tuesday: [{ end: '14:00', start: '09:30', type: 'OPEN' }],
      wednesday: [{ end: '14:00', start: '09:30', type: 'OPEN' }],
      thursday: [{ end: '15:00', start: '09:30', type: 'OPEN' }],
      friday: [{ end: '15:00', start: '09:30', type: 'OPEN' }],
      sunday: [{ end: '14:00', start: '09:30', type: 'OPEN' }]
    } as any)
    const expected = [
      [['monday'], ['09:30-16:00']],
      [['tuesday', 'wednesday'], ['09:30-14:00']],
      [['thursday', 'friday'], ['09:30-15:00']],
      [['sunday'], ['09:30-14:00']]
    ]
    expect(result).toEqual(expected)
  })
})
