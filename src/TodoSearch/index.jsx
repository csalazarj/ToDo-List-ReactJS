import React from "react"
import "./TodoSearch.css"

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Estudiar un curso"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export { TodoSearch }
