import {CitiesSearch} from "./CitiesSearch";
import {useState} from "react";
import {City} from "../../../functions/types";
import {getCityString} from "../../../functions/search";
import {XIcon} from "@primer/octicons-react";
import {CityCallBack} from "../../../functions/callbacks";

export const CitiesSelector = ({selectedCity, valid, onSelectedCity}: {selectedCity: City | null, valid: boolean, onSelectedCity: CityCallBack}) => {

    return (
        <div>
            {
                selectedCity ?
                    <div className="input-group">

                        <input className="form-control" id="disabledInput" type="text" placeholder={getCityString(selectedCity)} disabled/>
                        <button type="button"
                                className="btn btn-secondary"
                                style={{width: '15%'}}
                                onClick={() => onSelectedCity(null)}><XIcon size={22}/></button>
                    </div>
                    :
                    <CitiesSearch onSelectCity={onSelectedCity} valid={valid}/>
            }
        </div>

    )
}