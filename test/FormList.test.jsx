import { render, screen, fireEvent } from "@testing-library/react";
import { FormContext } from "../src/FormContext";
import { FormList } from "../src/FormList";
import { useForm } from "../src/hooks/useForm";

jest.mock('../src/hooks/useForm');

describe('Pruebas en el componente <FormList />', () => {
    beforeEach(() => jest.clearAllMocks());

    test('debe mostrar el componente correctamente', () => {
        const mockHandleButton = jest.fn();
        const mockHandleInputValue = jest.fn();

        useForm.mockReturnValue({
            // inputValue: '',
            handleButton: mockHandleButton,
            handleInputValue: mockHandleInputValue
        })

        render(
            <FormContext.Provider value={{ handleAddTodo: () => { } }}>
                <FormList />
            </FormContext.Provider>
        )

        expect(screen.getByText('Your Wish'));
        // screen.debug()
    });

    test('debe de llamar la funcion handleInputValue y la handleButton', () => {

        const mockHandleButton = jest.fn((e) => e.preventDefault());
        const mockHandleInputValue = jest.fn();
        const mockHandleAddTodo = jest.fn();
        // let mockInputValue = "jamon"

        useForm.mockReturnValue({
            // inputValue: mockInputValue,
            handleButton: mockHandleButton,
            handleInputValue: mockHandleInputValue
        })


        render(
            <FormContext.Provider value={{ handleAddTodo: mockHandleAddTodo }}>
                <FormList />
            </FormContext.Provider>
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'hola' } });
        expect(mockHandleInputValue).toHaveBeenCalledTimes(1);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockHandleAddTodo).toHaveBeenCalledTimes(1);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockHandleButton).toHaveBeenCalledTimes(2);

    });

});