import React, {useContext, useState} from "react";
import {InputWithLeftLabel} from "../input/InputWithLabels";
import {StringToIntNumber} from "../../functions/conversion/stringConversion";
import {isValidAltitude, isValidProvince, isValidZip} from "../../functions/validation/cityInputValidation";
import {City} from "../../functions/types";
import {Alert} from "../alert/Alert";
import {ResetButton} from "../button/ResetButton";
import {AddCityButton} from "../button/AddCityButton";
import {LanguageContext} from "../language/LanguageContext";
import {CityCallBack} from "../../functions/callbacks";
import {provinces} from "../../data/provinces";

export const AddCityForm = ({onAddCity}: {onAddCity: CityCallBack}) => {
    const {translation} = useContext(LanguageContext);

    const [zip, setZip] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [altitude, setAltitude] = useState<string>('')

    const [validZip, setValidZip] = useState<boolean>(true)
    const [validName, setValidName] = useState<boolean>(true)
    const [validProvince, setValidProvince] = useState<boolean>(true)
    const [validAltitude, setValidAltitude] = useState<boolean>(true)

    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

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

    const handleAddCity = () => {
        const newCity: City = {
            zip: zip,
            name: name,
            province: province,
            altitude: StringToIntNumber(altitude)
        }

        const isProvinceExisting = provinces.some(pr => pr.shorthand === newCity.province)

        if (isProvinceExisting) {
            setSuccess(true)
            setError(false)
            onAddCity(newCity)
        } else {
            setError(true)
            setSuccess(false)
        }
    }

    return (
        <div>
            {
                showAlert ?
                    <Alert type={"danger"} message={translation.alerts.inputError}
                                onClose={() => setShowAlert(false)}/> : ""
            }
            {
                success ?
                    <Alert type={"success"} message={translation.alerts.addCity.success}
                           onClose={() => setSuccess(false)} /> : ""
            }
            {
                error ?
                    <Alert type={"danger"} message={translation.alerts.addCity.error}
                                  onClose={() => setError(false)}/> : ""
            }
            <div className="row">
                <div className="col-md-6 pt-3" onChange={() => setValidZip(true)}>
                    <InputWithLeftLabel leftLabel={translation.inputs.labels.addCity.zip} placeHolder={''} value={zip}
                                        onChange={setZip} valid={validZip}/>
                </div>
                <div className="col-md-6 pt-3" onChange={() => setValidName(true)}>
                    <InputWithLeftLabel leftLabel={translation.inputs.labels.addCity.name} placeHolder={''} value={name}
                                        onChange={setName} valid={validName}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3" onChange={() => setValidProvince(true)}>
                    <InputWithLeftLabel leftLabel={translation.inputs.labels.addCity.province} placeHolder={''} value={province}
                                        onChange={setProvince} valid={validProvince}/>
                </div>
                <div className="col-md-6 pt-3" onChange={() => setValidAltitude(true)}>
                    <InputWithLeftLabel leftLabel={translation.inputs.labels.addCity.altitude} placeHolder={''} value={altitude}
                                        onChange={setAltitude} valid={validAltitude}/>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-6 pt-3">
                    <AddCityButton onAddCity={validateInputs}/>
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