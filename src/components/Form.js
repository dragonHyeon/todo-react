import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()}
        ])
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input className="todo-input" onChange={inputTextHandler} type="text" value={inputText} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fab fa-apple"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
        </div>
    </form>
    )
}

export default Form