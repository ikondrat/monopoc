import axios from 'axios';
import mockedPlace from './mockedPlace.json';
import { Place } from './types';

export default async function getPlaceByURL(url: string): Promise<Place | undefined> {
  const response = await axios.get<typeof mockedPlace>(url);
    
  const result = {
    name: response.data.displayed_what,
    address: response.data.displayed_where,
    working_hours: response.data.opening_hours
  }
  return result
}
