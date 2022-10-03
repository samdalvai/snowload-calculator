import {TrashIcon} from "@primer/octicons-react";
import React from "react";
import {Callback} from "../../functions/callbacks";

export const ResetButton = ({onReset}: {onReset: Callback}) => {
    return (
        <button type="button"
                className="btn btn-secondary shadow-sm rounded"
                style={{width: "100%"}}
                onClick={onReset}>
            <TrashIcon size={20}/> Reset
        </button>
    )
}