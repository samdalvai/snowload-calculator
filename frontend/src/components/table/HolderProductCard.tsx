import {DistanceBox} from "./DistanceBox";
import React, {useState} from "react";
import {Holder} from "../../functions/types";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";
import {getSystemResistance, isHolderResistanceHigher} from "../../functions/computation/resistanceComputation";
import {HolderCallback} from "../../functions/callbacks";

export const HolderProductCard = ({holder, rows, linearLoad, selected, onSelectHolder}:
                                      { holder: Holder, rows: number, linearLoad: number, selected: boolean, onSelectHolder: HolderCallback }) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const handleSetChecked = (idx: number) => {
        setChecked(checked.map((c, index) => index === idx ? true : false))
        setDistanceValue((idx + 4) * 100)
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
        <tr className={"product-card"}
            style={{
            backgroundColor: selected ? "lightblue" : "white"}}
            onClick={() => onSelectHolder(holder)
        }>
            {
                size.width !== undefined && size.width >= 800 ?
                    <>
                        <ProductDescription product={holder}/>
                        <>
                            {
                                distanceSelectorData.map((data, index) => (
                                    <DistanceBox key={index} color={
                                        isHolderResistanceHigher(holder, rows, data.value, linearLoad) ?
                                            "green"
                                            :
                                            "red"
                                    } checked={checked[index]} onChecked={() => handleSetChecked(index)}
                                                 distance={data.value}/>
                                ))
                            }
                        </>
                    </>
                    :
                    <>
                        <ProductDescriptionSmall product={holder}/>
                        <DistanceSelector onSelect={e => setDistanceValue(e.target.value)}
                                          optionData={distanceSelectorData}
                                          value={distanceValue}
                                          linearLoad={linearLoad}
                                          distanceValue={distanceValue}
                                          holder={holder}
                                          rows={rows}/>
                    </>
            }

        </tr>
    )
}

/*
alternative to boxes
    <th className={""}
        style={{verticalAlign: "middle"}}>
        <DistanceSelector  onSelect={e => setDistanceValue(e.target.value)}
                   optionData={distanceSelectorData}
                   value={distanceValue}/>
    </th>
 */