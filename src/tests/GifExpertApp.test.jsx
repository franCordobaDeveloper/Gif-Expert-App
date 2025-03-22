import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
    test('debe de tener el estado inicialmente correcto', () => {
        render(<GifExpertApp/>)
        //screen.debug();
        expect( screen.getByText('One punch')).tobeInTheDocument();
    });
});