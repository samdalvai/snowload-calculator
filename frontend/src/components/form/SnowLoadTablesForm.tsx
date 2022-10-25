import {RoofData, SnowLoadData} from "../../functions/types";
import {Callback} from "../../functions/callbacks";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {ButtonsGroup, ButtonsGroupSmall} from "../button/ButtonsGroup";
import {PrintButton} from "../button/PrintButton";
import {BackButton} from "../button/BackButton";
import {AheadButton} from "../button/AheadButton";
import {Title} from "../text/Title";
import {RoofDatatable} from "../table/RoofDatatable";
import {SnowLoadCalculationTable} from "../table/SnowLoadCalculationTable";

export const SnowLoadTablesForm = ({roofData, snowLoadData, onBack, onAhead}:
                                       { roofData: RoofData | null, snowLoadData: SnowLoadData, onBack: Callback, onAhead: Callback }) => {
    const {translation} = useContext(LanguageContext);

    useKeyBoardPress(["Backspace"], onBack)
    useKeyBoardPress(["Enter", "NumpadEnter"], onAhead)

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.resultsForm.title}/>
            </div>
            <div>
                <div className={"row"}>
                    <div className="col-md-6 pt-3">
                        <RoofDatatable roofData={roofData}/>
                    </div>
                    <div className="col-md-6 pt-3">
                        <SnowLoadCalculationTable roofData={roofData}
                                                  snowLoadData={snowLoadData}/>
                    </div>
                </div>
            </div>

            <div className={"pb-3"}>
                <ButtonsGroup leftButton={roofData ? <PrintButton onPrint={window.print}/> : <div></div>}
                              rightButton={<ButtonsGroupSmall
                                  leftButton={<BackButton onBack={onBack}/>}
                                  rightButton={<AheadButton onAhead={onAhead}/>}
                              />}
                />
            </div>
        </div>
    )
}