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
            <div className="table-responsive">
                {
                    !error ?
                        <table className="table">
                            <tbody>
                            <tr className="table-secondary">
                                <th scope="row" colSpan={2}>Roof data</th>
                            </tr>
                            <tr>
                                <td scope="row">City</td>
                                <td>{roofData?.city.zip} {roofData?.city.name} ({roofData?.city.province})</td>
                            </tr>
                            <tr>
                                <td scope="row">Steepness (α)</td>
                                <td>{roofData?.steepness} °</td>
                            </tr>
                            <tr>
                                <td scope="row">Roof length (sl)</td>
                                <td>{roofData?.roofLength} m</td>
                            </tr>
                            <tr>
                                <td scope="row">Roof width (l)</td>
                                <td>{roofData?.roofWidth} m</td>
                            </tr>
                            <tr>
                                <td scope="row">Safety coefficient</td>
                                <td>{roofData?.coefficient ? "Yes" : "No"}</td>
                            </tr>
                            <tr className="table-secondary">
                                <th scope="row" colSpan={2}>Snow load calculation</th>
                            </tr>
                            <tr>
                                <td scope="row">Altitude</td>
                                <td>{roofData?.city.altitude} masl</td>
                            </tr>
                            <tr>
                                <td scope="row">Climatic zone</td>
                                <td>{snowLoadData.zone}</td>
                            </tr>
                            {
                                !loading ?
                                    <>
                                        <tr>
                                            <td scope="row">Load on the ground</td>
                                            <td>{snowLoadData.groundLoad.toFixed(2)} kN/m<sup>2</sup></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Load on the roof</td>
                                            <td>{snowLoadData.roofLoad.toFixed(2)} kN/m<sup>2</sup></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Load per linear meter</td>
                                            <td>{snowLoadData.linearLoad.toFixed(2)} kN/m</td>
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