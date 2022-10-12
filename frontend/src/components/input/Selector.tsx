import React from "react";
import {AnyCallback} from "../../functions/callbacks";

export interface SelectorOptionData {
    value: any;
    text: string;
}

export const Selector = ({optionData, defaultValue, border, onSelect}:
                             { optionData: SelectorOptionData[], defaultValue: any, border?: boolean, onSelect: AnyCallback }) => {
    return (
        <select className={"form-select shadow-sm" + (border ? " all-border" : "")}
                value={defaultValue}
                onChange={onSelect}>
            {
                optionData.map(val =>
                    <option value={val.value}>{val.text}</option>
                )
            }
        </select>
    )
}