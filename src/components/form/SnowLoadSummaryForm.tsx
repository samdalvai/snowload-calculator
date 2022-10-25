import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {Title} from "../text/Title";
import {Callback} from "../../functions/callbacks";
import {ButtonsGroup, ButtonsGroupSmall} from "../button/ButtonsGroup";
import {BackButton} from "../button/BackButton";
import {PrintButton} from "../button/PrintButton";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";
import {RoofData, SnowLoadData} from "../../functions/types";
import {RoofDatatable} from "../table/RoofDatatable";
import {SnowLoadCalculationTable} from "../table/SnowLoadCalculationTable";
import {ProductImage} from "../table/ProductImage";
import {HomeButton} from "../button/HomeButton";

export const SnowLoadSummaryForm = ({roofData, snowLoadData, onBack, onHome}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, onBack: Callback, onHome: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const {
        rows,
        holder,
        retainer,
        holderDistance,
    } = useContext(SnowLoadProductContext)

    useKeyBoardPress(["Backspace"], onBack)

    return (
        <div>
            <div className={"py-3"}>
                <Title text={translation.pages.summaryForm.title}/>
            </div>

            <div className={"row"}>
                <div className="col-md-6 pt-3">
                    <RoofDatatable roofData={roofData}/>
                </div>
                <div className="col-md-6 pt-3">
                    <SnowLoadCalculationTable roofData={roofData}
                                              snowLoadData={snowLoadData}/>
                </div>
            </div>

            <div className={"row"}>
                <div className="col-md-6 pt-3">
                    <div className="table-responsive">
                        <table className="table shadow-sm rounded summary-table">
                            <thead>
                                <tr className="table-secondary text-center shadow-sm table-header">
                                    <th scope="row"
                                        colSpan={3}>{translation.tables.summaryTables.headers.retainerProducts}</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                holder ?
                                    <tr>
                                        <td width={"25%"}
                                            style={{verticalAlign: "middle"}}>{translation.words.holder}</td>
                                        <td className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <ProductImage url={holder ? holder.productInfo.image : ""}/>
                                        </td>
                                        <td
                                            className={""}
                                            style={{verticalAlign: "middle"}}>
                                            <div>
                                                <p>{holder.productInfo.productCode}</p>
                                                <p>{holder.productInfo.name}</p>
                                            </div>
                                        </td>
                                    </tr>
                                    :
                                    ""
                            }
                            {
                                retainer ?
                                    <tr>
                                        <td width={"25%"}
                                            style={{verticalAlign: "middle"}}>{translation.words.retainer}</td>
                                        <td className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <ProductImage url={retainer.productInfo.image}/>
                                        </td>
                                        <td className={""}
                                            style={{verticalAlign: "middle"}}>
                                            <div>
                                                <p>{retainer.productInfo.productCode}</p>
                                                <p>{retainer.productInfo.name}</p>
                                            </div>
                                        </td>
                                    </tr>
                                    :
                                    ""
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-6 pt-3">
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
            </div>


            <div className={"pb-3"}>
                <ButtonsGroup leftButton={<BackButton onBack={onBack}/>}
                              rightButton={<ButtonsGroupSmall leftButton={<PrintButton onPrint={window.print}/>}
                                                              rightButton={<HomeButton onHome={onHome}/>}/>}/>
            </div>
        </div>
    )
}

/*
<ProductCard
                linearLoad={snowLoadData.linearLoad}
                onResistanceError={() => null}
                onSelect={() => null}
                onSelectDistance={() => null}
                product={holder? holder : null}
                selected/>
 */