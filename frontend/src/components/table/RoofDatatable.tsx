import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {RoofData} from "../../functions/types";

export const RoofDatatable = ({roofData}: { roofData: RoofData | null}) => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <table className="table shadow-sm rounded">
                <thead>
                <tr className="table-secondary text-center shadow-sm table-header">
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
    )
}