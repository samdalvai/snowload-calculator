import React from "react";
import {AnyCallback} from "../../functions/callbacks";

export interface SelectorOptionData {
    value: any;
    text: string;
}

export const Selector = ({optionData, value, border, onSelect}:
                             { optionData: SelectorOptionData[], value: any, border?: boolean, onSelect: AnyCallback }) => {
    return (
        <select className={"form-select shadow-sm" + (border ? " all-border" : "")}
                value={value}
                onChange={onSelect}>
            {
                optionData.map(val =>
                    <option key={val.value} value={val.value}>{val.text}</option>
                )
            }
        </select>
    )
}