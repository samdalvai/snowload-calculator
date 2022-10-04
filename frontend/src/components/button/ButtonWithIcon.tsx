import React, {ReactElement} from "react";
import {IconProps} from "@primer/octicons-react";
import {Callback} from "../../functions/callbacks";

export type ButtonType = "primary" | "secondary"

export const ButtonWithIcon = ({icon, text, type, onClick}:
                                   { icon: ReactElement<IconProps>, text: string, type: ButtonType, onClick: Callback }) => {
    return (
        <div>
            <button type="submit"
                    className={"btn btn-" + type + " shadow-sm rounded"}
                    style={{width: "100%"}}
                    onClick={onClick}>
                {icon} {text}
            </button>
        </div>
    )
}