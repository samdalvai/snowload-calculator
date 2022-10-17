import {AnyCallback} from "../../functions/callbacks";
import React from "react";
import {SelectorOptionData} from "../input/Selector";

export const DistanceSelector = ({optionData, value, onSelect}:
                                     { optionData: SelectorOptionData<any>[], value: any, onSelect: AnyCallback }) => {
    return (
        <th className={"text-center"}
            style={{verticalAlign: "middle"}}>
            <select className={"form-select text-center"}
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