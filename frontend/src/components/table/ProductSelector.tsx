import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {useHolders} from "../../functions/hooks/useHolders";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {useRetainers} from "../../functions/hooks/useRetainers";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";
import {TitleCardSmall} from "../card/TitleCard";
import {ErrorModal} from "../modal/ErrorModal";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {DisabledInput} from "../input/DisabledInput";

export const ProductSelector = ({linearLoad}:
                                    { linearLoad: number }) => {
    const {translation} = useContext(LanguageContext);

    const {
        roofType,
        retainerType,
        retainerHeight,
        retainerMaterial,
        rows,
        holder,
        setHolder,
        retainer,
        setRetainer,
        holderDistance,
        setHolderDistance,
        retainerDistance,
        setRetainerDistance
    } = useContext(SnowLoadProductContext)

    const {holderData, loadingHolder, errorHolder} = useHolders()
    const [holders, setHolders] = useState<Holder[]>([])
    const [filteredHolders, setFilteredHolders] = useState<Holder[]>([])

    const {retainerData, loadingRetainer, errorRetainer} = useRetainers()
    const [retainers, seRetainers] = useState<Retainer[]>([])
    const [filteredRetainers, setFilteredRetainers] = useState<Retainer[]>([])

    const [showResistanceError, setShowResistanceError] = useState<boolean>(false)
    const [showDistanceMismatchError, setShowDistanceMismatchError] = useState<boolean>(false)

    React.useEffect(() => {
        setHolders(holderData.map(data => ({...data, type: "Holder"})))
    }, [holderData])

    React.useEffect(() => {
        seRetainers(retainerData.map(data => ({...data, type: "Retainer"})))
    }, [retainerData])

    React.useEffect(() => {
        if (holderDistance !== null && retainerDistance !== null && holderDistance !== retainerDistance) {
            setShowDistanceMismatchError(true)
            setRetainerDistance(null)
            setRetainer(null)
        }
    }, [retainerDistance])

    React.useEffect(() => {
        filerHolders()
        filterRetainers()
        setHolder(null)
        setRetainer(null)
        setHolderDistance(null)
        setRetainerDistance(null)

    }, [holders, retainers, roofType, retainerType, retainerHeight, retainerMaterial, rows])

    const filerHolders = () => {
        const filteredHolders = holders.filter(h =>
            h.roofType === roofType &&
            h.productInfo.retainerType === retainerType &&
            h.productInfo.retainerHeight === retainerHeight &&
            h.productInfo.material === retainerMaterial
        )

        setFilteredHolders(filteredHolders)
    }

    const filterRetainers = () => {
        const filteredRetainers = retainers.filter(r =>
            r.productInfo.retainerType === retainerType &&
            r.productInfo.retainerHeight === retainerHeight &&
            r.productInfo.material === retainerMaterial ||
            (retainerType === "Tube" && retainerMaterial === "Zink Steel" ? r.productInfo.material === "Aluminium" && r.productInfo.retainerHeight === retainerHeight : false)
        )
        // The last line of the equivalence returns also aluminium tubes for Zink steel holders

        setFilteredRetainers(filteredRetainers)
    }

    const handleOnSelect = (product: SnowStopProduct) => {
        if (product.type === "Holder") {
            setHolder(product)
        } else {
            setRetainer(product)
        }
    }

    return (
        <div>
            <ErrorModal show={showResistanceError} header={translation.modals.resistanceError.title}
                        body={translation.modals.resistanceError.body}
                        onHide={() => setShowResistanceError(false)}/>
            <ErrorModal show={showDistanceMismatchError} header={translation.modals.distanceMismatchError.title}
                        body={translation.modals.distanceMismatchError.body}
                        onHide={() => setShowDistanceMismatchError(false)}/>
            <div>
                <TitleCardSmall title={translation.words.holder}/>
            </div>
            <div className={"pb-3"}>
                <ProductTable error={errorHolder}
                              loading={loadingHolder}
                              productList={<>
                                  {
                                      filteredHolders.length > 0 ?
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
                                          :
                                          <tr>
                                              <td colSpan={11}>
                                                  <DisabledInput placeHolder={translation.words.noResults}/>
                                              </td>
                                          </tr>
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
                                              filteredRetainers.length > 0 ?
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
                                                  :
                                                  <td colSpan={11}>
                                                      <DisabledInput placeHolder={translation.words.noResults}/>
                                                  </td>
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