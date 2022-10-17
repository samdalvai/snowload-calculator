import {Callback} from "../../functions/callbacks";

export const DistanceBox = ({color, distance, checked, onChecked}:
                                {color: DistanceBoxColor, distance: number, checked: boolean, onChecked: Callback}) => {

    return (
        <th className={("border-right-darkgray") + (color === "red" ? " red-checkbox" : " green-checkbox")}
            style={{textAlign: "center", verticalAlign: "middle", minWidth: "5.5%"}}
            onClick={onChecked}>
            <input className="form-check-input all-border"
                   type="radio"
                   checked={checked}
                   onChange={onChecked}/>
        </th>
    )
}

export type DistanceBoxColor =  "red" | "green"