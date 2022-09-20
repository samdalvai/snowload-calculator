import {City} from "../functions/types";

export const CitiesList = ({elements}: {elements: City[]}) => {

    return (
        <div className="list-group">
            {
                elements.map((city: City) =>
                    <button type="button"
                            className="list-group-item list-group-item-action"
                            key={city.zip+city.name}>
                        {city.zip} {city.name} ({city.province})
                    </button>)
            }
        </div>
    )
}