import React from "react";

export const ErrorInput = ({message}: { message: string }) => {
    return (
        <input className="form-control is-invalid shadow-sm rounded" type="text"
               placeholder={message}
               disabled/>
    )
}