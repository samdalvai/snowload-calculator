import {CitiesSelector} from "../selection/CitiesSelector";
import {Callback, RoofDataCallback} from "../../functions/callbacks";
import React, {ReactElement, useContext, useState} from "react";
import {City, defaultCity, RoofData} from "../../functions/types";
import {isInputBetweenLowerAndUpperBound, isValidSteepness} from "../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../functions/conversion/stringConversion";
import {Alert} from "../alert/Alert";
import {ComputeButton} from "../button/ComputeButton";
import {ResetButton} from "../button/ResetButton";
import {InputWithTwoLabels} from "../input/InputWithLabels";
import {CheckBoxWithDescription} from "../input/CheckBoxWithDescription";
import {LanguageContext} from "../language/LanguageContext";
import {ButtonsGroup} from "../button/ButtonsGroup";

export const SnowLoadCalculationForm = ({roofData, onCompute}:
                                            { roofData: RoofData | null, onCompute: RoofDataCallback }) => {
    const {translation} = useContext(LanguageContext);

    const [selectedCity, setSelectedCity] = useState<City | null>(roofData ? roofData.city : null)
    const [steepness, setSteepness] = useState<string>(roofData ? (roofData.steepness).toString() : '')
    const [roofLength, setRoofLength] = useState<string>(roofData ? (roofData.roofLength).toString() : '')
    const [roofWidth, setRoofWidth] = useState<string>(roofData ? (roofData.roofWidth).toString() : '')
    const [coefficient, setCoefficient] = useState<boolean>(roofData ? roofData.coefficient : false)

    const [validCity, setValidCity] = useState<boolean>(true)
    const [validSteepness, setValidSteepnessInput] = useState<boolean>(true)
    const [validRoofLength, setValidRoofLength] = useState<boolean>(true)
    const [validRoofWidth, setValidRoofWidth] = useState<boolean>(true)

    const [showAlert, setShowAlert] = useState<boolean>(false)

    React.useEffect(() => {
        const listener = (event: { code: string; }) => {
            const pressedKey = event.code

            if (pressedKey === "Enter" || pressedKey === "NumpadEnter")
                validateInputs()
        };

        // handle keyboard event only if window element exist (Eg. on pc)
        if (typeof document !== 'undefined') {
            document.addEventListener("keydown", listener);
            return () => {
                document.removeEventListener("keydown", listener);
            };
        }
    });

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
        <div className={"pt-3"}>
            {
                showAlert ? <Alert type={"danger"} message={translation.alerts.inputError}
                                   onClose={() => setShowAlert(false)}/> : ""
            }
            <div onChange={() => setValidCity(true)}>
                <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity}
                                valid={validCity}/>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={translation.inputs.labels.roofData.steepness} placeHolder={''}
                                        rightLabel={'°'}
                                        value={steepness}
                                        onChange={value => {
                                            setSteepness(value)
                                            setValidSteepnessInput(true)
                                        }} valid={validSteepness}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={translation.inputs.labels.roofData.roofLenght} placeHolder={''}
                                        rightLabel={'m'}
                                        value={roofLength}
                                        onChange={value => {
                                            setRoofLength(value)
                                            setValidRoofLength(true)
                                        }} valid={validRoofLength}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={translation.inputs.labels.roofData.roofWidth} placeHolder={''}
                                        rightLabel={'m'}
                                        value={roofWidth}
                                        onChange={value => {
                                            setRoofWidth(value)
                                            setValidRoofWidth(true)
                                        }} valid={validRoofWidth}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription placeHolder={translation.inputs.labels.roofData.safetyCoefficient}
                                             checked={coefficient}
                                             onChange={() => setCoefficient(!coefficient)}/>
                </div>
            </div>
            <div className={"pt-3"}>
                <ButtonsGroup leftButton={<ComputeButton onCompute={validateInputs}/>}
                                       rightButton={<ResetButton onReset={() => {
                                           resetInputs()
                                           resetInvalidInputs()
                                       }}/>}/>
            </div>
        </div>
    )
}