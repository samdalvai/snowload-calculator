import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {DisabledInput} from "../input/DisabledInput";
import {Holder, Product, SnowStopProduct} from "../../functions/types";
import {HolderProductCard} from "./HolderProductCard";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";
import {HolderCallback, ProductCallback, RetainerCallback} from "../../functions/callbacks";

export const ProductTable = ({rows, linearLoad}:
                                 {rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback}) => {
    const {translation} = useContext(LanguageContext);

    const {holderData, loading, error} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const [selectedHolder, setSelectedHolder] = useState<Holder | null>(null)

    React.useEffect(() => {
        console.log(holderData)
        setHolders(holderData.map(holder => holder))
    }, [holderData])

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
                                holders.map((prod, index) => <HolderProductCard
                                    key={index}
                                    holder={prod}
                                    linearLoad={linearLoad}
                                    rows={rows}
                                    onSelectHolder={setSelectedHolder}
                                    selected={
                                        selectedHolder ?
                                            prod.code === selectedHolder.code :
                                            false
                                    }/>
                                )
                            }
                        </>
                }
                </tbody>
            </table>
        </div>
    )
}