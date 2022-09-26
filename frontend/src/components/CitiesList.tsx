import {City} from "../functions/types";
import {CityCallBack} from "../functions/callbacks";

export const CitiesList = ({cities, onSelectCity}: { cities: City[], onSelectCity: CityCallBack }) => {

    return (
        <div className="list-group">
            {
                cities.length > 0 ?
                    cities.map((city: City) =>
                        <button type="button"
                                className="list-group-item list-group-item-action list-group-item-light"
                                key={city.zip + city.name}
                                onClick={() => onSelectCity(city)}>
                            {city.zip} {city.name} {city.province}
                        </button>)
                    : ""
            }
        </div>
    )
}