import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {SelectorOptionData} from "../input/Selector";
import React, {useContext, useState} from "react";
import {SelectorWithLabel} from "../input/SelectorWithLabel";
import {LanguageContext} from "../language/LanguageContext";
import {RetainerHeight, RetainerMaterial, RetainerType, RoofType} from "../../functions/types";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {TitleCard} from "../card/TitleCard";
import {Title} from "../text/Title";
import {ProductSelector} from "../table/ProductSelector";
import {AheadButton} from "../button/AheadButton";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {ErrorModal} from "../modal/ErrorModal";

export const SnowRetainersForm = ({
                                      linearLoad,
                                      onBack,
                                      onAhead
                                  }: { linearLoad: number, onBack: Callback, onAhead: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const {
        roofType,
        setRoofType,
        retainerType,
        setRetainerType,
        retainerHeight,
        setRetainerHeight,
        retainerMaterial,
        setRetainerMaterial,
        rows,
        setRows,
        holder,
        retainer,
        holderDistance,
        retainerDistance
    } = useContext(SnowLoadProductContext)

    const [showIncompleteSelectionError, setShowIncompleteSelectionError] = useState<boolean>(false)

    const roofTypeData: SelectorOptionData<RoofType>[] = [
        {value: "concreteTile", text: translation.inputs.options.roofType.concreteTile},
        {value: "flatTile", text: translation.inputs.options.roofType.flatTile},
        {value: "metalRoof", text: translation.inputs.options.roofType.metalRoof},
        {value: "standingSeam", text: translation.inputs.options.roofType.standingSeam},
        {value: "ondulatedPlate", text: translation.inputs.options.roofType.ondulatedPlate}
    ]

    const retainingSystemData: SelectorOptionData<RetainerType>[] = [
        {value: "Grid", text: translation.inputs.options.retainingSystem.grid},
        {value: "Tube", text: translation.inputs.options.retainingSystem.tube},
        {value: "Log", text: translation.inputs.options.retainingSystem.log}
    ]

    const retainerGridHeightData: SelectorOptionData<RetainerHeight>[] = [
        {value: "200", text: "200 mm"},
        {value: "250", text: "250 mm"}
    ]

    const retainerTubeHeightData: SelectorOptionData<RetainerHeight>[] = [
        {value: "32", text: "32 mm"},
        {value: "28", text: "28 mm"},
        {value: "35", text: "35 mm"}
    ]

    const retainerLogHeightData: SelectorOptionData<RetainerHeight>[] = [
        {value: "140", text: "140 mm"},
        {value: "120", text: "120 mm"}
    ]

    const retainerMaterialData: SelectorOptionData<RetainerMaterial>[] = [
        {value: "Zink Steel", text: translation.inputs.options.retainerMaterial.zinkSteel},
        {value: "Painted Steel", text: translation.inputs.options.retainerMaterial.paintedSteel},
        {value: "Stainless Steel", text: translation.inputs.options.retainerMaterial.stainlessSteel},
        {value: "Aluminium", text: translation.inputs.options.retainerMaterial.aluminium},
        {value: "Copper", text: translation.inputs.options.retainerMaterial.copper},
    ]

    const [retainerHeightData, setRetainerHeightData] = useState<SelectorOptionData<RetainerHeight>[]>(retainerGridHeightData)

    const retainerRowsData: SelectorOptionData<number>[] = [
        {value: 1, text: translation.words.numbers.one},
        {value: 2, text: translation.words.numbers.two},
        {value: 3, text: translation.words.numbers.three},
        {value: 4, text: translation.words.numbers.four},
        {value: 5, text: translation.words.numbers.five},
        {value: 6, text: translation.words.numbers.six},
        {value: 7, text: translation.words.numbers.seven},
        {value: 8, text: translation.words.numbers.eight},
        {value: 9, text: translation.words.numbers.nine},
        {value: 10, text: translation.words.numbers.ten}
    ]

    React.useEffect(() => {
        if (setRetainerHeight !== undefined) {
            if (retainerType === "Grid") {
                setRetainerHeightData(retainerGridHeightData)
                setRetainerHeight("200")
            } else if (retainerType === "Tube") {
                setRetainerHeightData(retainerTubeHeightData)
                setRetainerHeight("32")
            } else {
                setRetainerHeightData(retainerLogHeightData)
                setRetainerHeight("140")
            }
        }

    }, [retainerType])

    const handleOnAhead = () => {
        console.log("Ahead")
        if (!holder || !retainer || !holderDistance || !retainerDistance) {
            setShowIncompleteSelectionError(true)
        } else {
            onAhead()
        }
    }

    useKeyBoardPress(["Backspace"], onBack)
    useKeyBoardPress(["Enter", "NumpadEnter"], handleOnAhead)

    return (
        <div>
            <ErrorModal show={showIncompleteSelectionError} header={translation.modals.incompleteSelectionError.title}
                        body={translation.modals.incompleteSelectionError.body}
                        onHide={() => setShowIncompleteSelectionError(false)}/>
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
                                       onSelect={e => setRoofType(e.target.value)}/>
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerType}
                                       lableWidth={"55%"}
                                       defaultValue={retainerType}
                                       optionData={retainingSystemData}
                                       onSelect={e => setRetainerType(e.target.value)}/>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerHeight}
                                       lableWidth={"55%"}
                                       defaultValue={retainerHeight}
                                       optionData={retainerHeightData}
                                       onSelect={e => setRetainerHeight(e.target.value)}/>
                </div>

                <div className="col-md-6 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerRows}
                                       lableWidth={"55%"}
                                       defaultValue={rows}
                                       optionData={retainerRowsData}
                                       onSelect={e => setRows(e.target.value)}/>
                </div>
            </div>

            <div className={"pt-3"}>
                <ProductSelector linearLoad={linearLoad}/>
            </div>

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<AheadButton onAhead={handleOnAhead}/>}/>
            </div>
        </div>
    )
}

/*
ALTERNATIVE WITH MATERIAL
<div className="col-md-4 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerHeight}
                                       lableWidth={"55%"}
                                       defaultValue={retainerHeight}
                                       optionData={retainerHeightData}
                                       onSelect={e => setRetainerHeight(e.target.value)}/>
                </div>

                <div className="col-md-4 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerMaterial}
                                       lableWidth={"55%"}
                                       defaultValue={retainerMaterial}
                                       optionData={retainerMaterialData}
                                       onSelect={e => setRetainerMaterial(e.target.value)}/>
                </div>

                <div className="col-md-4 pt-3">
                    <SelectorWithLabel lableText={translation.inputs.labels.retainersForm.retainerRows}
                                       lableWidth={"55%"}
                                       defaultValue={rows}
                                       optionData={retainerRowsData}
                                       onSelect={e => setRows(e.target.value)}/>
                </div>
 */