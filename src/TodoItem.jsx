import { useContext } from "react"
import { FormContext } from "./FormContext"


export const TodoItem = ({ item }) => {

    const { handleRemoveTodo, handleToggleTodo } = useContext(FormContext)

    return (
        <div className="todo-item">
            <li
                aria-label="list"
                className={`todo-item${item.done && "-li"}`}
                onDoubleClick={() => handleToggleTodo(item.id)}
            >
                {item.description}
            </li>
            <button
                onClick={() => handleRemoveTodo(item.id)}
            >
                Good Bye Wish
            </button>
        </div>
    )
}
