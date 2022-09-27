import {useCities} from "../../../functions/useCities";
import {SearchField} from "../SearchField";
import {CitiesSuggestionList} from "./CitiesSuggestion";
import React, {useState} from "react";
import {City} from "../../../functions/types";
import {searchCity} from "../../../functions/search";
import {CityCallBack} from "../../../functions/callbacks";

export const CitiesSearch = ({onSelectCity}: { onSelectCity: CityCallBack }) => {
    const {cities, loading, error} = useCities();
    const [keyword, setKeyword] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<City[]>([]);

    const filterCities = (keyword: string) => {
        if (keyword === "") {
            setFilteredCities([])
        } else {
            setFilteredCities(searchCity(keyword, cities, 15));
            setKeyword(keyword);
        }
    }

    return (
        <div>
            {
                error ? <input className="form-control is-invalid" type="text"
                               placeholder={"Error loading cities: " + error}
                               disabled/> : loading ?
                    <input className="form-control" id="disabledInput" type="text" placeholder="Loading cities..."
                           disabled/> :
                    <div>
                        <SearchField onSearch={filterCities} placeHolder={'Search city...'}/>
                        <CitiesSuggestionList cities={filteredCities} keyword={keyword} onSelectCity={onSelectCity}/>
                    </div>
            }
        </div>
    );
}