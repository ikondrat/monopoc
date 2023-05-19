import axios from 'axios';
import mockedPlace from './mockedPlace.json';
import { Place } from './types';

export default async function getPlaceByURL(url: string): Promise<Place | undefined> {
  const response = await axios.get<typeof mockedPlace>(url);
  
  const phoneContact = response.data.addresses[0].contacts.find(contact => 'contact_type' in contact && contact.contact_type === 'phone');
  const urlContact = response.data.addresses[0].contacts.find(contact => 'contact_type' in contact && contact.contact_type === 'url');

  const result = {
    name: response.data.displayed_what,
    address: response.data.displayed_where,
    working_hours: response.data.opening_hours,
    phone_number: phoneContact ? phoneContact.call_link : undefined,
    website: urlContact ? urlContact.url : undefined,
  }
  return result
}
