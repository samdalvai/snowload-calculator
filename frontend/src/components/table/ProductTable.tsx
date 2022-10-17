import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {DisabledInput} from "../input/DisabledInput";
import {Product} from "../../functions/types";
import {ProductCard} from "./ProductCard";
import {useWindowSize} from "../../functions/hooks/useWindowSize";

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
                <thead>
                <tr className={"table-secondary table-header"}>
                    {
                        [headers.image, headers.code, headers.name, headers.height, headers.distance].map((header, index) => (
                                index < 4 ?
                                    <th scope="col" rowSpan={2} className={"border-right-lightgray"}
                                        key={index}>{header}</th>
                                    :
                                    <th scope="col" colSpan={7} className={"text-center"} key={index}>{header}</th>
                            )
                        )
                    }
                </tr>
                <tr className={"table-secondary shadow-sm table-header"}>
                    {
                        ["400", "500", "600", "700", "800", "900", "1000"].map((dist, index) => (
                            index < 6 ?
                                <th scope="col" className={"border-right-lightgray"} key={index + 10}>{dist}</th>
                                :
                                <th scope="col" key={index + 10}>{dist}</th>
                        ))
                    }
                </tr>
                </thead>
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