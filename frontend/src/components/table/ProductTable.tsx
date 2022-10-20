import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";
import {DisabledInput} from "../input/DisabledInput";
import React, {ReactElement, useContext, useState} from "react";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {LanguageContext} from "../language/LanguageContext";
import {ErrorInput} from "../input/ErrorInput";
import {SnowStopProductType} from "../../functions/types";

export const ProductTable = ({ loading, error, productList, productType}:
                                 { loading: boolean, error: any, productList: ReactElement, productType: SnowStopProductType }) => {
    const {translation} = useContext(LanguageContext);

    const size = useWindowSize()

    return (
        <>
            <div className="table-responsive">
                <table className="table shadow-sm rounded">
                    {
                        size.width !== undefined && size.width >= 800 ?
                            <ProductTableHeader productType={productType}/>
                            :
                            <ProductTableHeaderSmall/>
                    }
                    <tbody>
                    {

                        !error ?
                            loading ?
                                <>
                                    <tr>
                                        <td colSpan={11}>
                                            <DisabledInput placeHolder={translation.loading.products}/>
                                        </td>
                                    </tr>
                                </> :
                                <>
                                    {
                                        productList
                                    }
                                </>
                            :
                            <td colSpan={11}>
                                <ErrorInput message={translation.error.products}/>
                            </td>

                    }
                    </tbody>
                </table>
            </div>
        </>

    )
}