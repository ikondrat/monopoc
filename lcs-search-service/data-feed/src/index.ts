import addPlace from './addPlace';
import { bestPlaces } from './bestPlaces';
import getPlaceByURL from './getPlaceByURL';

export async function main() {
    const apiURL = process.env.SOURCE_API_URL
    const ids: string[] = ["GXvPAor1ifNfpF0U5PTG0w", "ohGSnJtMIC5nPfYRi_HTAg"]
    ids.forEach(async (objId: string) => {
        const place = await getPlaceByURL(`${apiURL}/${objId}`)
        if (place) {
            addPlace(place)
        }
    })

    // add some more places
    bestPlaces.forEach((place) => addPlace(place))
}

if (require.main === module) {
    main()
}


