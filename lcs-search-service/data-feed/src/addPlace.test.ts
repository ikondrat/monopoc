import addPlace from './addPlace'
import * as graphqlRequest from 'graphql-request'

jest.mock('graphql-request', () => ({
  __esModule: true,
  ...jest.requireActual('graphql-request')
}))

describe('addPlace', () => {
  it('should call axios with the correct url', async () => {
    const mockedRequest = jest.fn()
    jest.spyOn(graphqlRequest, 'GraphQLClient').mockReturnValue({
      request: mockedRequest
    } as any)

    await addPlace({
      address: 'Stampfenbachstrasse 38, 8006 Zürich',
      name: 'Casa Ferlin',
      working_hours: {
        monday: ['11:30-14:00', '18:30-22:00'],
        tuesday: ['11:30-14:00', '18:30-22:00'],
        wednesday: ['11:30-14:00', '18:30-22:00'],
        thursday: ['11:30-14:00', '18:30-22:00'],
        friday: ['11:30-14:00', '18:30-22:00'],
        saturday: ['11:30-14:00', '18:30-22:00'],
        sunday: ['11:30-14:00', '18:30-22:00']
      }
    })

    expect(mockedRequest).toHaveBeenCalledWith(expect.anything(), {"address": "Stampfenbachstrasse 38, 8006 Zürich", "name": "Casa Ferlin", "phone_number": undefined, "website": undefined, "working_hours": {"friday": ["11:30-14:00", "18:30-22:00"], "monday": ["11:30-14:00", "18:30-22:00"], "saturday": ["11:30-14:00", "18:30-22:00"], "sunday": ["11:30-14:00", "18:30-22:00"], "thursday": ["11:30-14:00", "18:30-22:00"], "tuesday": ["11:30-14:00", "18:30-22:00"], "wednesday": ["11:30-14:00", "18:30-22:00"]}})
  })
})
