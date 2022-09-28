import {RoofMeasureInput} from "../roof/RoofMeasureInput";
import {CitiesSelector} from "../../selection/cities/CitiesSelector";
import {GearIcon, TrashIcon} from "@primer/octicons-react";
import {Callback} from "../../../functions/callbacks";
import {useState} from "react";
import {City} from "../../../functions/types";
import {MessageModal} from "../../messages/MessageModal";

export const SnowloadCalculationForm = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')
    const [roofLength, setRoofLength] = useState<string>('')
    const [roofWidth, setRoofWidth] = useState<string>('')
    const [coefficient, setCoefficient] = useState<boolean>(false)

    const [validCityinput, setValidCityInput] = useState<boolean>(true)
    const [validSteepnessInput, setValidSteepnessInput] = useState<boolean>(true)
    const [validRoofLengthInput, setValidRoofLengthInput] = useState<boolean>(true)
    const [validRoofWidthInput, setValidRoofWidthInput] = useState<boolean>(true)

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

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

        if (steepness === "")
            setValidSteepnessInput(false)

        if (roofLength === "")
            setValidRoofLengthInput(false)

        if (roofWidth === "")
            setValidRoofWidthInput(false)

        if (isInputInvalid())
            setShowErrorMessage(true);
    }

    const isInputInvalid = (): boolean => {
        return selectedCity === null || steepness === "" || roofLength === "" || roofWidth === "";
    }

    const resetInvalidInputs = () => {
        setValidCityInput(true)
        setValidSteepnessInput(true)
        setValidRoofLengthInput(true)
        setValidRoofWidthInput(true)
    }

    return (
        <div className="card shadow rounded">
            <MessageModal show={showErrorMessage} header={'Input validation error'} body={'You have an error in your input, please retry...'} onHide={() => setShowErrorMessage(false)}/>
            <div className="card-header text-center">
                <h3 style={{color: "#0d6efd"}}><strong>Snowload Calculator</strong></h3>
            </div>
            <div className="card-body">
                <div onChange={() => setValidCityInput(true)}>
                    <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity} valid={validCityinput}/>
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
                        onClick={onCompute}><GearIcon size={20}/> Compute
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