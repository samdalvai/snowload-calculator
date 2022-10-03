import {RoofMeasureInput} from "../input/roof/RoofMeasureInput";
import {CitiesSelector} from "../selection/cities/CitiesSelector";
import {Callback, RoofDataCallback} from "../../functions/callbacks";
import React, {useState} from "react";
import {City} from "../../functions/types";
import {isInputBetweenLowerAndUpperBound, isValidSteepness} from "../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../functions/conversion/stringConversion";
import {Alert} from "../alert/Alert";
import {ComputeButton} from "../button/ComputeButton";
import {ResetButton} from "../button/ResetButton";
import {InputWithTwoLabels} from "../input/InputWithLabels";
import {CheckBoxWithDescription} from "../input/CheckBoxWithDescription";

export const SnowloadCalculationForm = ({onCompute}: { onCompute: RoofDataCallback }) => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')
    const [roofLength, setRoofLength] = useState<string>('')
    const [roofWidth, setRoofWidth] = useState<string>('')
    const [coefficient, setCoefficient] = useState<boolean>(false)

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

        if (isInputValid())
            onCompute({
                city: selectedCity,
                steepness: StringToFloatNumber(steepness),
                roofLength: StringToFloatNumber(roofLength),
                roofWidth: StringToFloatNumber(roofWidth),
                coefficient: coefficient
            })
        else
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
        <div className="card shadow rounded">
            <div className="card-header text-center" style={{backgroundColor: "lightgrey"}}>
                <h2 style={{color: "#0d6efd"}}>
                    <strong>
                        Snowload Calculator
                    </strong>
                </h2>
            </div>
            <div className="card-body">
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
                <div className="row">
                    <div className="col-md-6 pt-3 image-container">
                        <div className="img-fluid">
                            <img src={"/img/roof.jpg"} className="rounded" alt="Roof"/>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3">
                        <TermsOfUse/>
                    </div>
                </div>
            </div>
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

export const TermsOfUse = () => {
    return (
        <div>
            <h5><strong>Terms of use</strong></h5>
            <p className={"font-12"}>
                The information you provide will be automatically processed by our system in accordance with
                DIN 1055-5 / EN1991 and the specifications of the ZVDH leaflet on installation parts.
                Occurring special features such as projections on roofs, exposed locations, compliance with
                special safety regulations and or structural features are not taken into account and must be
                verified separately. This product generation applies in connection with the specific installation
                instructions and the specifications of the ZVDH Merkblatt Einbauteile in the currently valid version.
            </p>
            <p className={"font-12"}>
                For the highest possible stability of the snow protection system, an exact specification of the
                requested data is required. The information is processed automatically by the system used and is not
                checked
                individually for correctness. No liability can be accepted for incorrect data.
            </p>
        </div>
    )
}