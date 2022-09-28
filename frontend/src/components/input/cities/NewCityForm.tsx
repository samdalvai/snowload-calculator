import React from "react";
import {InputWithTwoLabels} from "../InputWithTwoLabels";

export const NewCityForm = () => {



    return (
        <div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={'Steepness (α)'} placeHolder={''} rightLabel={'°'} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={'Roof length (sl)'} placeHolder={''} rightLabel={'m'} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => null}>Add</button>
        </div>
    )
}