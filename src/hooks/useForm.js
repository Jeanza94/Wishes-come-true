import { useState } from "react";

export const useForm = () => {

    const [inputValue, setInputValue] = useState("")

    const handleInputValue = ({ target }) => {
        setInputValue(target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();
        setInputValue("");
    }
    return { inputValue, handleInputValue, handleButton };
}