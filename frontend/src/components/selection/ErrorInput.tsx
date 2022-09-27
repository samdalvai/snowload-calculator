import React from "react";

export const ErrorInput = ({message, error}: { message: string, error: any }) => {
    return (
        <input className="form-control is-invalid" type="text"
               placeholder={message + error}
               disabled/>
    )
}