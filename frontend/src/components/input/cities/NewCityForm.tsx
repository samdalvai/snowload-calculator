import React, {useState} from "react";
import {InputWithLeftLabel} from "../InputWithLabels";
import {HomeIcon, TrashIcon} from "@primer/octicons-react";
import {IsInputBetweenLowerAndUpperBound, IsValidSteepness} from "../../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../../functions/conversion/stringConversion";
import {Alert} from "../../alert/Alert";

export const NewCityForm = () => {
    const [zip, setZip] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [altitude, setAltitude] = useState<string>('')

    const [showAlert, setShowAlert] = useState<boolean>(false)

    const [validZip, setValidZip] = useState<boolean>(true)
    const [validName, setValidName] = useState<boolean>(true)
    const [validProvince, setValidProvince] = useState<boolean>(true)
    const [validAltitude, setValidAltitude] = useState<boolean>(true)

    const resetInputs = () => {
        setZip('')
        setName('')
        setProvince('')
        setAltitude('')
        setShowAlert(false)
    }

    const validateInputs = () => {
        if (zip === '')
            setValidZip(false)

        if (name === '')
            setValidName(false)

        if (province === '')
            setValidProvince(false)

        if (altitude === '')
            setValidAltitude(false)

        if (isInputValid())
            console.log('valid')
        else
            setShowAlert(true)
    }

    const isInputValid = (): boolean => {
        return zip !== '' && name !== '' && province !== '' && altitude !== ''
    }

    return (
        <div>
            {
                showAlert ?
                    <Alert  message={'You have an error in your input, please retry...'} onClose={() => setShowAlert(false)}/> : ""
            }
            <div className="row">
                <div className="col-md-6 pt-3" onChange={() => setValidZip(true)}>
                    <InputWithLeftLabel leftLabel={'ZIP'} placeHolder={''} value={zip}
                                        onChange={setZip} valid={validZip}/>
                </div>
                <div className="col-md-6 pt-3" onChange={() => setValidName(true)}>
                    <InputWithLeftLabel leftLabel={'Name'} placeHolder={''} value={name}
                                        onChange={setName} valid={validName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3" onChange={() => setValidProvince(true)}>
                    <InputWithLeftLabel leftLabel={'Province'} placeHolder={''} value={province}
                                        onChange={setProvince} valid={validProvince}/>
                </div>
                <div className="col-md-6 pt-3" onChange={() => setValidAltitude(true)}>
                    <InputWithLeftLabel leftLabel={'Altitude'} placeHolder={''} value={altitude}
                                        onChange={setAltitude} valid={validAltitude}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <button type="submit" className="btn btn-primary shadow-sm rounded" style={{width: "100%"}}
                            onClick={validateInputs}><HomeIcon size={20}/> Add city
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