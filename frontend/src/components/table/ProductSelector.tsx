import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {DisabledInput} from "../input/DisabledInput";
import {Holder, Retainer} from "../../functions/types";
import {HolderProductCard} from "./HolderProductCard";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductTableHeader, ProductTableHeaderSmall} from "./ProductTableHeader";
import {HolderCallback, RetainerCallback} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {Button} from "react-bootstrap";

export const ProductSelector = ({rows, linearLoad}:
                                    { rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback }) => {
    const {translation} = useContext(LanguageContext);

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])

    const [selectedHolder, setSelectedHolder] = useState<Holder | null>(null)

    React.useEffect(() => {
        console.log(holderData)
        setHolders(holderData)
    }, [holderData])

    React.useEffect(() => {
        console.log(retainerData)
        seRetainers(retainerData)
    }, [retainerData])

    return (
        <>
            <ProductTable error={errorHolder}
                          loading={loadingHolder}
                          productList={<>
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
                          </>}
            />
        </>
    )
}