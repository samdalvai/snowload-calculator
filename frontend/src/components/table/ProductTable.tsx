import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";
import React, {ReactElement, useContext} from "react";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {SnowStopProductType} from "../../functions/types";

export const ProductTable = ({productList, productType}:
                                 { productList: ReactElement, productType: SnowStopProductType }) => {
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
                        <>
                            {
                                productList
                            }
                        </>
                    </tbody>
                </table>
            </div>
        </>

    )
}