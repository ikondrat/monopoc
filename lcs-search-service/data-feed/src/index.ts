import addPlace from './addPlace';
import getPlaceByURL from './getPlaceByURL';

async function main() {
    ["GXvPAor1ifNfpF0U5PTG0w", "ohGSnJtMIC5nPfYRi_HTAg"].forEach(async (objId) => {
        const place = await getPlaceByURL(`${process.env.SOURCE_API_URL}/${objId}`)
        if (place) {
            addPlace(place)
            console.log(`data feeder imported: ${place}`);
        }
    })
}


console.log(`data feeder running`);
main()
console.log(`data feeder running: done`);