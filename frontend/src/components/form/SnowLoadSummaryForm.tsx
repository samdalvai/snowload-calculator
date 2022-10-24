import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {Title} from "../text/Title";

export const SnowLoadSummaryForm = () => {
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

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.summaryForm.title}/>
            </div>
        </div>
    )
}