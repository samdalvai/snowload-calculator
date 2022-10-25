import {Selector, SelectorOptionData} from "./Selector";
import React from "react";
import {Label} from "./Lable";
import {AnyCallback} from "../../functions/callbacks";

export const SelectorWithLabel = ({lableText, lableWidth, optionData, defaultValue, onSelect}: {
                                      lableText: string, lableWidth: string, optionData: SelectorOptionData<any>[], defaultValue: any, onSelect: AnyCallback }) => {
    return (
        <div className="input-group shadow-sm rounded">
            <Label text={lableText} minWidth={lableWidth} />
            <Selector optionData={optionData} value={defaultValue} onSelect={onSelect}/>
        </div>
    )
}
