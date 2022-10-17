import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {DisabledInput} from "../input/DisabledInput";
import {Product} from "../../functions/types";
import {ProductCard} from "./ProductCard";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";

export const ProductTable = () => {
    const {translation} = useContext(LanguageContext);
    const headers = translation.tables.productChoice.headers

    const {holders, loading, error} = useHolders()
    const [product, setProduct] = useState<Product[]>([])

    React.useEffect(() => {
        console.log(holders)
        setProduct(holders.map(holder => holder.productInfo))
    }, [holders])

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
                                product.map((prod, index) => <ProductCard key={index} product={prod}/>
                                )
                            }
                        </>
                }
                </tbody>
            </table>
        </div>
    )
}