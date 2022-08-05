
import { useContext } from "react"
import { FormContext } from "./FormContext"
import { TodoItem } from "./TodoItem"

export const TodosList = () => {

    const { todos } = useContext(FormContext)

    return (
        <ul>
            {
                todos.map(item => {
                    return (
                        <TodoItem
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </ul>
    )
}
