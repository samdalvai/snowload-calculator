import {City, CityCallBack} from "../functions/types";

export const CitiesList = ({cities, onClick}: { cities: City[], onClick: CityCallBack}) => {

    return (
        <div className="list-group">
            {
                cities.length > 0 ?
                    cities.map((city: City) =>
                        <button type="button"
                                className="list-group-item list-group-item-action"
                                key={city.zip + city.name}
                                onClick={() => onClick(city)}>
                            {city.zip} {city.name} ({city.province})
                        </button>)
                    : ""
            }
        </div>
    )
}