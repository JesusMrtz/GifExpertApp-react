import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategoryComponent } from "../../../src/pages/components/AddCategoryComponent";


describe(`Pruebas en el <AddCategoryComponent />`, () => {
    it('Debe cambiar el valor de la caja de texto', async() => {
        render(<AddCategoryComponent onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        /**
         * Simulamos el evento con el fireEvent y en el segundo parametro enviamos la información que deseamos que reciba
        */
        await fireEvent.input(input, { target: { value: 'Dragon Ball Z' } });
        // screen.debug();
        
        /** 3. Aserción  */
        expect( input.value ).toBe('Dragon Ball Z');
    });


    it('Debe llamar a la función onNewCategory() si el input tiene un valor', async () => {
        const inputValue = '     Saitama';

        // Creamos una simulación de una función para verificar si fue llamar el "onNewCategory"
        const onNewCategory = jest.fn();
        
        render(<AddCategoryComponent onNewCategory={ onNewCategory } />);

        // Se le agregó un role="form" en el formulario del componente
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        await fireEvent.input(input, { target: { value: inputValue } });
        await fireEvent.submit(form);

        expect( input.value ).toBe('');

        /** Verificamos que el "onNewCategory" fue llamado unavez con el valor de "Saitama" */
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith('Saitama');
    });


    it('No debe llamar al onNewCategory() si el input está vacio', async () => {
        // Creamos una simulación de una función para verificar si fue llamar el "onNewCategory"
        const onNewCategory = jest.fn();
        
        render(<AddCategoryComponent onNewCategory={ onNewCategory } />);

        // Se le agregó un role="form" en el formulario del componente
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        await fireEvent.input(input, { target: { value: '' } });
        await fireEvent.submit(form);

        /** Verificamos que el "onNewCategory" no fue llamado, ya que el input está vacío */
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
});