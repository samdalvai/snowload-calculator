import {useCities} from "../functions/useCities";
import {SearchField} from "./SearchField";
import {CitiesList} from "./CitiesList";
import React, {useState} from "react";
import {City} from "../functions/types";
import {searchCity} from "../functions/search";


export const CitiesSearch = () => {
    const {cities, loading} = useCities();
    const [filteredCities, setFilteredCities] = useState<City[]>([]);

    const filterCities = (keyword: string) => {
        keyword === "" ? setFilteredCities([]) : setFilteredCities(searchCity(keyword, cities, 10));
    }

    return (
        <div>
            <SearchField onSearch={filterCities} placeHolder={'Search city'}/>
            <CitiesList cities={filteredCities} onSelectCity={console.log}/>
        </div>
    );
}