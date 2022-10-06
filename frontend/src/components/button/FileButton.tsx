import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {FileIcon} from "@primer/octicons-react";
import React from "react";

export const FileButton = ({onGenerate}: { onGenerate: Callback }) => {
    return (
        <ButtonWithIcon icon={<FileIcon size={22}/>}
                        type={"success"}
                        text={"Send"}
                        onClick={onGenerate}/>
    )
}