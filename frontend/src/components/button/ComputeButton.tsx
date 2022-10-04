import {Callback} from "../../functions/callbacks";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";
import React from "react";
import {ButtonWithIcon} from "./ButtonWithIcon";

export const ComputeButton = ({onCompute}: { onCompute: Callback }) => {
    return (
        <ButtonWithIcon icon={<SnowFlakeIcon size={22}/>}
                        type={"primary"}
                        text={"Compute"}
                        onClick={onCompute}/>
    )
}