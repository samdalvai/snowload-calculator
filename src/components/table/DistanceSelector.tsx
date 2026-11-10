import {NumberCallBack} from "../../functions/callbacks";
import React from "react";
import {SelectorOptionData} from "../input/Selector";
import {getResistance} from "../../functions/computation/resistanceComputation";
import {SnowStopProduct} from "../../functions/types";

export const DistanceSelector = ({linearLoad, product, rows, distanceValue, optionData, value, onSelect}:
                                     { linearLoad: number, product: SnowStopProduct, rows: number, distanceValue: number, optionData: SelectorOptionData<number>[], value: any, onSelect: NumberCallBack }) => {

    const color = (getResistance(product, rows, distanceValue) >= linearLoad) ? "green-checkbox" : "red-checkbox"

    return (
        <th className={"text-center " + color}
            style={{verticalAlign: "middle"}}>
            <select className={"form-select shadow-sm all-border"}
                    value={value}
                    onChange={(e) => {
                        onSelect(parseInt(e.target.value))
                    }}>
                {
                    optionData.map(val =>
                        <option
                            className={getResistance(product, rows, val.value) >= linearLoad ? "green-checkbox" : "red-checkbox"}
                            key={val.value}
                            value={val.value}>{val.text}</option>
                    )
                }
            </select>
        </th>
    )
}