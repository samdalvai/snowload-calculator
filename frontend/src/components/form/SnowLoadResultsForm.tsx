import {RoofData} from "../../functions/types";
import {Callback} from "../../functions/callbacks";
import {InputWithTwoLabels} from "../input/InputWithLabels";
import {CheckBoxWithDescription} from "../input/CheckBoxWithDescription";
import React from "react";
import {SendButton} from "../button/SendButton";
import {BackButton} from "../button/BackButton";

export const SnowLoadResultsForm = ({roofData, onBack}: { roofData: RoofData, onBack: Callback }) => {
    return (
        <div>

            <div className="row">
                <div className="col-md-6 pt-3">
                    <SendButton onSend={() => null} />
                </div>
                <div className="col-md-6 pt-3">
                    <BackButton onBack={onBack} />
                </div>
            </div>
        </div>
    )
}