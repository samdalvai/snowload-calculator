import {RoofMeasureInput} from "../roof/RoofMeasureInput";
import {CitiesSelector} from "../../selection/cities/CitiesSelector";
import {Button} from "react-bootstrap";
import {GearIcon, TrashIcon} from "@primer/octicons-react";
import {Callback} from "../../../functions/callbacks";
import {useState} from "react";
import {City} from "../../../functions/types";

export const SnowloadCalculationForm = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)
    const [steepness, setSteepness] = useState<string>('')

    const resetInputs = () => {
        setSelectedCity(null)
        setSteepness('')

    }

    return (
        <div>
            <CitiesSelector selectedCity={selectedCity} onSelectedCity={setSelectedCity} />
            <RoofMeasureInput steepness={steepness} onSteepnessChange={setSteepness} />
            <SnowloadButtonsGroup onCompute={() => null} onReset={resetInputs}/>
        </div>
    )
}

export const SnowloadButtonsGroup = ({onCompute, onReset}:{onCompute: Callback, onReset: Callback}) => {
    return (
        <div className="row">
            <div className="col-md-6 pt-3">
                <button type="button" className="btn btn-primary shadow-sm rounded" style={{width: "100%"}} onClick={onCompute}><GearIcon size={20} /> Compute</button>
            </div>
            <div className="col-md-6 pt-3">
                <button type="button" className="btn btn-secondary shadow-sm rounded" style={{width: "100%"}} onClick={onReset}><TrashIcon size={20} /> Reset</button>
            </div>
        </div>
    )
}