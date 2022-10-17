import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {DisabledInput} from "../input/DisabledInput";
import {Product, SnowStopProduct} from "../../functions/types";
import {ProductCard} from "./ProductCard";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";
import {ProductCallback} from "../../functions/callbacks";

export const ProductTable = ({linearLoad, onHolderSelect, onRetainerSelect}: {linearLoad: number, onHolderSelect: ProductCallback, onRetainerSelect: ProductCallback}) => {
    const {translation} = useContext(LanguageContext);

    const {data, loading, error} = useHolders()
    const [holders, setHolders] = useState<SnowStopProduct[]>([])

    React.useEffect(() => {
        console.log(data)
        setHolders(data.map(holder => holder))
    }, [data])

    const size = useWindowSize()

    console.log(size)

    return (
        <div className="table-responsive">
            <table className="table shadow-sm rounded">
                {
                    size.width !== undefined && size.width >= 800 ?
                        <ProductTableHeader/>
                        :
                        <ProductTableHeaderSmall/>
                }
                <tbody>
                {
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
                                holders.map((prod, index) => <ProductCard key={index} product={prod} linearLoad={linearLoad}/>
                                )
                            }
                        </>
                }
                </tbody>
            </table>
        </div>
    )
}