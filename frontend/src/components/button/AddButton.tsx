import {PlusIcon} from "@primer/octicons-react";
import {Callback} from "../../functions/callbacks";

export const AddButton = ({tooltip, onAdd}: {tooltip: string, onAdd: Callback}) => {
    return (
        <button type="button"
                className="btn btn-primary all-border"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={tooltip}
                style={{width: '15%'}}
                onClick={onAdd}>
            <PlusIcon size={22}/>
        </button>
    )
}