import {City} from "../../functions/types";
import {CityCallBack} from "../../functions/callbacks";
import {getCityString} from "../../functions/search/searchCity";
import React from "react";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";

export const CitiesSuggestionList = ({cities, keyword, onSelectCity}: { cities: City[], keyword: string, onSelectCity: CityCallBack }) => {
    useKeyBoardPress(["ArrowUp"], () => {
        console.log("Arrow up!!")

    })

    useKeyBoardPress(["ArrowDown"], () => {
        console.log("Arrow down!!")
    })

    return (
        <div className="list-group shadow-sm rounded">
            {
                cities.length > 0 ?
                    cities.map((city: City) => <CitySuggestion
                        city={city}
                        keyword={keyword}
                        onSelectCity={onSelectCity}
                        key={city.zip+city.name}/>) : ""
            }
        </div>
    )
}

export const CitySuggestion = ({city, keyword, onSelectCity}: { city: City, keyword: string, onSelectCity: CityCallBack }) => {
    return (
        <button type="button"
                className="list-group-item list-group-item-action list-group-item-light"
                key={city.zip + city.name}
                onClick={() => onSelectCity(city)}>
            <CityData city={city} keyword={keyword}/>
        </button>
    )
}

export const CityData = ({city, keyword}: {city: City,keyword: string}) => {
    const suggestionIndex: number = getCityString(city).toLowerCase().indexOf(keyword.toLowerCase());
    const suggestionLength: number = keyword.length;

    return (
        <div>
            {getCityString(city).substring(0,suggestionIndex)}
            <strong>{getCityString(city).substring(suggestionIndex,suggestionIndex + suggestionLength)}</strong>
            {getCityString(city).substring(suggestionLength + suggestionIndex)}
        </div>
    )
}
