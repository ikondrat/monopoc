import mockedPlace from './mockedPlace.json';
import serializeWorkingHours from './serializeWorkingHours';

describe('serializeWorkingHours', () => {

  it('should serialise working hours', async () => { 
    const result = serializeWorkingHours(mockedPlace.opening_hours)

    expect(result).toMatchInlineSnapshot(`
{
  "friday": [
    "11:30-14:00",
    "18:30-22:00",
  ],
  "monday": [
    "11:30-14:00",
    "18:30-22:00",
  ],
  "thursday": [
    "11:30-14:00",
    "18:30-22:00",
  ],
  "tuesday": [
    "11:30-14:00",
    "18:30-22:00",
  ],
  "wednesday": [
    "11:30-14:00",
    "18:30-22:00",
  ],
}
`)
  })
})