import {Callback} from "../../functions/callbacks";
import React, {useContext} from "react";
import {BackButton} from "../button/BackButton";
import {RoofData, SnowLoadData} from "../../functions/types";
import {NonDismissableAlert} from "../alert/NonDismissableAlert";
import {PrintButton} from "../button/PrintButton";
import {DisabledInput} from "../input/DisabledInput";
import {LanguageContext} from "../language/LanguageContext";

export const SnowLoadResultsForm = ({roofData, snowLoadData, error, loading, onBack}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    React.useEffect(() => {
        const listener = (event: { code: string }) => {
            const pressedKey = event.code

            if (pressedKey === "Backspace")
                handleBackspace();
        };

        // handle keyboard event only if window element exist (Eg. on pc)
        if (typeof document !== 'undefined'){
            document.addEventListener("keydown", listener);
            return () => {
                document.removeEventListener("keydown", listener);
            };
        }
    });

    const handleBackspace = () => {
        onBack();
    }

    const tableHeaderStyle = {
        borderTopWidth: "1.5px",
        borderBottomWidth: "1.5px",
        borderColor: "black"
    }

    return (
        <div>
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

            <div className="row">
                {
                    roofData ? <div className="col-md-6 pt-3">
                        <PrintButton onGenerate={window.print}/>
                    </div> : ""
                }
                <div className={"col-md-" + (roofData ? "6" : "12") + " pt-3"}>
                    <BackButton onBack={onBack}/>
                </div>
            </div>
        </div>
    )
}