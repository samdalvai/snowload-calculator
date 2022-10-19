import {DistanceBox} from "./DistanceBox";
import React, {useContext, useState} from "react";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";
import {isResistanceHigher} from "../../functions/computation/resistanceComputation";
import {Callback, SnowStopProductCallback} from "../../functions/callbacks";
import {ErrorModal} from "../modal/ErrorModal";
import {LanguageContext} from "../language/LanguageContext";
import {SnowStopProduct} from "../../functions/types";

export const ProductCard = ({product, rows, linearLoad, selected, onSelect, onResistanceError}:
                                { product: SnowStopProduct, rows: number, linearLoad: number, selected: boolean, onSelect: SnowStopProductCallback, onResistanceError: Callback }) => {
    const {translation} = useContext(LanguageContext);

    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const handleOnChecked = (idx: number) => {
        console.log("Checking")
        if (!isResistanceHigher(product, rows, distanceSelectorData[idx].value, linearLoad)) {
            onResistanceError()
        } else {
            setChecked(checked.map((c, index) => index === idx ? true : false))
            setDistanceValue(distanceSelectorData[idx].value)
        }
    }

    const handleOnSelected = (value: number) => {
        console.log("Selecting: ", value)
        if (!isResistanceHigher(product, rows, value, linearLoad)) {
            onResistanceError()
        } else {
            setDistanceValue(value)
            setChecked(checked.map((c, index) => index === (value / 100 - 4) ? true : false))
        }
    }

    React.useEffect(() => {
        if (!selected)
            setChecked([false, false, false, false, false, false, false])
    }, [selected])

    React.useEffect(() => {
        if (!isResistanceHigher(product, rows, distanceValue, linearLoad))
            setChecked([false, false, false, false, false, false, false])
    }, [rows])

    const distanceSelectorData: SelectorOptionData<number>[] = [
        {value: 400, text: "400"},
        {value: 500, text: "500"},
        {value: 600, text: "600"},
        {value: 700, text: "700"},
        {value: 800, text: "800"},
        {value: 900, text: "900"},
        {value: 1000, text: "1000"}
    ]


    const size = useWindowSize()

    return (
        <>
            <tr className={"product-card"}
                style={{
                    backgroundColor: selected ? "lightblue" : "white"
                }}
                onClick={() => onSelect(product)
                }>
                {
                    size.width !== undefined && size.width >= 800 ?
                        <>
                            <ProductDescription product={product}/>
                            <>
                                {
                                    distanceSelectorData.map((data, index) => (
                                        <DistanceBox key={index} color={
                                            isResistanceHigher(product, rows, data.value, linearLoad) ?
                                                "green"
                                                :
                                                "red"
                                        } checked={checked[index]} onChecked={() => handleOnChecked(index)}
                                                     distance={data.value}/>
                                    ))
                                }
                            </>
                        </>
                        :
                        <>
                            <ProductDescriptionSmall product={product}/>
                            <DistanceSelector onSelect={e => handleOnSelected(e.target.value)}
                                              optionData={distanceSelectorData}
                                              value={distanceValue}
                                              linearLoad={linearLoad}
                                              distanceValue={distanceValue}
                                              product={product}
                                              rows={rows}/>
                        </>
                }
            </tr>
        </>
    )
}