import React from "react";
import {Callback} from "../../functions/callbacks";

export const Alert = ({message, onClose}: {message: string, onClose: Callback}) => {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={onClose} />
        </div>
    )
}