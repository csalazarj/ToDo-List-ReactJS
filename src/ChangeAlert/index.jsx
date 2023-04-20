import React from "react"
import { withStorageListener } from "./withStorageListener"

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo Cambios</p>
                <button onClick={() => toggleShow(false)}>
                    Recargar la info
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }
