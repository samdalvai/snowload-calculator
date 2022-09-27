import {RoofMeasureInput} from "../roof/RoofMeasureInput";
import {CitiesSelector} from "../../selection/cities/CitiesSelector";
import {Button} from "react-bootstrap";
import {GearIcon, TrashIcon} from "@primer/octicons-react";

export const SnowloadCalculationForm = () => {
    return (
        <div>
            <CitiesSelector/>
            <RoofMeasureInput/>
            <SnowloadButtonsGroup/>
        </div>
    )
}

export const SnowloadButtonsGroup = () => {
    return (
        <div className="row">
            <div className="col-md-6 pt-3">
                <button type="button" className="btn btn-primary shadow-sm rounded" style={{width: "100%"}}><GearIcon size={20} /> Compute</button>
            </div>
            <div className="col-md-6 pt-3">
                <button type="button" className="btn btn-secondary shadow-sm rounded" style={{width: "100%"}}><TrashIcon size={20} /> Reset</button>
            </div>
        </div>
    )
}