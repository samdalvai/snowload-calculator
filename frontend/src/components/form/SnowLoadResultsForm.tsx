import {Callback} from "../../functions/callbacks";
import React from "react";
import {SendButton} from "../button/SendButton";
import {BackButton} from "../button/BackButton";

export const SnowLoadResultsForm = ({onBack}: { onBack: Callback }) => {
    return (
        <div>

            <div className="row">
                <div className="col-md-6 pt-3">
                    <SendButton onSend={() => null}/>
                </div>
                <div className="col-md-6 pt-3">
                    <BackButton onBack={onBack}/>
                </div>
            </div>
        </div>
    )
}