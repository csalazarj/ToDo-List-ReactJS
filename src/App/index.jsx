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
import { ChangeAlert } from "../ChangeAlert"

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
        sincronizeTodos,
    } = useTodos()

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
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
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResult={(searchText) => (
                    <p>No ha resultados para {searchText}</p>
                )}
                // render={(todo) => (
                //     <TodoItem
                //         key={todo.text}
                //         text={todo.text}
                //         completed={todo.completed}
                //         onComplete={() => completeTodo(todo.text)}
                //         onDelete={() => deleteTodo(todo.text)}
                //     />
                // )}
            >
                {(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} />
                </Modal>
            )}
            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlert sincronize={sincronizeTodos} />
        </React.Fragment>
    )
}

export default App
