import {Callback} from "../../functions/callbacks";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {TrashIcon} from "@primer/octicons-react";

export const HomeButton = ({onHome}: { onHome: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<TrashIcon size={22}/>}
                        type={"success"}
                        text={translation.buttons.text.newComp}
                        onClick={onHome}/>
    )
}