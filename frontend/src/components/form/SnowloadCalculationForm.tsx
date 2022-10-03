import {RoofMeasureInput} from "../input/roof/RoofMeasureInput";
import {CitiesSelector} from "../selection/cities/CitiesSelector";
import {GearIcon, TrashIcon} from "@primer/octicons-react";
import {Callback, RoofDataCallback} from "../../functions/callbacks";
import React, {useState} from "react";
import {City} from "../../functions/types";
import {isInputBetweenLowerAndUpperBound, isValidSteepness} from "../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../functions/conversion/stringConversion";
import {ErrorAlert} from "../alert/ErrorAlert";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";

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
                    showAlert ? <ErrorAlert message={'You have an error in your input, please retry...'}
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
            </div>
        </div>
    )
}

export const SnowloadButtonsGroup = ({onCompute, onReset}: { onCompute: Callback, onReset: Callback }) => {
    return (
        <div className="row">
            <div className="col-md-6 pt-3">
                <button type="submit" className="btn btn-primary shadow-sm rounded" style={{width: "100%"}}
                        onClick={onCompute}><SnowFlakeIcon size={20} /> Compute
                </button>
            </div>
            <div className="col-md-6 pt-3">
                <button type="button" className="btn btn-secondary shadow-sm rounded" style={{width: "100%"}}
                        onClick={onReset}><TrashIcon size={20}/> Reset
                </button>
            </div>
        </div>
    )
}