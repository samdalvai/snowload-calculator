import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React, {useContext, useState} from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";
import {LanguageContext} from "../language/LanguageContext";
import { RetainerHeight, RetainerType, RoofData, RoofType} from "../../functions/types";
import {DisabledInput} from "../input/DisabledInput";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {TitleCard} from "../card/TitleCard";
import {Title} from "../text/Title";
import {ProductSelector} from "../table/ProductSelector";
import {AheadButton} from "../button/AheadButton";
import {Holder, Retainer} from "../../functions/types";

export const SnowRetainersForm = ({linearLoad, onBack}: { linearLoad: number, onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const [roofTypeValue, setRoofTypeValue] = useState<RoofType>("concreteTile")
    const [retainingSystemValue, setRetainingSystemValue] = useState<RetainerType>("Grid")
    const [retainerHeightValue, setRetainerHeightValue] = useState<RetainerHeight>("200")
    const [rowsValue, setRowsValue] = useState<number>(1)

    const [hasHeight, setHasHeight] = useState<boolean>(true)

    const [holder, setHolder] = useState<Holder | null>(null)
    const [retainer, setRetainer] = useState<Retainer | null>(null)

    useKeyBoardPress(["Backspace"], onBack)

    const roofTypeData: SelectorOptionData<RoofType>[] = [
        {value: "concreteTile", text: translation.inputs.options.roofType.concreteTile},
        {value: "flatTile", text: translation.inputs.options.roofType.flatTile}
    ]

    const retainingSystemData: SelectorOptionData<RetainerType>[] = [
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
                <Title  text={translation.pages.retainersForm.title}/>
            </div>
            <TitleCard  title={translation.tables.snowLoadCalculation.body.linearLoad.label + ": " + linearLoad.toFixed(2) + " kN/m"}/>
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
            <div className="row pb-3">
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
                <ProductSelector onSelectHolder={setHolder} onSelectRetainer={setRetainer} linearLoad={linearLoad} rows={rowsValue}/>
            </div>

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<AheadButton onAhead={() => null}/>}/>
            </div>
        </div>
    )
}