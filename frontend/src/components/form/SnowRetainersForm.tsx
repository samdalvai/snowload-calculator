import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React, {useContext, useState} from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";
import {LanguageContext} from "../language/LanguageContext";
import {RetainerHeight, RetainingSystem, RoofData, RoofType} from "../../functions/types";
import {DisabledInput} from "../input/DisabledInput";
import {ComputeButton} from "../button/ComputeButton";
import {ResetButton} from "../button/ResetButton";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {TitleCard} from "../card/TitleCard";

export const SnowRetainersForm = ({onBack}: { onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const [roofTypeValue, setRoofTypeValue] = useState<RoofType>("concreteTile")
    const [retainingSystemValue, setRetainingSystemValue] = useState<RetainingSystem>("Grid")
    const [retainerHeightValue, setRetainerHeightValue] = useState<RetainerHeight>("200")
    const [rowsValue, setRowsValue] = useState<number>(1)

    const [hasHeight, setHasHeight] = useState<boolean>(true)

    useKeyBoardPress(["Backspace"], onBack)

    const roofTypeData: SelectorOptionData<RoofType>[] = [
        {value: "concreteTile", text: translation.inputs.options.roofType.concreteTile},
        {value: "flatTile", text: translation.inputs.options.roofType.flatTile}
    ]

    const retainingSystemData: SelectorOptionData<RetainingSystem>[] = [
        {value: "Grid", text: translation.inputs.options.retainingSystem.grid},
        {value: "DoubleTube", text: translation.inputs.options.retainingSystem.doubleTube}
    ]

    const retainerHeightData: SelectorOptionData<RetainerHeight>[] = [
        {value: "200", text: "200 mm"},
        {value: "250", text: "250 mm"}
    ]

    const retainerRowsData: SelectorOptionData<number>[] = [
        {value: 1, text: translation.words.numbers.one},
        {value: 2, text: translation.words.numbers.two},
        {value: 3, text: translation.words.numbers.three},
        {value: 4, text: translation.words.numbers.four},
        {value: 5, text: translation.words.numbers.five}
    ]

    React.useEffect(() => {
        if (retainingSystemValue === "Grid") {
            setHasHeight(true)
            setRetainerHeightValue("200")
        } else {
            setHasHeight(false)
            setRetainerHeightValue(null)
        }

    }, [retainingSystemValue])

    return (
        <div>
            <div className={"py-3"}>
                <TitleCard  title={translation.pages.retainersForm.title}/>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.roofType}
                                       lableWidth={"55%"}
                                       defaultValue={roofTypeValue}
                                       optionData={roofTypeData}
                                       onSelect={e => setRoofTypeValue(e.target.value)}/>
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainingSystem}
                                       lableWidth={"55%"}
                                       defaultValue={retainingSystemValue}
                                       optionData={retainingSystemData}
                                       onSelect={e => setRetainingSystemValue(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    {
                        hasHeight ?
                            <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerHeight}
                                               lableWidth={"55%"}
                                               defaultValue={retainerHeightValue}
                                               optionData={retainerHeightData}
                                               onSelect={e => setRetainerHeightValue(e.target.value)}/>
                            :
                            <DisabledInput placeHolder={""} />
                    }
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerRows}
                                       lableWidth={"55%"}
                                       defaultValue={rowsValue}
                                       optionData={retainerRowsData}
                                       onSelect={e => setRowsValue(e.target.value)}/>
                </div>
            </div>

            <div className={"pt-3"}>

                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<div/>}/>
            </div>
        </div>
    )
}