import {CitiesSearch} from "./CitiesSearch";
import {useState} from "react";
import {City} from "../functions/types";
import {getCityString} from "../functions/search";
import {XIcon} from "@primer/octicons-react";

export const CitiesSelector = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null)

    return (
        <div>
            {
                selectedCity ?
                    <div className="input-group">

                        <input className="form-control" id="disabledInput" type="text" placeholder={getCityString(selectedCity)} disabled/>
                        <button type="button"
                                className="btn btn-secondary"
                                style={{width: '15%'}}
                                onClick={() => setSelectedCity(null)}><XIcon size={22}/></button>
                    </div>
                    :
                    <CitiesSearch  onSelectCity={setSelectedCity}/>
            }
        </div>

    )
}