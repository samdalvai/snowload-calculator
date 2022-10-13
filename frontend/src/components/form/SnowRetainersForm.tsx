import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React, {useContext, useState} from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";
import {LanguageContext} from "../language/LanguageContext";
import {RetainingSystem, RoofData, RoofType} from "../../functions/types";

export const SnowRetainersForm = ({onBack}: { onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const [rowsValue, setRowsValue] = useState<number>(1)
    const [roofTypeValue, setRoofTypeValue] = useState<RoofType>("concreteTile")
    const [retainingSystemValue, setRetainingSystemValue] = useState<RetainingSystem>("Grid")


    useKeyBoardPress(["Backspace"], onBack)

    // to be deleted
    const optionData: SelectorOptionData<string>[] = [
        {value: "1", text: "Whatever 1"},
        {value: "2", text: "whatever 2"},
        {value: "3", text: "Whatever 3"}
    ]

    const roofTypeData: SelectorOptionData<RoofType>[] = [
        {value: "concreteTile", text: translation.inputs.options.roofType.concreteTile},
        {value: "flatTile", text: translation.inputs.options.roofType.flatTile}
    ]

    const retainingSystemData: SelectorOptionData<RetainingSystem>[] = [
        {value: "Grid", text: translation.inputs.options.retainingSystem.grid},
        {value: "DoubleTube", text: translation.inputs.options.retainingSystem.doubleTube}
    ]

    const retainerRowsData: SelectorOptionData<number>[] = [
        {value: 1, text: translation.words.numbers.one},
        {value: 2, text: translation.words.numbers.two},
        {value: 3, text: translation.words.numbers.three},
        {value: 4, text: translation.words.numbers.four},
        {value: 5, text: translation.words.numbers.five}
    ]

    return (
        <div className={"pt-3"}>
            <div className="row">
                <div className="col-md-6">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.roofType}
                                       lableWidth={"55%"}
                                       defaultValue={roofTypeValue}
                                       optionData={roofTypeData}
                                       onSelect={e => setRoofTypeValue(e.target.value)}/>
                </div>

                <div className="col-md-6">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainingSystem}
                                       lableWidth={"55%"}
                                       defaultValue={retainingSystemValue}
                                       optionData={retainingSystemData}
                                       onSelect={e => setRetainingSystemValue(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerHeight}
                                       lableWidth={"55%"}
                                       defaultValue={"1"}
                                       optionData={optionData}
                                       onSelect={() => null}/>
                </div>

                <div className="col-md-6">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerRows}
                                       lableWidth={"55%"}
                                       defaultValue={rowsValue}
                                       optionData={retainerRowsData}
                                       onSelect={e => setRowsValue(e.target.value)}/>
                </div>
            </div>

            <div className={"pt-3"}>
                <BackButton onBack={onBack}/>
            </div>
        </div>
    )
}