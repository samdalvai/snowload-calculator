import {RoofMeasureInput} from "../roof/RoofMeasureInput";
import {CitiesSelector} from "../../selection/cities/CitiesSelector";
import {GearIcon, SunIcon, TrashIcon} from "@primer/octicons-react";
import {Callback} from "../../../functions/callbacks";
import {useState} from "react";
import {City} from "../../../functions/types";

export const SnowloadCalculationForm = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')
    const [roofLength, setRoofLength] = useState<string>('')
    const [roofWidth, setRoofWidth] = useState<string>('')
    const [coefficient, setCoefficient] = useState<boolean>(false)

    const resetInputs = () => {
        setSelectedCity(null)
        setSteepness('')
        setRoofLength('')
        setRoofWidth('')
        setCoefficient(false)
    }

    const validateInputs = () => {




    }

    return (
        <div className="card shadow rounded">
            <div className="card-header text-center">
                <h3 style={{color: "#0d6efd"}}><strong>Snowload Calculator</strong></h3>
            </div>
            <div className="card-body">
                <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity}/>
                <RoofMeasureInput steepness={steepness} roofLength={roofLength} roofWidth={roofWidth}
                                  coefficient={coefficient}
                                  onSteepnessChange={setSteepness} onRoofLengthChange={setRoofLength}
                                  onRoofWidthChange={setRoofWidth}
                                  onCoefficientChange={() => setCoefficient(!coefficient)}/>
                <SnowloadButtonsGroup onCompute={() => null} onReset={resetInputs}/>
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