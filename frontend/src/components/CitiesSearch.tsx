import {useCities} from "../functions/useCities";
import {SearchField} from "./SearchField";
import {CitiesSuggestionList} from "./CitiesSuggestion";
import React, {useState} from "react";
import {City} from "../functions/types";
import {searchCity} from "../functions/search";


export const CitiesSearch = () => {
    const {cities, loading} = useCities();
    const [keyword, setKeyword] = useState<string>('');
    const [filteredCities, setFilteredCities] = useState<City[]>([]);

    const filterCities = (keyword: string) => {
        if (keyword === "") {
            setFilteredCities([])
        } else {
            setFilteredCities(searchCity(keyword, cities, 10));
            setKeyword(keyword);
        }
    }

    return (
        <div>
            <SearchField onSearch={filterCities} placeHolder={'Search city'}/>
            <CitiesSuggestionList cities={filteredCities} keyword={keyword} onSelectCity={console.log}/>
        </div>
    );
}