import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {RoofData} from "../../functions/types";

export const RetainerQuantitiesTable = ({roofData}: { roofData: RoofData | null }) => {
    const {translation} = useContext(LanguageContext);

    const {
        rows,
        retainer,
        holderDistance,
    } = useContext(SnowLoadProductContext)

    return (
        <div>
            <div className="table-responsive">
                <table className="table shadow-sm rounded summary-table">
                    <thead>
                    <tr className="table-secondary text-center shadow-sm table-header">
                        <th scope="row"
                            colSpan={3}>{translation.tables.summaryTables.headers.retainerQuantities}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td width={"50%"}
                            style={{verticalAlign: "middle"}}>{translation.tables.productChoice.headers.distance}</td>
                        <td
                            colSpan={2}
                            style={{verticalAlign: "middle"}}>
                            {holderDistance}
                        </td>
                    </tr>
                    <tr>
                        <td width={"50%"}
                            style={{verticalAlign: "middle"}}>{translation.inputs.labels.retainersForm.retainerRows}</td>
                        <td
                            colSpan={2}
                            style={{verticalAlign: "middle"}}>
                            {rows}
                        </td>
                    </tr>
                    <tr>
                        <td width={"50%"} style={{verticalAlign: "middle"}}>
                            {translation.words.nrOfHolders}
                        </td>
                        <td
                            colSpan={2}
                            style={{verticalAlign: "middle"}}>
                            {
                                roofData && holderDistance ?
                                    // Compute the number of holders needed
                                    (((roofData.roofWidth * 1000.0 / holderDistance) + 1) * rows).toFixed(0)
                                    :
                                    ""
                            }
                        </td>
                    </tr>
                    <tr>
                        {
                            retainer ?
                                <>
                                    <td width={"50%"} style={{verticalAlign: "middle"}}>
                                        {translation.words.nrOfRetainers}
                                    </td>
                                    <td
                                        colSpan={2}
                                        style={{verticalAlign: "middle"}}>
                                        {
                                            roofData && holderDistance ?
                                                // Compute the number of holders needed
                                                (Math.round(roofData.roofWidth / 3.0) + roofData.roofWidth % 3) * rows
                                                :
                                                ""
                                        }
                                    </td>
                                </>
                                :
                                ""
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}