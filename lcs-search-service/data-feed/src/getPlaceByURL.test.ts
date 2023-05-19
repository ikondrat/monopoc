import axios from 'axios';
import mockedPlace from './mockedPlace.json';
import getPlaceByURL from './getPlaceByURL';

describe('getPlaceByURL', () => {
  const url = 'http://storage.googleapis.com/coding-session-rest-api/GXvPAor1ifNfpF0U5PTG0w'

  it('should call axios with the correct url', async () => { 
    const mock = jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedPlace})
    await getPlaceByURL(url)

    expect(mock).toHaveBeenCalledWith(url);
  })

  it('should return place data', async () => { 
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockedPlace})
    const result = await getPlaceByURL(url)
    
    expect(result).toMatchInlineSnapshot(`
{
  "address": "Stampfenbachstrasse 38, 8006 Zürich",
  "name": "Casa Ferlin",
  "phone_number": "+41443623509",
  "website": "http://www.casaferlin.ch",
  "working_hours": {
    "closed_on_holidays": true,
    "days": {
      "friday": [
        {
          "end": "14:00",
          "start": "11:30",
          "type": "OPEN",
        },
        {
          "end": "22:00",
          "start": "18:30",
          "type": "OPEN",
        },
      ],
      "monday": [
        {
          "end": "14:00",
          "start": "11:30",
          "type": "OPEN",
        },
        {
          "end": "22:00",
          "start": "18:30",
          "type": "OPEN",
        },
      ],
      "thursday": [
        {
          "end": "14:00",
          "start": "11:30",
          "type": "OPEN",
        },
        {
          "end": "22:00",
          "start": "18:30",
          "type": "OPEN",
        },
      ],
      "tuesday": [
        {
          "end": "14:00",
          "start": "11:30",
          "type": "OPEN",
        },
        {
          "end": "22:00",
          "start": "18:30",
          "type": "OPEN",
        },
      ],
      "wednesday": [
        {
          "end": "14:00",
          "start": "11:30",
          "type": "OPEN",
        },
        {
          "end": "22:00",
          "start": "18:30",
          "type": "OPEN",
        },
      ],
    },
    "open_by_arrangement": false,
  },
}
`);
  })

  
})