import React, {useState} from "react";
import {InputWithLeftLabel} from "../InputWithLabels";
import {HomeIcon, TrashIcon} from "@primer/octicons-react";

export const NewCityForm = () => {
    const [zip, setZip] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [altitude, setAltitude] = useState<string>('')

    const [showAlert, setShowAlert] = useState<boolean>(false)

    const resetInputs = () => {
        setZip('')
        setName('')
        setProvince('')
        setAltitude('')
    }

    return (
        <div>
            {
                showAlert ?
                    <div className="alert alert-danger" role="alert">
                        You have an error in your input, please retry...
                    </div> : ""
            }
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'ZIP'} placeHolder={''} value={zip}
                                        onChange={setZip} valid={true}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Name'} placeHolder={''} value={name}
                                        onChange={setName} valid={true}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Province'} placeHolder={''} value={province}
                                        onChange={setProvince} valid={true}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLeftLabel leftLabel={'Altitude'} placeHolder={''} value={altitude}
                                        onChange={setAltitude} valid={true}/>
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
                            onClick={resetInputs}><TrashIcon size={20}/> Reset
                    </button>
                </div>
            </div>
        </div>
    )
}