import {Selector, SelectorOptionData} from "./Selector";
import React from "react";
import {Label} from "./Lable";
import {AnyCallback} from "../../functions/callbacks";

export const SelectorWithLabel = ({lableText, lableWidth,
                                      optionData, defaultValue, onSelect}: {
                                      lableText: string, lableWidth: string,
                                      optionData: SelectorOptionData[], defaultValue: any, onSelect: AnyCallback
                                  }) => {
    return (
        <div className="input-group mb-3">
            <Label text={lableText} minWidth={lableWidth} />
            <Selector optionData={optionData} defaultValue={defaultValue} onSelect={onSelect}/>
        </div>
    )
}
