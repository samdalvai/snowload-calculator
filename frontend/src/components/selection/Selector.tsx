import React from "react";
import {AnyCallback} from "../../functions/callbacks";

export interface SelectorOptionData {
    value: string;
    text: string;
}

export const Selector = ({optionData, defaultValue, onSelect}:
                             { optionData: SelectorOptionData[], defaultValue: any, onSelect: AnyCallback }) => {
    return (
        <select className="form-select shadow-sm all-border"
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