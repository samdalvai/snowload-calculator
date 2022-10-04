import React, {useState} from "react";
import {InputWithLeftLabel} from "../input/InputWithLabels";
import {HomeIcon, TrashIcon} from "@primer/octicons-react";
import {StringToIntNumber} from "../../functions/conversion/stringConversion";
import {isValidAltitude, isValidProvince, isValidZip} from "../../functions/validation/cityInputValidation";
import {City} from "../../functions/types";
import {Alert} from "../alert/Alert";
import {ResetButton} from "../button/ResetButton";

export const NewCityForm = () => {
    const [zip, setZip] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [altitude, setAltitude] = useState<string>('')

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

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
        setSuccess(false)
        setError(false)
    }

    const validateInputs = () => {
        if (!isValidZip(zip))
            setValidZip(false)

        if (name === '')
            setValidName(false)

        if (!isValidProvince(province))
            setValidProvince(false)

        if (!isValidAltitude(altitude))
            setValidAltitude(false)

        if (isInputValid()) {
            console.log('valid input, adding new city...')
            setShowAlert(false)
            handleAddCity()
        } else
            setShowAlert(true)
    }

    const isInputValid = (): boolean => {
        return isValidZip(zip) && name !== '' && isValidProvince(province) && isValidAltitude(altitude)
    }

    const resetInvalidInputs = () => {
        setValidZip(true)
        setValidName(true)
        setValidProvince(true)
        setValidAltitude(true)
        setShowAlert(false)
    }

    const handleAddCity = async () => {
        const newCity: City = {
            zip: zip,
            name: name,
            province: province,
            altitude: StringToIntNumber(altitude)
        }

        await fetch('/cities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCity),
        })
            .then((response) => {
                console.log(response)
                if (response.status === 201 || response.status === 200){
                    setSuccess(true)
                    setError(false)
                } else {
                    setError(true)
                    setSuccess(false)
                }
            })
    }

    return (
        <div>
            {
                showAlert ?
                    <Alert type={"danger"} message={'You have an error in your input, please retry...'}
                                onClose={() => setShowAlert(false)}/> : ""
            }
            {    // TODO: When adding a new city, the CitySelector component must be reloaded manually to get new city...
                success ?
                    <Alert type={"success"} message={'New city successfully added, please reload the previous page'}
                           onClose={() => setSuccess(false)} /> : ""
            }
            {
                error ?
                    <Alert type={"danger"} message={'Error adding new city, please retry...'}
                                  onClose={() => setError(false)}/> : ""
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
                    <ResetButton  onReset={() => {
                        resetInputs()
                        resetInvalidInputs()
                    }}/>
                </div>
            </div>
        </div>
    )
}