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
                        <table className="table shadow-sm rounded">
                            <thead>
                            <tr className="table-secondary text-center shadow-sm table-header">
                                <th scope="row" colSpan={3}>{translation.tables.summaryTables.headers.retainerProducts}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                holder ?
                                    <tr>
                                        <td width={"25%"}
                                            style={{verticalAlign: "middle"}}>{translation.words.holder}</td>
                                        <th className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <ProductImage url={holder ? holder.productInfo.image : ""}/>
                                        </th>
                                        <th className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <div>
                                                <p>{translation.tables.productChoice.headers.code}: {holder.productInfo.productCode}</p>
                                                <p>{translation.tables.productChoice.headers.name}: {holder.productInfo.name}</p>
                                            </div>
                                        </th>
                                    </tr>
                                    :
                                    ""
                            }
                            {
                                retainer ?
                                    <tr>
                                        <td width={"25%"}
                                            style={{verticalAlign: "middle"}}>{translation.words.retainer}</td>
                                        <th className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <ProductImage url={retainer.productInfo.image}/>
                                        </th>
                                        <th className={"text-center"}
                                            style={{verticalAlign: "middle"}}>
                                            <div>
                                                <p>{translation.tables.productChoice.headers.code}: {retainer.productInfo.productCode}</p>
                                                <p>{translation.tables.productChoice.headers.name}: {retainer.productInfo.name}</p>
                                            </div>
                                        </th>
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
                        <table className="table shadow-sm rounded">
                            <thead>
                            <tr className="table-secondary text-center shadow-sm table-header">
                                <th scope="row" colSpan={3}>{translation.tables.summaryTables.headers.retainerQuantities}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width={"25%"}
                                    style={{verticalAlign: "middle"}}>{translation.tables.productChoice.headers.distance}</td>
                                <th className={"text-center"}
                                    colSpan={2}
                                    style={{verticalAlign: "middle"}}>
                                    {holderDistance}
                                </th>
                            </tr>
                            <tr>
                                <td width={"25%"}
                                    style={{verticalAlign: "middle"}}>{translation.inputs.labels.retainersForm.retainerRows}</td>
                                <th className={"text-center"}
                                    colSpan={2}
                                    style={{verticalAlign: "middle"}}>
                                    {rows}
                                </th>
                            </tr>
                            <tr>
                                <td width={"25%"} style={{verticalAlign: "middle"}}>
                                    {translation.words.nrOfHolders}
                                </td>
                                <th className={"text-center"}
                                    colSpan={2}
                                    style={{verticalAlign: "middle"}}>
                                    {
                                        roofData && holderDistance ?
                                            // Compute the number of holders needed
                                            (((roofData.roofWidth * 1000.0 / holderDistance) + 1) * rows).toFixed(0)
                                            :
                                            ""
                                    }
                                </th>
                            </tr>
                            <tr>

                                {
                                    retainer ?
                                        <>
                                            <td width={"25%"} style={{verticalAlign: "middle"}}>
                                                {translation.words.nrOfRetainers}
                                            </td>
                                            <th className={"text-center"}
                                                colSpan={2}
                                                style={{verticalAlign: "middle"}}>
                                                {
                                                    roofData && holderDistance ?
                                                        // Compute the number of holders needed
                                                        (Math.round(roofData.roofWidth / 3.0) + roofData.roofWidth % 3) * rows
                                                        :
                                                        ""
                                                }
                                            </th>
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