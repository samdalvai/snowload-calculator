import {CitiesSelector} from "../selection/CitiesSelector";
import {Callback, RoofDataCallback} from "../../functions/callbacks";
import React, {useState} from "react";
import {City, defaultCity, RoofData} from "../../functions/types";
import {isInputBetweenLowerAndUpperBound, isValidSteepness} from "../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../functions/conversion/stringConversion";
import {Alert} from "../alert/Alert";
import {ComputeButton} from "../button/ComputeButton";
import {ResetButton} from "../button/ResetButton";
import {InputWithTwoLabels} from "../input/InputWithLabels";
import {CheckBoxWithDescription} from "../input/CheckBoxWithDescription";

export const SnowLoadCalculationForm = ({roofData, onCompute}: { roofData: RoofData | null, onCompute: RoofDataCallback }) => {
    const [selectedCity, setSelectedCity] = useState<City | null>(roofData ? roofData.city : null)
    const [steepness, setSteepness] = useState<string>(roofData ? (roofData.steepness).toString() :'')
    const [roofLength, setRoofLength] = useState<string>(roofData ? (roofData.roofLength).toString() :'')
    const [roofWidth, setRoofWidth] = useState<string>(roofData ? (roofData.roofWidth).toString() :'')
    const [coefficient, setCoefficient] = useState<boolean>(roofData ? roofData.coefficient :false)

    const [validCity, setValidCity] = useState<boolean>(true)
    const [validSteepness, setValidSteepnessInput] = useState<boolean>(true)
    const [validRoofLength, setValidRoofLength] = useState<boolean>(true)
    const [validRoofWidth, setValidRoofWidth] = useState<boolean>(true)

    const [showAlert, setShowAlert] = useState<boolean>(false)

    const resetInputs = () => {
        setSelectedCity(null)
        setSteepness('')
        setRoofLength('')
        setRoofWidth('')
        setCoefficient(false)
    }

    const validateInputs = () => {
        if (selectedCity === null)
            setValidCity(false)

        if (!isValidSteepness(steepness))
            setValidSteepnessInput(false)

        if (!isInputBetweenLowerAndUpperBound(roofLength, 0.0, 1000))
            setValidRoofLength(false)

        if (!isInputBetweenLowerAndUpperBound(roofWidth, 0.0, 1000))
            setValidRoofWidth(false)

        if (isInputValid()) {
            console.log('valid input, computing snowload...')
            onCompute({
                city: selectedCity ? selectedCity : defaultCity(),
                steepness: StringToFloatNumber(steepness),
                roofLength: StringToFloatNumber(roofLength),
                roofWidth: StringToFloatNumber(roofWidth),
                coefficient: coefficient
            })
        } else
            setShowAlert(true);
    }

    const isInputValid = (): boolean => {
        return selectedCity !== null && isValidSteepness(steepness) && isInputBetweenLowerAndUpperBound(roofLength, 0.0, 1000) && isInputBetweenLowerAndUpperBound(roofWidth, 0.0, 1000);
    }

    const resetInvalidInputs = () => {
        setValidCity(true)
        setValidSteepnessInput(true)
        setValidRoofLength(true)
        setValidRoofWidth(true)
        setShowAlert(false)
    }

    return (
        <div>
            {
                showAlert ? <Alert type={"danger"} message={'You have an error in your input, please retry...'}
                                   onClose={() => setShowAlert(false)}/> : ""
            }
            <div onChange={() => setValidCity(true)}>
                <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity}
                                valid={validCity}/>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={'Steepness (α)'} placeHolder={''} rightLabel={'°'}
                                        value={steepness}
                                        onChange={value => {
                                            setSteepness(value)
                                            setValidSteepnessInput(true)
                                        }} valid={validSteepness}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={'Roof length (sl)'} placeHolder={''} rightLabel={'m'}
                                        value={roofLength}
                                        onChange={value => {
                                            setRoofLength(value)
                                            setValidRoofLength(true)
                                        }} valid={validRoofLength}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={'Roof width (l)'} placeHolder={''} rightLabel={'m'}
                                        value={roofWidth}
                                        onChange={value => {
                                            setRoofWidth(value)
                                            setValidRoofWidth(true)
                                        }} valid={validRoofWidth}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription placeHolder={'1.5 safety coefficient'} checked={coefficient}
                                             onChange={() => setCoefficient(!coefficient)}/>
                </div>
            </div>
            <SnowloadButtonsGroup onCompute={validateInputs}
                                  onReset={() => {
                                      resetInputs()
                                      resetInvalidInputs()
                                  }}/>
        </div>
    )
}

export const SnowloadButtonsGroup = ({onCompute, onReset}: { onCompute: Callback, onReset: Callback }) => {
    return (
        <div className="row">
            <div className="col-md-6 pt-3">
                <ComputeButton onCompute={onCompute}/>
            </div>
            <div className="col-md-6 pt-3">
                <ResetButton onReset={onReset}/>
            </div>
        </div>
    )
}