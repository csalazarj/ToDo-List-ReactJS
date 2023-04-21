import React from "react"
import { useStorageListener } from "./useStorageListener"
import "./ChangeAlert.css"

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>
                        Parece que hubo cambios en la aplicación desde otra
                        pestaña
                    </p>
                    <p>¿Quieres sincronzar los cambios?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >
                        Sí!
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}
export { ChangeAlert }
