import axios from 'axios';
import mockedPlace from './mockedPlace.json';
import serializeWorkingHours from './serializeWorkingHours';
import { Place } from './types';

export default async function getPlaceByURL(url: string): Promise<Place | undefined> {
  try {
    const response = await axios.get(url) as typeof mockedPlace;
    
    const result = {
      name: response.displayed_what,
      address: response.displayed_where,
      working_hours: serializeWorkingHours(response.opening_hours)
    }
    return result
  } catch (error) {
    console.error(error);
  }
}
