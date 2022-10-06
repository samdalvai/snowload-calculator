import {Callback} from "../../functions/callbacks";
import React from "react";
import {BackButton} from "../button/BackButton";
import {RoofData, SnowLoadData} from "../../functions/types";
import {NonDismissableAlert} from "../alert/Alert";
import {PrintButton} from "../button/PrintButton";
import {DisabledInput} from "../input/DisabledInput";

export const SnowLoadResultsForm = ({roofData, snowLoadData, error, loading, onBack}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback }) => {
    return (
        <div>
            <div>
                {
                    !error ?
                        <div className="row">
                            <div className="col-md-6">
                                <table className="table">
                                    <thead>
                                        <tr className="table-secondary">
                                            <th scope="row" colSpan={2}>Roof data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td width={"50%"} scope="row">City</td>
                                        <td width={"50%"}>{roofData?.city.zip} {roofData?.city.name} ({roofData?.city.province})</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"} scope="row">Steepness (α)</td>
                                        <td width={"50%"}>{roofData?.steepness} °</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"} scope="row">Roof length (sl)</td>
                                        <td width={"50%"}>{roofData?.roofLength} m</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"} scope="row">Roof width (l)</td>
                                        <td width={"50%"}>{roofData?.roofWidth} m</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"} scope="row">Safety coefficient</td>
                                        <td width={"50%"}>{roofData?.coefficient ? "Yes" : "No"}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6">
                                <table className="table">
                                    <thead>
                                        <tr className="table-secondary">
                                            <th scope="row" colSpan={2}>Snow load calculation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td width={"50%"} scope="row">Altitude</td>
                                        <td width={"50%"}>{roofData?.city.altitude} masl</td>
                                    </tr>
                                    <tr>
                                        <td width={"50%"} scope="row">Climatic zone</td>
                                        <td width={"50%"}>{snowLoadData.zone}</td>
                                    </tr>
                                    {
                                        !loading ?
                                            <>
                                                <tr>
                                                    <td width={"50%"} scope="row">Load on the ground</td>
                                                    <td width={"50%"}>{snowLoadData.groundLoad.toFixed(2)} kN/m<sup>2</sup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={"50%"} scope="row">Load on the roof</td>
                                                    <td width={"50%"}>{snowLoadData.roofLoad.toFixed(2)} kN/m<sup>2</sup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width={"50%"} scope="row">Load per linear meter</td>
                                                    <td width={"50%"}>{snowLoadData.linearLoad.toFixed(2)} kN/m</td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <DisabledInput placeHolder={"Computing snowload..."}/>
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
                            message={"An error occurred in the snow load calculation, please go back and try again..."}
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