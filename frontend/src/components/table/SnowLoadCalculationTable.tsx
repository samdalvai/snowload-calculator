import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {RoofData, SnowLoadData} from "../../functions/types";

export const SnowLoadCalculationTable = ({roofData, snowLoadData}:
                                             { roofData: RoofData | null, snowLoadData: SnowLoadData }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <table className="table shadow-sm rounded">
                <thead>
                    <tr className="table-secondary text-center shadow-sm table-header">
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
                </tbody>
            </table>
        </div>
    )
}