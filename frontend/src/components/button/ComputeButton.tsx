import {Callback} from "../../functions/callbacks";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";
import React from "react";

export const ComputeButton = ({onCompute}: { onCompute: Callback }) => {
    return (
        <button type="submit"
                className="btn btn-primary shadow-sm rounded"
                style={{width: "100%"}}
                onClick={onCompute}>
            <SnowFlakeIcon size={20}/> Compute
        </button>
    )
}