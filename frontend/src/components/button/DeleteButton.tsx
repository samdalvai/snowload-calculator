import {Callback} from "../../functions/callbacks";
import {XIcon} from "@primer/octicons-react";
import {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";

export const DeleteButton = ({disabled, onDelete}: { disabled: boolean, onDelete: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <button type="button"
                className={"btn btn-secondary button-animated" + (disabled ? " disabled" : "") + (!disabled ? " all-border" : "")}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={translation.buttons.toolTips.deleteButton}
                style={{width: '15%'}}
                onClick={onDelete}>
            <XIcon size={22}/>
        </button>
    )
}