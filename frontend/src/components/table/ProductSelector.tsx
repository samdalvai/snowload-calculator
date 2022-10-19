import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {HolderCallback, RetainerCallback} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";

export const ProductSelector = ({rows, linearLoad}:
                                    { rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback }) => {
    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])

    const [selectedHolder, setSelectedHolder] = useState<SnowStopProduct | null>(null)
    const [selectedRetainer, setSelectedRetainer] = useState<SnowStopProduct | null>(null)

    React.useEffect(() => {
        setHolders(holderData.map(data => ({...data, type: "Holder"})))
    }, [holderData])

    React.useEffect(() => {
        seRetainers(retainerData.map(data => ({...data, type: "Retainer"})))
    }, [retainerData])

    return (
        <div>
            <div className={"pb-3"}>
                <ProductTable error={errorHolder}
                               loading={loadingHolder}
                               productList={<>
                                   {
                                       holders.map((prod, index) => <ProductCard
                                           key={index}
                                           product={prod}
                                           linearLoad={linearLoad}
                                           rows={rows}
                                           onSelect={setSelectedHolder}
                                           selected={
                                               selectedHolder ?
                                                   prod.code === selectedHolder.code :
                                                   false
                                           }/>
                                       )
                                   }
                               </>}
                />
            </div>
            <div>
                <ProductTable error={errorRetainer}
                               loading={loadingRetainer}
                               productList={<>
                                   {
                                       retainers.map((prod, index) => <ProductCard
                                           key={index * 100}
                                           product={prod}
                                           linearLoad={linearLoad}
                                           rows={rows}
                                           onSelect={setSelectedRetainer}
                                           selected={
                                               selectedRetainer ?
                                                   prod.code === selectedRetainer.code :
                                                   false
                                           }/>
                                       )
                                   }
                               </>}
                />
            </div>
        </div>
    )
}