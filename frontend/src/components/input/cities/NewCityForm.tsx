import React, {useState} from "react";
import {InputWithLeftLabel} from "../InputWithLabels";
import {HomeIcon, TrashIcon} from "@primer/octicons-react";
import {StringToIntNumber} from "../../../functions/conversion/stringConversion";
import {ErrorAlert} from "../../alert/ErrorAlert";
import {isValidAltitude, isValidProvince, isValidZip} from "../../../functions/validation/cityInputValidation";
import {City} from "../../../functions/types";
import {SuccessAlert} from "../../alert/SuccessAlert";

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
                    <ErrorAlert message={'You have an error in your input, please retry...'}
                                onClose={() => setShowAlert(false)}/> : ""
            }
            {
                success ?
                    <SuccessAlert message={'New city successfully added'}
                                  onClose={() => setSuccess(false)}/> : ""
            }
            {
                error ?
                    <ErrorAlert message={'Error adding new city, please retry...'}
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
                    <button type="submit" className="btn btn-secondary shadow-sm rounded" style={{width: "100%"}}
                            onClick={resetInputs}><TrashIcon size={20}/> Reset
                    </button>
                </div>
            </div>
        </div>
    )
}