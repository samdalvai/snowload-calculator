import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {FileIcon} from "@primer/octicons-react";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";

export const PrintButton = ({onGenerate}: { onGenerate: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<FileIcon size={22}/>}
                        type={"light"}
                        text={translation.buttons.print}
                        onClick={onGenerate}/>
    )
}