import {Callback} from "../../functions/callbacks";
import {XIcon} from "@primer/octicons-react";

export const DeleteButton = ({disabled, onDelete}: { disabled: boolean, onDelete: Callback }) => {
    return (
        <button type="button"
                className={"btn btn-secondary button-animated" + (disabled ? " disabled" : "") + (!disabled ? " all-border" : "")}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to delete selection"
                style={{width: '15%'}}
                onClick={onDelete}>
            <XIcon size={22}/>
        </button>
    )
}