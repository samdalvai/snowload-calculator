import React, {useContext, useState} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {Holder, Retainer, SnowStopProduct} from "../../functions/types";
import {ProductTable} from "./ProductTable";
import {ProductCard} from "./ProductCard";
import {TitleCardSmall} from "../card/TitleCard";
import {ErrorModal} from "../modal/ErrorModal";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {DisabledInput} from "../input/DisabledInput";
import {getRetainers} from "../../data/retainers";
import {getHolders} from "../../data/holders";

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

    const [holders] = useState<Holder[]>(getHolders)
    const [filteredHolders, setFilteredHolders] = useState<Holder[]>([])

    const [retainers] = useState<Retainer[]>(getRetainers)
    const [filteredRetainers, setFilteredRetainers] = useState<Retainer[]>([])

    const [showResistanceError, setShowResistanceError] = useState<boolean>(false)
    const [showDistanceMismatchError, setShowDistanceMismatchError] = useState<boolean>(false)

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
                <ProductTable
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
                        <ProductTable
                            productList={<>
                                {
                                    filteredRetainers.length > 0 ?
                                        filteredRetainers.map((prod, index) => <ProductCard
                                            key={index * 100}
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