import { render, screen } from "@testing-library/react";
import { FormProvider } from "../src/FormProvider";

describe('Pruebas en el componente <FormProvider />', () => {

    test('debe de mostrar el componente correctamente', () => {

        render(
            <FormProvider>
                <h1>hola</h1>
            </FormProvider>
        )

        expect(screen.getByText('hola'));
        // screen.debug();

    });

});