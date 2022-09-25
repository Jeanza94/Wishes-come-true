import { render, screen, fireEvent } from "@testing-library/react";
import { FormContext } from "../src/FormContext";
import { TodoItem } from "../src/TodoItem";

describe('Pruebas en el componente <TodoItem/>', () => {

    test('Debe de mostrar el componente correctamente', () => {

        const mockHandleRemoveTodo = jest.fn();
        const mockHandleToggleTodo = jest.fn();

        const item = {
            id: 1,
            description: "lavar la losa",
            done: false
        }

        render(
            <FormContext.Provider value={{
                handleRemoveTodo: mockHandleRemoveTodo,
                handleToggleTodo: mockHandleToggleTodo
            }}>
                <TodoItem item={item} />
            </FormContext.Provider>
        );

        expect(screen.getByText('lavar la losa'));

        const li = screen.getByLabelText('list');
        expect(li.className).toBe('todo-itemfalse')

        screen.debug();
    });

    test('debe de llamar la funcion handleToggle', () => {
        const mockHandleRemoveTodo = jest.fn();
        const mockHandleToggleTodo = jest.fn();

        const item = {
            id: 1,
            description: "lavar la losa",
            done: false
        }

        render(
            <FormContext.Provider value={{
                handleRemoveTodo: mockHandleRemoveTodo,
                handleToggleTodo: mockHandleToggleTodo
            }}>
                <TodoItem item={item} />
            </FormContext.Provider>
        )
        const li = screen.getByLabelText('list');
        fireEvent.doubleClick(li);
        expect(mockHandleToggleTodo).toHaveBeenCalledTimes(1);

    });

    test('debe de llamar la funcion handleRemoveTodo', () => {
        const mockHandleRemoveTodo = jest.fn();
        const mockHandleToggleTodo = jest.fn();

        const item = {
            id: 1,
            description: "lavar la losa",
            done: false
        }

        render(
            <FormContext.Provider value={{
                handleRemoveTodo: mockHandleRemoveTodo,
                handleToggleTodo: mockHandleToggleTodo
            }}>
                <TodoItem item={item} />
            </FormContext.Provider>
        )
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockHandleRemoveTodo).toHaveBeenCalledTimes(1);

    });

});