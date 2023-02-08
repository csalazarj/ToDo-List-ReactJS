import React from "react"
import { AppUI } from "./AppUI"
import { TodoProvider } from "../TodoContext"

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el curso de intro a react", completed: true },
//     { text: "Comer chocolate", completed: false },
//     { text: "Comer pollo", completed: false },
//     { text: "Hacer tares", completed: false },
// ]

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
        
    )
}

export default App
