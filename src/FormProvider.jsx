import { FormContext } from "./FormContext"
import { useTodo } from "./hooks/useTodo"

export const FormProvider = ({ children }) => {
    const { todos, handleAddTodo, handleRemoveTodo, handleToggleTodo } = useTodo()

    return (
        <FormContext.Provider value={{
            todos,
            handleAddTodo,
            handleRemoveTodo,
            handleToggleTodo
        }}>
            {children}
        </FormContext.Provider>
    )
}
