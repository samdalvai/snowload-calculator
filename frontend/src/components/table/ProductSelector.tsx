import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {HolderCallback, NumberCallBack, RetainerCallback} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";
import {TitleCardSmall} from "../card/TitleCard";
import {ErrorModal} from "../modal/ErrorModal";

export const ProductSelector = ({rows, linearLoad, onSelectHolderDistance, onSelectRetainerDistance}:
                                    { rows: number, linearLoad: number, onSelectHolder: HolderCallback, onSelectRetainer: RetainerCallback, onSelectHolderDistance: NumberCallBack, onSelectRetainerDistance: NumberCallBack }) => {
    const {translation} = useContext(LanguageContext);

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])

    const [selectedHolder, setSelectedHolder] = useState<SnowStopProduct | null>(null)
    const [selectedRetainer, setSelectedRetainer] = useState<SnowStopProduct | null>(null)

    const [holderDistance, setHolderDistance] = useState<number | null>(null)
    const [retainerDistance, setRetainerDistance] = useState<number | null>(null)

    const [showResistanceError, setShowResistanceError] = useState<boolean>(false)
    const [showDistanceMismatchError, setShowDistanceMismatchError] = useState<boolean>(false)

    React.useEffect(() => {
        setHolders(holderData.map(data => ({...data, type: "Holder"})))
    }, [holderData])

    React.useEffect(() => {
        seRetainers(retainerData.map(data => ({...data, type: "Retainer"})))
    }, [retainerData])

    React.useEffect(() => {
        if (holderDistance !== retainerDistance)
            setShowDistanceMismatchError(true)
        else {
            if (holderDistance !== null && retainerDistance !== null){
                onSelectHolderDistance(holderDistance)
                onSelectRetainerDistance(retainerDistance)
            }
        }

    },[retainerDistance])

    return (
        <div>
            {
                showResistanceError ?
                    <ErrorModal show={showResistanceError} header={translation.modals.resistanceError.title}
                                body={translation.modals.resistanceError.body}
                                onHide={() => setShowResistanceError(false)}/>
                    :
                    ""
            }
            {
                showDistanceMismatchError ?
                    <ErrorModal show={showDistanceMismatchError} header={translation.modals.distanceMismatchError.title}
                                body={translation.modals.resistanceError.body}
                                onHide={() => setShowDistanceMismatchError(false)}/>
                    :
                    ""
            }
            <div>
                <TitleCardSmall title={translation.words.holder}/>
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
                                          } onResistanceError={() => setShowResistanceError(true)}
                                          onSelectDistance={setHolderDistance}/>
                                      )
                                  }
                              </>}
                />
            </div>
            {
                selectedHolder ?
                    <div>
                        <div className={""}>
                            <TitleCardSmall title={translation.words.retainer}/>
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
                                                  } onResistanceError={() => setShowResistanceError(true)}
                                                  onSelectDistance={setRetainerDistance}/>
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