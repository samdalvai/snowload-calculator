import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";

export const SnowRetainersForm = ({onBack}: { onBack: Callback }) => {
    useKeyBoardPress(["Backspace"], onBack)

    const optionData: SelectorOptionData[] = [
        {value: "1", text: "Whatever 1"},
        {value: "2", text: "whatever 2"},
        {value: "3", text: "Whatever 3"}
    ]

    return (
        <div>
            <SelectorWithLabel lableText={"Roof Type"}
                               lableWidth={"25%"}
                               defaultValue={"1"}
                               optionData={optionData}
                               onSelect={() => null}/>



            <BackButton onBack={onBack}/>
        </div>
    )
}