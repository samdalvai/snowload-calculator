import {useState} from "react";

export const DistanceBox = ({color, checked}: {color: DistanceBoxColor, checked: boolean}) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked)

    return (
        <th className={("border-right-light") + (color === "red" ? " red-checkbox" : " green-checkbox")}
            style={{textAlign: "center", verticalAlign: "middle"}}
            onClick={() => setIsChecked(!checked)}>
            <input className="form-check-input all-border"
                   type="radio"
                   checked={isChecked}/>
        </th>
    )
}

export type DistanceBoxColor =  "red" | "green"