import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {NumberCallBack} from "../../functions/callbacks";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";
import {TitleCardSmall} from "../card/TitleCard";
import {ErrorModal} from "../modal/ErrorModal";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const ProductSelector = ({linearLoad, onSelectHolderDistance, onSelectRetainerDistance}:
                                    { linearLoad: number, onSelectHolderDistance: NumberCallBack, onSelectRetainerDistance: NumberCallBack }) => {
    const {translation} = useContext(LanguageContext);
    const {roofType, retainerType, retainerHeight, holder, setHolder, retainer, setRetainer} = useContext(SnowLoadProductContext)

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])
    const [filteredHolders, setFilteredHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])
    const [filteredRetainers, setFilteredRetainers] = useState<Retainer[]>([])

    //const [selectedHolder, setSelectedHolder] = useState<SnowStopProduct | null>(null)
    //const [selectedRetainer, setSelectedRetainer] = useState<SnowStopProduct | null>(null)

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
            if (holderDistance !== null && retainerDistance !== null) {
                onSelectHolderDistance(holderDistance)
                onSelectRetainerDistance(retainerDistance)
            }
        }

    }, [retainerDistance])

    React.useEffect(() => {
        filerHolders()
        filterRetainers()

        if (setHolder !== undefined)
            setHolder(null)

        if (setRetainer !== undefined)
            setRetainer(null)

    }, [holders, retainers, roofType, retainerType, retainerHeight])

    const filerHolders = () => {
        const filteredHolders = holders.filter(h =>
            h.roofType === roofType &&
            h.productInfo.retainerType === retainerType &&
            h.productInfo.retainerHeight === retainerHeight
        )

        setFilteredHolders(filteredHolders)
    }

    const filterRetainers = () => {
        const filteredRetainers = retainers.filter(r =>
            r.productInfo.retainerType === retainerType &&
            r.productInfo.retainerHeight === retainerHeight
        )

        setFilteredRetainers(filteredRetainers)
    }

    const handleOnSelect = (product: SnowStopProduct) => {
        if (product.type === "Holder") {
            if (setHolder !== undefined)
                setHolder(product)
        } else {
            if (setRetainer !== undefined)
                setRetainer(product)
        }
    }

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
                                      filteredHolders.map((prod, index) => <ProductCard
                                          key={index}
                                          product={prod}
                                          linearLoad={linearLoad}
                                          onSelect={handleOnSelect}
                                          selected={
                                              holder ?
                                                  prod.code === holder.code :
                                                  false
                                          } onResistanceError={() => setShowResistanceError(true)}
                                          onSelectDistance={setHolderDistance}/>
                                      )
                                  }
                              </>}
                              productType={"Holder"}/>
            </div>
            {
                holder ?
                    <div>
                        <div>
                            <TitleCardSmall title={translation.words.retainer}/>
                        </div>
                        <ProductTable error={errorRetainer}
                                      loading={loadingRetainer}
                                      productList={<>
                                          {
                                              filteredRetainers.map((prod, index) => <ProductCard
                                                  key={index}
                                                  product={prod}
                                                  linearLoad={linearLoad}
                                                  onSelect={handleOnSelect}
                                                  selected={
                                                      retainer ?
                                                          prod.code === retainer.code :
                                                          false
                                                  } onResistanceError={() => setShowResistanceError(true)}
                                                  onSelectDistance={setRetainerDistance}/>
                                              )
                                          }
                                      </>}
                                      productType={"Retainer"}/>
                    </div>
                    :
                    ""
            }
        </div>
    )
}