import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React, {useContext, useState} from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";
import {LanguageContext} from "../language/LanguageContext";
import {Holder, Retainer, RetainerHeight, RetainerType, RoofType} from "../../functions/types";
import {DisabledInput} from "../input/DisabledInput";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {TitleCard} from "../card/TitleCard";
import {Title} from "../text/Title";
import {ProductSelector} from "../table/ProductSelector";
import {AheadButton} from "../button/AheadButton";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const SnowRetainersForm = ({linearLoad, onBack}: { linearLoad: number, onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const {
        roofType,
        setRoofType,
        retainerType,
        setRetainerType,
        retainerHeight,
        setRetainerHeight,
        rows,
        setRows,
        holder,
        setHolder
    } = useContext(SnowLoadProductContext)

    const [hasHeight, setHasHeight] = useState<boolean>(true)

    const [retainer, setRetainer] = useState<Retainer | null>(null)
    const [holderDistance, setHolderDistance] = useState<number | null>(null)
    const [retainerDistance, setRetainerDistance] = useState<number | null>(null)

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
        if (setRetainerHeight !== undefined) {
            if (retainerType === "Grid") {
                setHasHeight(true)
                setRetainerHeight("200")
            } else {
                setHasHeight(false)
                setRetainerHeight(null)
            }
        }

    }, [retainerType])

    const handleOnAhead = () => {
        // check here

    }

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.retainersForm.title}/>
            </div>
            <TitleCard
                title={translation.tables.snowLoadCalculation.body.linearLoad.label + ": " + linearLoad.toFixed(2) + " kN/m"}/>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.roofType}
                                       lableWidth={"55%"}
                                       defaultValue={roofType}
                                       optionData={roofTypeData}
                                       onSelect={e => setRoofType ? setRoofType(e.target.value) : ""
                                       }/>
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerType}
                                       lableWidth={"55%"}
                                       defaultValue={retainerType}
                                       optionData={retainingSystemData}
                                       onSelect={e => setRetainerType ? setRetainerType(e.target.value) : ""}/>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-6 pt-3">
                    {
                        hasHeight ?
                            <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerHeight}
                                               lableWidth={"55%"}
                                               defaultValue={retainerHeight}
                                               optionData={retainerHeightData}
                                               onSelect={e => setRetainerHeight ? setRetainerHeight(e.target.value) : ""}/>
                            :
                            <DisabledInput placeHolder={""}/>
                    }
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerRows}
                                       lableWidth={"55%"}
                                       defaultValue={rows}
                                       optionData={retainerRowsData}
                                       onSelect={e => setRows ? setRows(e.target.value) : ""}/>
                </div>
            </div>

            <div className={"pt-3"}>
                <ProductSelector linearLoad={linearLoad}
                                 onSelectHolderDistance={setHolderDistance}
                                 onSelectRetainerDistance={setRetainerDistance}/>
            </div>

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<AheadButton onAhead={handleOnAhead}/>}/>
            </div>
        </div>
    )
}