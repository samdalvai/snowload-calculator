import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer} from "../../functions/classes";
import {HolderProductCard} from "./HolderProductCard";
import {HolderCallback, RetainerCallback} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";

export const ProductSelector = ({rows, linearLoad}:
                                    { rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback }) => {
    const {translation} = useContext(LanguageContext);

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])

    const [selectedHolder, setSelectedHolder] = useState<Holder | null>(null)

    React.useEffect(() => {
        setHolders(holderData)
    }, [holderData])

    React.useEffect(() => {
        seRetainers(retainerData)
    }, [retainerData])

    return (
        <div>
            <div className={"pb-3"}>
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
            </div>
            <div>
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
            </div>
        </div>
    )
}