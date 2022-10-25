import {CitiesSearch} from "../search/CitiesSearch";
import {City} from "../../functions/types";
import {getCityString} from "../../functions/search/searchCity";
import {CityCallBack} from "../../functions/callbacks";
import {DisabledInput} from "../input/DisabledInput";
import {DeleteButton} from "../button/DeleteButton";
import {useContext} from "react";
import {CitiesSelectionContext} from "../context/CitiesSelectionContext";

export const CitiesSelector = ({selectedCity, valid, onSelectCity}:
                                   { selectedCity: City | null, valid: boolean, onSelectCity: CityCallBack }) => {
    const {setCitiesSelectionActive} = useContext(CitiesSelectionContext)

    const handleOnSelectCity = (city: City | null) => {
        if (setCitiesSelectionActive) {
            setCitiesSelectionActive(false)
        }

        onSelectCity(city)
    }

    return (
        <div>
            {
                selectedCity ?
                    <div className="input-group">
                        <DisabledInput placeHolder={getCityString(selectedCity)}/>
                        <DeleteButton disabled={false} onDelete={() => onSelectCity(null)}/>
                    </div>
                    :
                    <CitiesSearch onSelectCity={c => handleOnSelectCity(c)} valid={valid}/>
            }
        </div>
    )
}