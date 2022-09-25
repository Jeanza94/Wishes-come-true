
import { useContext } from 'react'
import { FormContext } from './FormContext'
import { useForm } from './hooks/useForm'

export const FormList = () => {

    const { inputValue, handleButton, handleInputValue } = useForm()
    const { handleAddTodo } = useContext(FormContext)

    return (
        <form onSubmit={handleButton} aria-label="form">
            <h3>Your Wish</h3>
            <input
                type="text"
                onChange={handleInputValue}
                value={inputValue}

            />
            <button
                type='submit'
                onClick={() => handleAddTodo(inputValue)}
            >
                New Wish
            </button>
        </form>
    )
}
