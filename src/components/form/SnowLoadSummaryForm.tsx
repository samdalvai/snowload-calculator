import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {Title} from "../text/Title";
import {Callback} from "../../functions/callbacks";
import {ButtonsGroup, ButtonsGroupSmall} from "../button/ButtonsGroup";
import {BackButton} from "../button/BackButton";
import {PrintButton} from "../button/PrintButton";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {RoofData, SnowLoadData} from "../../functions/types";
import {RoofDatatable} from "../table/RoofDatatable";
import {SnowLoadCalculationTable} from "../table/SnowLoadCalculationTable";
import {HomeButton} from "../button/HomeButton";
import {RetainerQuantitiesTable} from "../table/RetainerQuantitiesTable";
import {RetainerSystemProductsTable} from "../table/RetainerSystemProductsTable";

export const SnowLoadSummaryForm = ({roofData, snowLoadData, onBack, onHome}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, onBack: Callback, onHome: Callback }) => {
    const {translation} = useContext(LanguageContext);

    useKeyBoardPress(["Backspace"], onBack)

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.summaryForm.title}/>
            </div>

            <div className={"row"}>
                <div className="col-md-6 pt-3">
                    <RoofDatatable roofData={roofData}/>
                </div>
                <div className="col-md-6 pt-3">
                    <SnowLoadCalculationTable roofData={roofData}
                                              snowLoadData={snowLoadData}/>
                </div>
            </div>

            <div className={"row"}>
                <div className="col-md-6 pt-3">
                    <RetainerSystemProductsTable />
                </div>
                <div className="col-md-6 pt-3">
                    <RetainerQuantitiesTable  roofData={roofData}/>
                </div>
            </div>

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<ButtonsGroupSmall leftButton={<PrintButton onPrint={window.print}/>}
                                                              rightButton={<HomeButton onHome={onHome}/>}/>}/>
            </div>
        </div>
    )
}