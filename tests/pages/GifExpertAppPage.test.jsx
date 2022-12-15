import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertAppPage } from '../../src/pages/GifExpertAppPage';


describe(`Pruebas en la page <GifExpertAppPage />`, () => {
    const newCategory = 'Saitama';

    it('Creamos el snapshot', () => {
        const { container } = render(<GifExpertAppPage />);
        expect( container ).toMatchSnapshot();
    });


    it('Verificar que no exista valores repetidos en el arreglo de búsquedas', async () => {
        const { container } = render(<GifExpertAppPage />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        //disparo los eventos para agregar una categoría
        await fireEvent.input(input, { target: { value: newCategory } });
        await fireEvent.submit(form);//agrega Saitama

           //Intento agregar la misma categoria
        await fireEvent.input(input, { target: { value: newCategory } });
        await fireEvent.submit(form); //intento agregar Saitama nuevamente

        // screen.debug();

           //espero que no agregue la misma categoría y sólo esté agregada la primera vez
           expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(1);
    });
});