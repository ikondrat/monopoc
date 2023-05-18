import { Place } from './types';
import useGraphql from './useGraphql';

export default async function addPlace(place: Place) {
  try {
    const working_hours: Record<string, string> = {}
    Object.entries(place.working_hours).map(([key, value]) => {
      working_hours[key] = value.join(',');
    });
    const hours = JSON.stringify(working_hours).replace(/"/g, '\\"');
    await useGraphql(`
      mutation InsertPlaces {
        insert_places(objects: {address: "${place.address}", working_hours: ${hours}, name: "${place.name}", phone_number: "${place.phone_number}", website: "${place.website}"}) {
          returning {
            name
          }
        }
      }
    `)
  } catch (error) {
    console.error(error);
  }
}
