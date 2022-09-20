import {useCities} from "../functions/useCities";
import {SearchField} from "./SearchField";
import {CitiesList} from "./CitiesList";
import React, {useState} from "react";
import {City} from "../functions/types";
import {searchCity} from "../functions/search";


export const CitiesSearch = () => {
    const {cities, loading} = useCities();
    const [searchCities, setSearchCities] = useState<City[]>([]);

    const filterCities = (keyword: string) => {
        setSearchCities(searchCity(keyword,cities));
    }

    return (
        <div className="container p-2">
            <SearchField onSearch={filterCities} placeHolder={'Search'}/>
            <CitiesList cities={searchCities} onClick={console.log}/>
        </div>
    );
}