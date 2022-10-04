import {CitiesSearch} from "../search/CitiesSearch";
import {City} from "../../functions/types";
import {getCityString} from "../../functions/search/searchCity";
import {CityCallBack} from "../../functions/callbacks";
import {DisabledInput} from "../input/DisabledInput";
import {DeleteButton} from "../button/DeleteButton";

export const CitiesSelector = ({selectedCity, valid, onSelectedCity}:
                                   { selectedCity: City | null, valid: boolean, onSelectedCity: CityCallBack }) => {
    return (
        <div>
            {
                selectedCity ?
                    <div className="input-group">
                        <DisabledInput placeHolder={getCityString(selectedCity)}/>
                        <DeleteButton disabled={false} onDelete={() => onSelectedCity(null)}/>
                    </div>
                    :
                    <CitiesSearch onSelectCity={onSelectedCity} valid={valid}/>
            }
        </div>
    )
}