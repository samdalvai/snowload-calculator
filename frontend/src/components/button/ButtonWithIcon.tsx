import React, {ReactElement} from "react";
import {IconProps} from "@primer/octicons-react";
import {Callback} from "../../functions/callbacks";

export type ButtonType = "primary" | "secondary" | "success" | "info" | "light"


export const ButtonWithIcon = ({icon, text, type, width = "100%", alignRight = false, onClick}:
                                   { icon: ReactElement<IconProps>, text?: string, type: ButtonType, width?: string, alignRight?: boolean, onClick: Callback }) => {
    return (
        <div>
            <button type="submit"
                    className={"btn btn-" + type + " shadow-sm rounded all-border button-animated"}
                    style={{width: width}}
                    onClick={onClick}>
                {
                    alignRight ?
                        text :
                        icon
                }
                {
                    " "
                }
                {
                    alignRight ?
                        icon :
                        text
                }
            </button>
        </div>
    )
}