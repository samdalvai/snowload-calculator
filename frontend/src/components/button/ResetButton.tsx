import {TrashIcon} from "@primer/octicons-react";
import React, {useContext} from "react";
import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {LanguageContext} from "../language/LanguageContext";

export const ResetButton = ({onReset}: { onReset: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<TrashIcon size={22}/>}
                        type={"secondary"}
                        text={translation.buttons.reset}
                        onClick={onReset}/>
    )
}