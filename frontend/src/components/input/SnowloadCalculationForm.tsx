import {RoofMeasureInput} from "./roof/RoofMeasureInput";
import {CitiesSelector} from "../selection/cities/CitiesSelector";

export const SnowloadCalculationForm = () => {
    return (
        <div>
            <CitiesSelector />
            <RoofMeasureInput />
        </div>
    )
}