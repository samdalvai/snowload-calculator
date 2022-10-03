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

export const SnowloadCalculationForm = ({onCompute}: { onCompute: RoofDataCallback }) => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')
    const [roofLength, setRoofLength] = useState<string>('')
    const [roofWidth, setRoofWidth] = useState<string>('')
    const [coefficient, setCoefficient] = useState<boolean>(false)

    const [validCityInput, setValidCityInput] = useState<boolean>(true)
    const [validSteepnessInput, setValidSteepnessInput] = useState<boolean>(true)
    const [validRoofLengthInput, setValidRoofLengthInput] = useState<boolean>(true)
    const [validRoofWidthInput, setValidRoofWidthInput] = useState<boolean>(true)

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
            setValidCityInput(false)

        if (!isValidSteepness(steepness))
            setValidSteepnessInput(false)

        if (!isInputBetweenLowerAndUpperBound(roofLength, 0.0, 1000))
            setValidRoofLengthInput(false)

        if (!isInputBetweenLowerAndUpperBound(roofWidth, 0.0, 1000))
            setValidRoofWidthInput(false)

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
        setValidCityInput(true)
        setValidSteepnessInput(true)
        setValidRoofLengthInput(true)
        setValidRoofWidthInput(true)
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
                <div onChange={() => setValidCityInput(true)}>
                    <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity}
                                    valid={validCityInput}/>
                </div>
                <RoofMeasureInput steepness={steepness} roofLength={roofLength} roofWidth={roofWidth}
                                  validSteepness={validSteepnessInput} validRoofLength={validRoofLengthInput}
                                  validRoofWidth={validRoofWidthInput}
                                  coefficient={coefficient}
                                  onSteepnessChange={value => {
                                      setSteepness(value)
                                      setValidSteepnessInput(true)
                                  }}
                                  onRoofLengthChange={value => {
                                      setRoofLength(value)
                                      setValidRoofLengthInput(true)
                                  }}
                                  onRoofWidthChange={value => {
                                      setRoofWidth(value)
                                      setValidRoofWidthInput(true)
                                  }}
                                  onCoefficientChange={() => setCoefficient(!coefficient)}/>
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
                requested data is required. The information is processed automatically by the system used and is not checked
                individually for correctness. No liability can be accepted for incorrect data.
            </p>
        </div>
    )
}