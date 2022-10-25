import {ButtonWithIcon} from "./ButtonWithIcon";
import {PaperAirplaneIcon} from "@primer/octicons-react";
import React, {useContext} from "react";
import {Callback} from "../../functions/callbacks";
import {LanguageContext} from "../language/LanguageContext";

export const SendButton = ({onSend}: {onSend: Callback}) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<PaperAirplaneIcon size={22}/>}
                        type={"success"}
                        text={translation.buttons.text.send}
                        onClick={onSend}/>
    )
}