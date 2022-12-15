import { render, screen } from "@testing-library/react";
import { GifItemComponent } from '../../../src/pages/components/GifItemComponent';


describe(`Pruebas en el componente <GifItemComponent />`, () => {
    const imageMock = {
        id: '1',
        title: 'Spiderman',
        url: 'https://www.google.com/'
    }

    it('Debe de hacer match con el snaptshot', () => {
        // Renderiza un componente en memoria
        // actualiza el objeto "screen" que es parte del @testing-library
        const { container } = render(<GifItemComponent image={ imageMock } />);
        expect( container ).toMatchSnapshot();
    });


    it('Debe de mostrar la imagen con el SRC y el ALT', () => {
        render(<GifItemComponent image={ imageMock } />);
        const getImage = screen.getByRole('img');
        // screen.debug();

        expect( imageMock.url ).toBe( getImage.src );
        expect( imageMock.title ).toBe( getImage.alt );
    });
});