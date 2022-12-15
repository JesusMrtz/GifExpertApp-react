import { renderHook, waitFor } from "@testing-library/react";
import { userFetchGifs } from "../../../src/pages/hooks/useFetchGifs";


jest.mock('../../../src/pages/hooks/useFetchGifs');

describe('Pruebas en el archivo useFetchGifs.js pero usando mocks', () => {
    it('Debe de regresar el estado inicial del hook', () => {
        /** Simulamos la respuesta del useFetchGifs cuando es llamado dentro del hook  */
        userFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        /**
         * Los hooks solo pueden ser llamados dentro de un functional component 
         * Pero gracias a la libreria de testing-library podemos simular que estamos dentro de uno gracias al método renderHook
         */
        const { rerender, result, unmount } = renderHook(() => userFetchGifs('Dragon Ball Z'));
        // console.log(result);

        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });


    it('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
        /** Simulamos la respuesta del useFetchGifs cuando es llamado dentro del hook  */
        userFetchGifs.mockReturnValue({
            images: [
                {
                    id: '1',
                    title: 'Goku',
                    url: 'https://goku.jpg'
                },
                {
                    id: '2',
                    title: 'Vegeta',
                    url: 'https://vegeta.jpg'
                }
            ],
            isLoading: false
        });

        const { result } = renderHook(() => userFetchGifs('Dragon Ball'));

        /** Esperamos la respuesta de la API para obtener las imagenes  */
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        expect( userFetchGifs ).toBeCalled();
        
    });
});