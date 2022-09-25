import { render, screen } from "@testing-library/react";
import { FormContext } from "../src/FormContext";
import { TodosList } from "../src/TodosList";

describe('Pruebas en el TodoList', () => {

    test('Debe de mostrar el componente correctamente', () => {

        const todos = [
            { id: 1, description: 'lavar la losa', done: false },
            { id: 2, description: 'sacar la basura', done: false },
            { id: 3, description: 'planchar la ropa', done: false },
        ]

        const { container } = render(
            <FormContext.Provider value={{ todos: todos }}>
                <TodosList />
            </FormContext.Provider>
        )

        expect(container).toMatchSnapshot();

    });

});