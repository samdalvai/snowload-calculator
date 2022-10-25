import {DistanceBox} from "./DistanceBox";
import React, {useContext, useState} from "react";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";
import {isResistanceHigher} from "../../functions/computation/resistanceComputation";
import {Callback, NumberCallBack, SnowStopProductCallback} from "../../functions/callbacks";
import {SnowStopProduct} from "../../functions/types";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const ProductCard = ({product, linearLoad, selected, onSelect, onSelectDistance, onResistanceError}:
                                { product: SnowStopProduct, linearLoad: number, selected: boolean, onSelect: SnowStopProductCallback, onSelectDistance: NumberCallBack, onResistanceError: Callback }) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const {rows} = useContext(SnowLoadProductContext)

    const handleOnChecked = (idx: number) => {
        if (!isResistanceHigher(product, rows, distanceSelectorData[idx].value, linearLoad)) {
            onResistanceError()
        } else {
            setChecked(checked.map((c, index) => index === idx ? true : false))
            setDistanceValue(distanceSelectorData[idx].value)
            onSelectDistance(distanceSelectorData[idx].value)
            onSelect(product)
        }
    }

    const handleOnSelected = (value: number) => {
        if (!isResistanceHigher(product, rows, value, linearLoad)) {
            onResistanceError()
        } else {
            setDistanceValue(value)
            setChecked(checked.map((c, index) => index === (value / 100 - 4) ? true : false))
            onSelectDistance(value)
            onSelect(product)
        }
    }

    React.useEffect(() => {
        if (!selected)
            setChecked([false, false, false, false, false, false, false])
    }, [selected])

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
                onClick={ () => {
                    // if (distanceValue === 400){ // TODO: CAUSES PROBLEM WHEN SELECTING DISTANCE
                    //     onSelectDistance(400)
                    //     onSelect(product)
                    // }
                }}
            >
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
                                        } checked={checked[index]}
                                                     onChecked={() => handleOnChecked(index)}
                                        />
                                    ))
                                }
                            </>
                        </>
                        :
                        <>
                            <ProductDescriptionSmall product={product}/>
                            <DistanceSelector onSelect={handleOnSelected}
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