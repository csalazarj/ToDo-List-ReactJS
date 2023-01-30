import React from "react"
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { CreateTodoButton } from "./CreateTodoButton"
//import './App.css';

const todos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el curso de intro a react", completed: true },
    { text: "Comer chocolate", completed: true },
    { text: "Comer pollo", completed: false },
    { text: "Hacer tares", completed: false },
]

function App() {
    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    )
}

export default App
