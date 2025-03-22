import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One punch';
    
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );
        // screen.debug();
        expect( screen.getByText('Cargando...')).toBeInTheDocument();
        expect( screen.getByText( category) ).toHaveTextContent(category);;
    });

    test('debe de mostrar items cuando se cargar las imagenes d', () => {
        
        const gifs = [
            {
                id: 'asd',
                title: 'Saitama',
                url: 'https://localhost/saitam.jpg'
            },
            {
                id: 'asdd',
                title: 'Saitamaa',
                url: 'https://localhost/saitama.jpg'
  
            },         
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/> );

        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});