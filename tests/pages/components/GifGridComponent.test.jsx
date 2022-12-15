import { render, screen } from "@testing-library/react";
import { GifGridComponent } from "../../../src/pages/components/GifGridComponent";
import { userFetchGifs } from "../../../src/pages/hooks/useFetchGifs";


/** 
 * Creamos un mock del método useFetchGifs() para simular el retorno del valor que este debe devolver
 */
jest.mock('../../../src/pages/hooks/useFetchGifs');

describe(`Pruebas en el componente <GifGridComponent />`, () => {
    const category = 'Dragon Ball Z';

   it('Debe de mostrar el loading con el mensaje "Cargando"', () => {
    // Simulamos el retorno del mock para el método "useFetchGifs()"
    userFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });


    render(<GifGridComponent category={ category } />);

    expect( screen.getByRole('heading', { level: 2 }) ).toBeTruthy();
    expect( screen.getByText(category) ).toBeTruthy();
   }); 


   it('Debe de mostrar items cuando se carga las images desde useFetchGifs', () => {
        // Simulamos el retorno del mock para el método "useFetchGifs()"
        userFetchGifs.mockReturnValue({
            images: [
                {
                    id: '1',
                    title: 'Imagen 1',
                    url: 'https://imagen.jpg'
                },
                {
                    id: '2',
                    title: 'Imagen 2',
                    url: 'https://imagen2.jpg'
                }
            ],
            isLoading: false
        });


        render(<GifGridComponent  category={ category } />);
        
        expect( screen.getAllByRole('img').length ).toBe(2);
   });
});