import {ProductImage} from "./ProductImage";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const RetainerSystemProductsTable = () => {
    const {translation} = useContext(LanguageContext);

    const {
        holder,
        retainer
    } = useContext(SnowLoadProductContext)

    return (
        <div>
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
    )
}