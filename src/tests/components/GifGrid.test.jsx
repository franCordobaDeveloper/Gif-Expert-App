import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One punch';
    
    test('debe de mostrar el loading inicialment', () => { 
        render( <GifGrid category={ category }/> );
        // screen.debug();
        expect( screen.getByText('Cargando...')).toBeInTheDocument();
        expect( screen.getByText( category) ).toHaveTextContent(category);;
    });
});