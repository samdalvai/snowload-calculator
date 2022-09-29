import {Callback} from "../../functions/callbacks";
import React from "react";

export const SuccessAlert = ({message, onClose}: {message: string, onClose: Callback}) => {
    return (
        <div className="alert alert-success alert-dismissible" role="alert">
            {message}
            <button type="button" className="btn-close" onClick={onClose} />
        </div>
    )
}