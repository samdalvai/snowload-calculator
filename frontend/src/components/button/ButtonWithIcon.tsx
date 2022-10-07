import React, {ReactElement} from "react";
import {IconProps} from "@primer/octicons-react";
import {Callback} from "../../functions/callbacks";

export type ButtonType = "primary" | "secondary" | "success" | "info" | "light"

export const ButtonWithIcon = ({icon, text, type, width = "100%", onClick}:
                                   { icon: ReactElement<IconProps>, text?: string, type: ButtonType, width?: string, onClick: Callback }) => {
    return (
        <div>
            <button type="submit"
                    className={"btn btn-" + type + " shadow-sm rounded all-border"}
                    style={{width: width}}
                    onClick={onClick}>
                {icon} {text}
            </button>
        </div>
    )
}