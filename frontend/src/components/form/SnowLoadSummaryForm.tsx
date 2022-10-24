import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {Title} from "../text/Title";
import {Callback} from "../../functions/callbacks";
import {ButtonsGroup} from "../button/ButtonsGroup";
import {BackButton} from "../button/BackButton";
import {AheadButton} from "../button/AheadButton";
import {PrintButton} from "../button/PrintButton";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";

export const SnowLoadSummaryForm = ({onBack}: {onBack: Callback}) => {
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

    useKeyBoardPress(["Backspace"], onBack)

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.summaryForm.title}/>
            </div>

            

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<PrintButton  onPrint={window.print}/>}/>
            </div>
        </div>
    )
}