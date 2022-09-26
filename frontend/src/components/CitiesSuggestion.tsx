import {City} from "../functions/types";
import {CityCallBack} from "../functions/callbacks";
import {getCityString} from "../functions/search";

export const CitiesSuggestionList = ({cities, keyword, onSelectCity}: { cities: City[], keyword: string, onSelectCity: CityCallBack }) => {
    return (
        <div className="list-group">
            {
                cities.length > 0 ?
                    cities.map((city: City) => <CitySuggestion city={city} keyword={keyword} onSelectCity={onSelectCity} key={city.zip+city.name}/>) : ""
            }
        </div>
    )
}

export const CitySuggestion = ({city, keyword, onSelectCity}: { city: City, keyword: string, onSelectCity: CityCallBack }) => {
    const suggestionIndex: number = getCityString(city).toLowerCase().indexOf(keyword.toLowerCase());
    const suggestionLength: number = keyword.length;

    return (
        <button type="button"
                className="list-group-item list-group-item-action list-group-item-light"
                key={city.zip + city.name}
                onClick={() => onSelectCity(city)}>
            {getCityString(city).substring(0,suggestionIndex)}
            <strong>{getCityString(city).substring(suggestionIndex,suggestionIndex + suggestionLength)}</strong>
            {getCityString(city).substring(suggestionLength + suggestionIndex)}
        </button>
    )
}
