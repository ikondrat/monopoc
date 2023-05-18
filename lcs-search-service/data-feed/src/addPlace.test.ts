import mockedPlace from './mockedPlace.json';
import addPlace from './addPlace';
import * as useGraphql from './useGraphql';

jest.mock('./useGraphql', () => ({
  __esModule: true,
  ...jest.requireActual('./useGraphql')
}));

describe('addPlace', () => {

  it('should call axios with the correct url', async () => {
    const mockedGraphql = jest.spyOn(useGraphql, 'default').mockResolvedValue(mockedPlace)
    addPlace({
      "address": "Stampfenbachstrasse 38, 8006 Zürich",
      "name": "Casa Ferlin",
      "working_hours": {
        "monday": [ "11:30-14:00", "18:30-22:00" ],
        "tuesday": [ "11:30-14:00", "18:30-22:00" ],
        "wednesday": [ "11:30-14:00", "18:30-22:00" ],
        "thursday": [ "11:30-14:00", "18:30-22:00" ],
        "friday": [ "11:30-14:00", "18:30-22:00" ],
        "saturday": [ "11:30-14:00", "18:30-22:00" ],
        "sunday": [ "11:30-14:00", "18:30-22:00" ],
      }
    })

    expect(mockedGraphql).toHaveBeenCalled()
  })

});