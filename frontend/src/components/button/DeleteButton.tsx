import {Callback} from "../../functions/callbacks";
import {XIcon} from "@primer/octicons-react";

export const DeleteButton = ({disabled, onDelete}: { disabled: boolean, onDelete: Callback }) => {
    return (
        <button type="button"
                className={disabled ? "btn btn-secondary disabled" : "btn btn-secondary"}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to delete selection"
                style={{width: '15%', borderColor: disabled ? "gray" : "black", borderWidth: "1.5px"}}
                onClick={onDelete}>
            <XIcon size={22}/>
        </button>
    )
}