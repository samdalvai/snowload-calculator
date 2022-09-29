import {Callback} from "../../functions/callbacks";
import {XIcon} from "@primer/octicons-react";

export const DeleteButton = ({disabled, onDelete}: { disabled: boolean, onDelete: Callback }) => {
    return (
        <button type="button"
                className={disabled ? "btn btn-secondary disabled" : "btn btn-secondary"}
                style={{width: '15%'}}
                onClick={onDelete}>
            <XIcon size={22}/></button>
    )
}