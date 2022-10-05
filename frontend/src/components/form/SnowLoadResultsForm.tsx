import {Callback} from "../../functions/callbacks";
import React from "react";
import {SendButton} from "../button/SendButton";
import {BackButton} from "../button/BackButton";
import {RoofData} from "../../functions/types";

export const SnowLoadResultsForm = ({roofData, onBack}: { roofData: RoofData, onBack: Callback }) => {
    return (
        <div>
            <div className="table-responsive rounded">
                <table className="table">
                    <tbody>
                        <tr className="table-primary">
                            <th scope="row" colSpan={2}>Roof data</th>
                        </tr>
                        <tr>
                            <th scope="row">City</th>
                            <td>{roofData.city.zip} {roofData.city.name} ({roofData.city.province})</td>
                        </tr>
                        <tr>
                            <th scope="row">Steepness</th>
                            <td>{roofData.steepness} °</td>
                        </tr>
                        <tr>
                            <th scope="row">Roof length</th>
                            <td>{roofData.roofLength} m</td>
                        </tr>
                        <tr>
                            <th scope="row">Roof width</th>
                            <td>{roofData.roofWidth} m</td>
                        </tr>
                        <tr>
                            <th scope="row">Safety coefficient</th>
                            <td>{roofData.coefficient ? "Yes" : "No"}</td>
                        </tr>
                            <tr className="table-primary">
                                <th scope="row" colSpan={2}>Snow load calculation</th>
                            </tr>
                        <tr>
                            <th scope="row">Load on the ground</th>
                            <td>{} kN/m^2</td>
                        </tr>
                        <tr>
                            <th scope="row">Load on the roof</th>
                            <td>{} kN/m^2</td>
                        </tr>
                        <tr>
                            <th scope="row">Load per linear meter</th>
                            <td>{} kN/m</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                {
                    roofData ? <div className="col-md-6 pt-3">
                        <SendButton onSend={() => null}/>
                    </div> : ""
                }
                <div className={"col-md-" + (roofData ? "6" : "12") + " pt-3"}>
                    <BackButton onBack={onBack}/>
                </div>
            </div>
        </div>
    )
}