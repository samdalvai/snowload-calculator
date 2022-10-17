import {AnyCallback} from "../../functions/callbacks";
import React from "react";
import {SelectorOptionData} from "../input/Selector";

export const DistanceSelector = ({linearLoad, systemResistance, optionData, value, onSelect}:
                                     { linearLoad: number, systemResistance: number, optionData: SelectorOptionData<any>[], value: any, onSelect: AnyCallback }) => {

    const color = (systemResistance >= linearLoad) ? "green-checkbox" : "red-checkbox"

    return (
        <th className={"text-center " + color}
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