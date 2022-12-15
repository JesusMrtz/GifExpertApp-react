import { getGifs } from "../../../src/pages/helpers/getGifs";


describe('Pruebas en el archivo getGifs.js', () => {
    it('Debe de retornar un arreglo de gifs', async() => {
        const getImageGifs = await getGifs('Dragon Ball');

        expect( getImageGifs.length ).toBeGreaterThan(0);
        expect( getImageGifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});