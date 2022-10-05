import {Callback} from "../../functions/callbacks";
import React from "react";
import {SendButton} from "../button/SendButton";
import {BackButton} from "../button/BackButton";
import {RoofData} from "../../functions/types";
import {useProvincesGenericEndpoint} from "../../functions/hooks/useProvinces";

export const SnowLoadResultsForm = ({roofData, onBack}: { roofData: RoofData, onBack: Callback }) => {
    const {provinces, loading, error} = useProvincesGenericEndpoint("/shorthand/" + roofData.city.province)

    return (
        <div>
            <div className="table-responsive rounded">
                <table className="table">
                    <tbody>
                    <tr className="table-primary">
                        <th scope="row" colSpan={2}>Roof data</th>
                    </tr>
                    <tr>
                        <td scope="row">City</td>
                        <td>{roofData.city.zip} {roofData.city.name} ({roofData.city.province})</td>
                    </tr>
                    <tr>
                        <td scope="row">Steepness (α)</td>
                        <td>{roofData.steepness} °</td>
                    </tr>
                    <tr>
                        <td scope="row">Roof length (sl)</td>
                        <td>{roofData.roofLength} m</td>
                    </tr>
                    <tr>
                        <td scope="row">Roof width (l)</td>
                        <td>{roofData.roofWidth} m</td>
                    </tr>
                    <tr>
                        <td scope="row">Safety coefficient</td>
                        <td>{roofData.coefficient ? "Yes" : "No"}</td>
                    </tr>
                    <tr className="table-primary">
                        <th scope="row" colSpan={2}>Snow load calculation</th>
                    </tr>
                    <tr>
                        <td scope="row">Altitude</td>
                        <td>{roofData.city.altitude} masl</td>
                    </tr>
                    <tr>
                        <td scope="row">Climatic zone</td>
                        {
                            error ?
                                <td className={"table-danger"}><strong>Error loading provinces...</strong></td>
                                :
                                loading ?
                                    <td className={"table-primary"}><strong>Loading provinces...</strong></td>
                                    :
                                    provinces.length > 0 && provinces[0].shorthand === roofData.city.province ?
                                        <td>{provinces[0].zone}</td>
                                        :
                                        <td className={"table-danger"}>
                                            <strong>Error loading province: {roofData.city.province}</strong>
                                        </td>
                        }
                    </tr>
                    <tr>
                        <td scope="row">Load on the ground</td>
                        <td>{} kN/m^2</td>
                    </tr>
                    <tr>
                        <td scope="row">Load on the roof</td>
                        <td>{} kN/m^2</td>
                    </tr>
                    <tr>
                        <td scope="row">Load per linear meter</td>
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