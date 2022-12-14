import {CitiesSelector} from "../selection/CitiesSelector";
import {RoofDataCallback} from "../../functions/callbacks";
import React, {useContext, useState} from "react";
import {City, RoofData} from "../../functions/types";
import {isInputBetweenLowerAndUpperBound, isValidSteepness} from "../../functions/validation/stringValidation";
import {StringToFloatNumber} from "../../functions/conversion/stringConversion";
import {Alert} from "../alert/Alert";
import {ComputeButton} from "../button/ComputeButton";
import {ResetButton} from "../button/ResetButton";
import {InputWithTwoLabels} from "../input/InputWithLabels";
import {CheckBoxWithDescription} from "../input/CheckBoxWithDescription";
import {LanguageContext} from "../language/LanguageContext";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {CitiesSelectionContext} from "../context/CitiesSelectionContext";
import {defaultCity} from "../../functions/defaultTypes";
import {TitleCard} from "../card/TitleCard";
import {Title} from "../text/Title";

export const SnowLoadCalculationForm = ({roofData, onCompute}:
                                            { roofData: RoofData | null, onCompute: RoofDataCallback }) => {
    const {translation} = useContext(LanguageContext);
    const {citiesSelectionActive} = useContext(CitiesSelectionContext)

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

    const resetInputs = () => {
        setSelectedCity(null)
        setSteepness('')
        setRoofLength('')
        setRoofWidth('')
        setCoefficient(false)
    }

    const handleOnCompute = () => {
        validateInputs()
    }

    const handleEnterPress = () => {
        if (!citiesSelectionActive)
            handleOnCompute()
    }

    useKeyBoardPress(["Enter", "NumpadEnter"], handleEnterPress)

    const validateInputs = () => {
        if (selectedCity === null)
            setValidCity(false)

        if (!isValidSteepness(steepness))
            setValidSteepnessInput(false)

        if (!isInputBetweenLowerAndUpperBound(roofLength, 1.0, 1000))
            setValidRoofLength(false)

        if (!isInputBetweenLowerAndUpperBound(roofWidth, 1.0, 1000))
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
        return selectedCity !== null &&
            isValidSteepness(steepness) &&
            isInputBetweenLowerAndUpperBound(roofLength, 1.0, 1000) &&
            isInputBetweenLowerAndUpperBound(roofWidth, 1.0, 1000);
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
            <div className={"py-3"}>
                <Title  text={translation.pages.calculationForm.title}/>
            </div>
            {
                showAlert ? <Alert type={"danger"} message={translation.alerts.inputError}
                                   onClose={() => setShowAlert(false)}/> : ""
            }
            <div className={"pt-3"} onChange={() => setValidCity(true)}>
                <CitiesSelector selectedCity={selectedCity} onSelectCity={setSelectedCity}
                                valid={validCity}/>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithTwoLabels leftLabel={translation.inputs.labels.roofData.steepness} placeHolder={''}
                                        rightLabel={'??'}
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
            <div className={"py-3"}>
                <ButtonsGroup leftButton={<ComputeButton onCompute={handleOnCompute}/>}
                              rightButton={<ResetButton onReset={() => {
                                  resetInputs()
                                  resetInvalidInputs()
                              }}/>}/>
            </div>
        </div>
    )
}