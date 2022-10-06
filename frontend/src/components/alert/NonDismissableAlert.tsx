import React from "react";
import {AlertType} from "./Alert";

export const NonDismissableAlert = ({type, message}: {type: AlertType, message: string}) => {
    return (
        <div className={"alert alert-" + type + " alert-dismissible"} role="alert">
            {message}
        </div>
    )
}