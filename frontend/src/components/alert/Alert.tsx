import {Callback} from "../../functions/callbacks";
import React from "react";

export type AlertType = "success" | "danger"

export const Alert = ({type, message, onClose}: {type: AlertType, message: string, onClose: Callback}) => {
    return (
        <div className={"alert alert-" + type + " alert-dismissible"} role="alert">
            {message}
            <button type="button" className="btn-close" onClick={onClose} />
        </div>
    )
}

export const NonDismissableAlert = ({type, message}: {type: AlertType, message: string}) => {
    return (
        <div className={"alert alert-" + type + " alert-dismissible"} role="alert">
            {message}
        </div>
    )
}