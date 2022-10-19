import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {Callback, HolderCallback, RetainerCallback} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";
import {TitleCard} from "../card/TitleCard";
import {ErrorModal} from "../modal/ErrorModal";

export const ProductSelector = ({rows, linearLoad}:
                                    { rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback }) => {
    const {translation} = useContext(LanguageContext);

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])

    const [selectedHolder, setSelectedHolder] = useState<SnowStopProduct | null>(null)
    const [selectedRetainer, setSelectedRetainer] = useState<SnowStopProduct | null>(null)

    const [showError, setShowError] = useState<boolean>(false)

    React.useEffect(() => {
        setHolders(holderData.map(data => ({...data, type: "Holder"})))
    }, [holderData])

    React.useEffect(() => {
        seRetainers(retainerData.map(data => ({...data, type: "Retainer"})))
    }, [retainerData])

    return (
        <div>
            {
                showError ?
                    <ErrorModal show={showError} header={translation.modals.resistanceError.title}
                                body={translation.modals.resistanceError.body}
                                onHide={() => setShowError(false)}/>
                    :
                    ""
            }
            <div className={""}>
                <TitleCard title={translation.words.holder}/>
            </div>
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
                                          } onResistanceError={() => setShowError(true)}/>
                                      )
                                  }
                              </>}
                />
            </div>
            {
                selectedHolder ?
                    <div>
                        <div className={""}>
                            <TitleCard title={translation.words.retainer}/>
                        </div>
                        <ProductTable error={errorRetainer}
                                      loading={loadingRetainer}
                                      productList={<>
                                          {
                                              retainers.map((prod, index) => <ProductCard
                                                  key={index}
                                                  product={prod}
                                                  linearLoad={linearLoad}
                                                  rows={rows}
                                                  onSelect={setSelectedRetainer}
                                                  selected={
                                                      selectedRetainer ?
                                                          prod.code === selectedRetainer.code :
                                                          false
                                                  } onResistanceError={() => setShowError(true)}/>
                                              )
                                          }
                                      </>}
                        />
                    </div>
                    :
                    ""
            }
        </div>
    )
}