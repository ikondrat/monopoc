import axios from 'axios';
import mockedPlace from './mockedPlace.json';
import getPlaceByURL from './getPlaceByURL';

describe('getPlaceByURL', () => {
  const url = 'https://storage.googleapis.com/coding-session-rest-api/GXvPAor1ifNfpF0U5PTG0w'

  it('should call axios with the correct url', async () => { 
    const mock = jest.spyOn(axios, 'get').mockResolvedValue(mockedPlace)
    await getPlaceByURL(url)

    expect(mock).toHaveBeenCalledWith(url);
  })

  it('should return place data', async () => { 
    jest.spyOn(axios, 'get').mockResolvedValue(mockedPlace)
    const result = await getPlaceByURL(url)
    
    expect(result).toMatchInlineSnapshot(`
{
  "address": "Stampfenbachstrasse 38, 8006 Zürich",
  "name": "Casa Ferlin",
  "working_hours": {
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
  },
}
`);
  })
})