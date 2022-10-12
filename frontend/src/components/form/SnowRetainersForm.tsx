import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {Selector, SelectorOptionData} from "../input/Selector";
import React from "react";

export const SnowRetainersForm = ({onBack}: {onBack: Callback}) => {
    useKeyBoardPress(["Backspace"], onBack)

    const optionData: SelectorOptionData[] = [
        {value: "1", text: "Whatever 1"},
        {value: "2", text: "whatever 2"},
        {value: "3", text: "Whatever 3"}
    ]

    return (
        <div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                <Selector optionData={optionData} defaultValue={"1"} onSelect={() => null}/>
            </div>
            <BackButton onBack={onBack} />
        </div>
    )
}