import React from "react"
import "./TodoList.css"

function TodoList(props) {
    const renderFun = props.render || props.children
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {!props.loading && !props.totalTodos && props.onEmptyTodos()}

            {!!props.totalTodos &&
                !props.searchedTodos.length &&
                props.onEmptySearchResult(props.searchText)}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFun)}
        </section>
    )
}

export { TodoList }
