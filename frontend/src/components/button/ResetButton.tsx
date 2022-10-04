import {TrashIcon} from "@primer/octicons-react";
import React from "react";
import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";

export const ResetButton = ({onReset}: { onReset: Callback }) => {
    return (
        <ButtonWithIcon icon={<TrashIcon size={22}/>}
                        type={"secondary"}
                        text={"Reset"}
                        onClick={onReset}/>
    )
}