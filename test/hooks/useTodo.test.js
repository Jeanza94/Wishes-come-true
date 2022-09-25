import { renderHook } from '@testing-library/react';

import { useTodo } from "../../src/hooks/useTodo";


describe('Pruebas en el useTodo', () => {

    test('debe llamar una función del localStorage', () => {

        Storage.prototype.setItem = jest.fn();

        const { result } = renderHook(() => useTodo());
        console.log(result)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    });

    test('debe de retornar todos, handleAddTodo, handleRemoveTodo, handleToggleTodo', () => {

        const { result } = renderHook(() => useTodo());

        expect(result.current).toEqual({
            "handleAddTodo": expect.any(Function),
            "handleRemoveTodo": expect.any(Function),
            "handleToggleTodo": expect.any(Function),
            "todos": []
        })

    });

});