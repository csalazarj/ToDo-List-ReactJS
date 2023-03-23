import React from "react"
import { useTodos } from "./useTodos"
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoItem } from "../TodoItem"
import { TodoForm } from "../TodoForm"
import { TodoList } from "../TodoList"
import { TodoHeader } from "../TodoHeader"
import { CreateTodoButton } from "../CreateTodoButton"
import { Modal } from "../Modal"
import { TodosLoading } from "../TodosLoading"
import { EmptyTodos } from "../EmptyTodos"
import { TodosError } from "../TodosError"

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el curso de intro a react", completed: true },
//     { text: "Comer chocolate", completed: false },
//     { text: "Comer pollo", completed: false },
//     { text: "Hacer tares", completed: false },
// ]

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos()

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmpty={() => <EmptyTodos />}
                render={(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            />

            {/* <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {!loading && !searchedTodos.length && <EmptyTodos />}
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList> */}

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} />
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    )
}

export default App
