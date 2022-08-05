import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

export const useTodo = () => {
    const initialState = [];
    const init = () => {
        return JSON.parse(localStorage.getItem('Homework')) || []
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('Homework', JSON.stringify(todos));
    }, [todos])


    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleAddTodo = (inputValue) => {
        dispatch({
            type: '[TODO] add todo',
            payload: {
                id: new Date().getTime(),
                description: inputValue,
                done: false
            }
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    return { todos, handleAddTodo, handleRemoveTodo, handleToggleTodo }
}