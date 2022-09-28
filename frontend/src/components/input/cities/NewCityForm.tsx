import React from "react";
import {InputWithLeftLabel, InputWithTwoLabels} from "../InputWithLabels";
import {GearIcon, HomeIcon, TrashIcon} from "@primer/octicons-react";

export const NewCityForm = () => {


    return (
        <div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'ZIP'} placeHolder={''} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Name'} placeHolder={''} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Province'} placeHolder={''} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Altitude'} placeHolder={''} value={''}
                                        onChange={() => null} valid={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <button type="submit" className="btn btn-primary shadow-sm rounded" style={{width: "100%"}}
                            onClick={() => null}><HomeIcon size={20}/> Add city
                    </button>
                </div>
                <div className="col-md-6 pt-3">
                    <button type="submit" className="btn btn-secondary shadow-sm rounded" style={{width: "100%"}}
                            onClick={() => null}><TrashIcon size={20}/> Reset
                    </button>
                </div>
            </div>
        </div>
    )
}