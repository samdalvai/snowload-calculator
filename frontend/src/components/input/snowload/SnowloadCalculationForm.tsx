import {RoofMeasureInput} from "../roof/RoofMeasureInput";
import {CitiesSelector} from "../../selection/cities/CitiesSelector";
import {GearIcon, TrashIcon} from "@primer/octicons-react";
import {Callback, RoofDataCallback} from "../../../functions/callbacks";
import {useState} from "react";
import {City, RoofData} from "../../../functions/types";
import {MessageModal} from "../../messages/MessageModal";
import {IsInputBetweenLowerAndUpperBound, IsValidSteepness} from "../../../functions/validation/stringValidation";
import {StringToNumber} from "../../../functions/conversion/stringConversion";

export const SnowloadCalculationForm = ({onCompute}: {onCompute: RoofDataCallback}) => {
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

        if (!IsValidSteepness(steepness))
            setValidSteepnessInput(false)

        if (!IsInputBetweenLowerAndUpperBound(roofLength,0.0,1000))
            setValidRoofLengthInput(false)

        if (!IsInputBetweenLowerAndUpperBound(roofWidth,0.0,1000))
            setValidRoofWidthInput(false)

        if (isInputValid())
            onCompute({
                city: selectedCity,
                steepness: StringToNumber(steepness),
                roofLength: StringToNumber(roofLength),
                roofWidth: StringToNumber(roofWidth),
                coefficient: coefficient
            })
        else
            setShowErrorMessage(true);
    }

    const isInputValid = (): boolean => {
        return selectedCity !== null && IsValidSteepness(steepness) && IsInputBetweenLowerAndUpperBound(roofLength,0.0,1000) && IsInputBetweenLowerAndUpperBound(roofWidth,0.0,1000);
    }

    const resetInvalidInputs = () => {
        setValidCityInput(true)
        setValidSteepnessInput(true)
        setValidRoofLengthInput(true)
        setValidRoofWidthInput(true)
    }

    return (
        <div className="card shadow rounded">
            <MessageModal show={showErrorMessage} header={'Input validation error'}
                          body={'You have an error in your input.\n' +
                              'The city must be selected, the steepness must be between 0 and 90 degrees,' +
                              ' and the roof length and width must be between 0 and 1000 meters'} onHide={() => setShowErrorMessage(false)}/>
            <div className="card-header text-center">
                <h1 className="display-6" style={{color: "#0d6efd"}}><strong>Snowload Calculator</strong></h1>
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