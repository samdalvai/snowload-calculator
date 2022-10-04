import {useCities} from "../../../functions/hooks/useCities";
import {SearchField} from "../../search/SearchField";
import {CitiesSuggestionList} from "./CitiesSuggestion";
import React, {useState} from "react";
import {City} from "../../../functions/types";
import {searchCity} from "../../../functions/search/searchCity";
import {CityCallBack} from "../../../functions/callbacks";
import {ErrorInput} from "../../input/ErrorInput";
import {AddCityModal} from "../../modal/Modal";

export const CitiesSearch = ({onSelectCity, valid}: { onSelectCity: CityCallBack, valid: boolean }) => {
    const {cities, loading, error} = useCities();
    const [keyword, setKeyword] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<City[]>([]);

    const [showNewCityForm, setShowNewCityForm] = useState<boolean>(false)

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
            <AddCityModal show={showNewCityForm} onHide={() => setShowNewCityForm(false)}/>
            {
                error ? <ErrorInput message={"Error loading cities..."} /> : loading ?
                    <input className="form-control" id="disabledInput" type="text" placeholder="Loading cities..."
                           disabled/> :
                    <div>
                        <SearchField onSearch={filterCities} placeHolder={'Search city...'} valid={valid}
                                     onAdd={() => setShowNewCityForm(true)}/>
                        <CitiesSuggestionList cities={filteredCities} keyword={keyword} onSelectCity={onSelectCity}/>
                    </div>
            }
        </div>
    );
}