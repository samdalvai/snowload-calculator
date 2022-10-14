import {RoofData, SnowLoadData} from "../../functions/types";
import {Callback} from "../../functions/callbacks";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {DisabledInput} from "../input/DisabledInput";
import {NonDismissableAlert} from "../alert/NonDismissableAlert";
import {ButtonsGroup, ButtonsGroupSmall} from "../button/ButtonsGroup";
import {PrintButton} from "../button/PrintButton";
import {BackButton} from "../button/BackButton";
import {AheadButton} from "../button/AheadButton";
import {TitleCard} from "../card/TitleCard";
import {Title} from "../text/Title";

export const SnowLoadTablesForm = ({roofData, snowLoadData, error, loading, onBack, onAhead}:
                                     { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback, onAhead: Callback }) => {
    const {translation} = useContext(LanguageContext);

    useKeyBoardPress(["Backspace"], onBack)
    useKeyBoardPress(["Enter", "NumpadEnter"], onAhead)

    const tableHeaderStyle = {
        borderTopWidth: "1.5px",
        borderBottomWidth: "1.5px",
        borderColor: "black"
    }

    return (
        <div>
            <div className={"py-3"}>
                <Title  text={translation.pages.resultsForm.title}/>
            </div>
            <div>
                {
                    !error ?
                        <div className="row">
                            <div className="col-md-6 pt-3">
                                <table className="table">
                                    <thead>
                                    <tr className="table-secondary text-center shadow-sm" style={tableHeaderStyle}>
                                        <th scope="row" colSpan={2}>{translation.tables.roofData.title}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.roofData.body.city}</td>
                                        <td width={"50%"}>{roofData?.city.zip} {roofData?.city.name} ({roofData?.city.province})</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.roofData.body.steepness.label}</td>
                                        <td width={"50%"}>{roofData?.steepness} °</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.roofData.body.roofLength.label}</td>
                                        <td width={"50%"}>{roofData?.roofLength} m</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.roofData.body.roofWidth.label}</td>
                                        <td width={"50%"}>{roofData?.roofWidth} m</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.roofData.body.safetyCoefficient.label}</td>
                                        <td width={"50%"}>{roofData?.coefficient ? translation.words.yes : translation.words.no}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 pt-3">
                                <table className="table">
                                    <thead>
                                    <tr className="table-secondary text-center shadow-sm" style={tableHeaderStyle}>
                                        <th scope="row" colSpan={2}>{translation.tables.snowLoadCalculation.title}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td width={"50%"}>{translation.tables.snowLoadCalculation.body.altitude.label}</td>
                                        <td width={"50%"}>{roofData?.city.altitude} {translation.tables.snowLoadCalculation.body.altitude.units}</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"}>Climatic zone</td>
                                        <td width={"50%"}>{snowLoadData.zone}</td>
                                    </tr>
                                    {
                                        !loading ?
                                            <>
                                                <tr>
                                                    <td width={"50%"}>{translation.tables.snowLoadCalculation.body.groundLoad.label}</td>
                                                    <td width={"50%"}>{snowLoadData.groundLoad.toFixed(2)} kN/m<sup>2</sup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={"50%"}>{translation.tables.snowLoadCalculation.body.roofLoad.label}</td>
                                                    <td width={"50%"}>{snowLoadData.roofLoad.toFixed(2)} kN/m<sup>2</sup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={"50%"}>{translation.tables.snowLoadCalculation.body.linearLoad.label}</td>
                                                    <td width={"50%"}>{snowLoadData.linearLoad.toFixed(2)} kN/m</td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <DisabledInput placeHolder={translation.loading.computation}/>
                                                    </td>
                                                </tr>
                                            </>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <NonDismissableAlert
                            message={translation.alerts.computationError}
                            type={"danger"}/>
                }
            </div>

            <div>
                <ButtonsGroup leftButton={roofData ? <PrintButton onGenerate={window.print}/> : <div></div>}
                              rightButton={<ButtonsGroupSmall
                                  leftButton={<BackButton onBack={onBack}/>}
                                  rightButton={<AheadButton onAhead={onAhead}/>}
                              />}
                />
            </div>
        </div>
    )
}