import {Callback} from "../../functions/callbacks";
import React from "react";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {HomeIcon} from "@primer/octicons-react";

export const HomeButton = ({onHome}: { onHome: Callback }) => {
    return (
        <ButtonWithIcon icon={<HomeIcon size={22}/>}
                        type={"success"}
                        text={"Home"}
                        onClick={onHome}/>
    )
}