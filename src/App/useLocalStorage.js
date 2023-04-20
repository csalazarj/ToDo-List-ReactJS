import React from "react"

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setsincronizedItem] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = []
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem)
                setLoading(false)
                setsincronizedItem(true)
            } catch (error) {
                setError(error)
            }
        }, 2000)
    }, [sincronizedItem])

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    const sincronizeItem = () => {
        setLoading(true)
        setsincronizedItem(false)
    }

    return { item, saveItem, loading, error, sincronizeItem }
}

export { useLocalStorage }
