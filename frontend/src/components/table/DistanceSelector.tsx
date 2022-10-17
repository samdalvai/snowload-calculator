import {AnyCallback} from "../../functions/callbacks";
import React from "react";
import {SelectorOptionData} from "../input/Selector";
import {DistanceBoxColor} from "./DistanceBox";

export const DistanceSelector = ({color, optionData, value, onSelect}:
                                     { color: DistanceBoxColor, optionData: SelectorOptionData<any>[], value: any, onSelect: AnyCallback }) => {
    return (
        <th className={"text-center red-checkbox"}
            style={{verticalAlign: "middle"}}>
            <select className={"form-select shadow-sm all-border"}
                    value={value}
                    onChange={onSelect}>
                {
                    optionData.map(val =>
                        <option key={val.value} value={val.value}>{val.text}</option>
                    )
                }
            </select>
        </th>
    )
}