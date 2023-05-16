import axios from 'axios';
import { Place } from './types';

export default async function addPlace(place: Place) {
  try {
    axios({
      url: 'http://localhost:8080/v1/graphql',
      method: 'post',
      data: {
        query: `
            mutation InsertPlaces {
              insert_places(objects: {address: "${place.address}", places_working_hour: {data: {monday: "AS"}}, name: "${place.name}", phone_number: "asas", website: "ASas"}) {
                returning {
                  name
                }
              }
            }
          `
      }
    }).then((result) => {
      console.log(result.data)
    });
  } catch (error) {
    console.error(error);
  }
}
