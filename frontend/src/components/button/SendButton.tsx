import {ButtonWithIcon} from "./ButtonWithIcon";
import {PaperAirplaneIcon} from "@primer/octicons-react";
import React from "react";
import {Callback} from "../../functions/callbacks";

export const SendButton = ({onSend}: {onSend: Callback}) => {
    return (
        <ButtonWithIcon icon={<PaperAirplaneIcon size={22}/>}
                        type={"success"}
                        text={"Send"}
                        onClick={onSend}/>
    )
}