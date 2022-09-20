import {City} from "../functions/types";

export const CitiesList = ({cities}: { cities: City[]}) => {

    return (
        <div className="list-group">
            {
                cities.length > 0 ?
                    cities.map((city: City) =>
                        <button type="button"
                                className="list-group-item list-group-item-action"
                                key={city.zip + city.name}>
                            {city.zip} {city.name} ({city.province})
                        </button>)
                    : ""
            }

        </div>
    )
}