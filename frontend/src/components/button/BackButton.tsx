import {ButtonWithIcon} from "./ButtonWithIcon";
import {ArrowLeftIcon} from "@primer/octicons-react";
import React from "react";
import {Callback} from "../../functions/callbacks";

export const BackButton = ({onBack}: { onBack: Callback }) => {
    return (
        <ButtonWithIcon icon={<ArrowLeftIcon size={22}/>}
                        type={"primary"}
                        text={"Back"}
                        onClick={onBack}/>
    )
}