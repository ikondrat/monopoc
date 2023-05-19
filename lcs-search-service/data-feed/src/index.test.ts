import * as addPlace from './addPlace';
import * as getPlaceByURL from './getPlaceByURL';
import { main } from './index';
import mockedPlace from './mockedPlace.json';

jest.mock('./addPlace', () => ({
    __esModule: true,
    ...jest.requireActual('./addPlace')
}))

jest.mock('./getPlaceByURL', () => ({
    __esModule: true,
    ...jest.requireActual('./getPlaceByURL')
}))

describe('main', () => {
    it('calls getPlaceByUR with the correct url', async () => {
        const mocked_getPlaceByURL = jest.spyOn(getPlaceByURL, 'default').mockResolvedValue(mockedPlace as any);
        jest.spyOn(addPlace, 'default').mockResolvedValue(undefined);

        await main();

        expect(mocked_getPlaceByURL).toHaveBeenNthCalledWith(1, `${process.env.SOURCE_API_URL}/GXvPAor1ifNfpF0U5PTG0w`);
        expect(mocked_getPlaceByURL).toHaveBeenNthCalledWith(2, `${process.env.SOURCE_API_URL}/ohGSnJtMIC5nPfYRi_HTAg`);
    })

    it('calls addPlace with the correct data', async () => {
        jest.spyOn(getPlaceByURL, 'default').mockResolvedValue(mockedPlace as any);
        const mocked_addPlace = jest.spyOn(addPlace, 'default').mockResolvedValue(undefined);

        await main();

        expect(mocked_addPlace).toHaveBeenNthCalledWith(1, mockedPlace);
        expect(mocked_addPlace).toHaveBeenNthCalledWith(2, mockedPlace);
    })
})