import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {FileIcon} from "@primer/octicons-react";
import React from "react";

export const PrintButton = ({onGenerate}: { onGenerate: Callback }) => {
    return (
        <ButtonWithIcon icon={<FileIcon size={22}/>}
                        type={"light"}
                        text={"Print"}
                        onClick={onGenerate}/>
    )
}