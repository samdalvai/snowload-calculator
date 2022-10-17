import {AnyCallback} from "../../functions/callbacks";
import React from "react";
import {SelectorOptionData} from "../input/Selector";
import {Holder} from "../../functions/types";
import {getSystemResistance} from "../../functions/computation/resistanceComputation";

export const DistanceSelector = ({linearLoad, holder, rows, distanceValue, optionData, value, onSelect}:
                                     { linearLoad: number, holder: Holder, rows: number, distanceValue: number, optionData: SelectorOptionData<any>[], value: any, onSelect: AnyCallback }) => {

    const color = (getSystemResistance(holder,rows,distanceValue) >= linearLoad) ? "green-checkbox" : "red-checkbox"

    return (
        <th className={"text-center " + color}
            style={{verticalAlign: "middle"}}>
            <select className={"form-select shadow-sm all-border"}
                    value={value}
                    onChange={onSelect}>
                {
                    optionData.map(val =>
                        <option
                            className={getSystemResistance(holder,rows,val.value) >= linearLoad ? "green-checkbox" : "red-checkbox"}
                            key={val.value}
                            value={val.value}>{val.text}</option>
                    )
                }
            </select>
        </th>
    )
}