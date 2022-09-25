import { todoReducer } from "../../src/helpers/todoReducer";


describe('Pruebas en el todoReducer', () => {

    test('debe de retornar el estado', () => {


        const state = todoReducer('hola', { type: '' });
        expect(state).toBe('hola');
    });

    test('debe de agregar un todo al estado', () => {

        const state = todoReducer(['lavar la losa'], {
            type: '[TODO] add todo', payload: 'sacar al perro'
        });

        expect(state).toEqual([
            'lavar la losa',
            'sacar al perro'
        ])

    });

    test('debe de remover un todo al estado', () => {

        const initialState = [
            { id: 1, todo: 'lavar la losa' },
            { id: 2, todo: 'sacar al perro' }
        ]

        const state = todoReducer(initialState, {
            type: '[TODO] remove todo',
            payload: 2
        })

        expect(state).toEqual([
            { id: 1, todo: 'lavar la losa' }
        ])

    });

    test('debe cambiar el estado de realizado segun corresponda', () => {

        const initialState = [
            { id: 1, todo: 'lavar la losa', done: false }
        ];

        const state = todoReducer(initialState, {
            type: '[TODO] toggle todo',
            payload: 1
        });

        expect(state[0].done).toBeTruthy();

    });

});