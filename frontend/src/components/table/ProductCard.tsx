import {DistanceBox} from "./DistanceBox";
import React, {useContext, useState} from "react";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";
import {isResistanceHigher} from "../../functions/computation/resistanceComputation";
import {SnowStopProductCallback} from "../../functions/callbacks";
import {ErrorModal} from "../modal/ErrorModal";
import {LanguageContext} from "../language/LanguageContext";
import {Holder} from "../../functions/types";

export const ProductCard = ({holder, rows, linearLoad, selected, onSelectProduct}:
                                      { holder: Holder, rows: number, linearLoad: number, selected: boolean, onSelectProduct: SnowStopProductCallback }) => {
    const {translation} = useContext(LanguageContext);

    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const [showError, setShowError] = useState<boolean>(false)

    const handleOnChecked = (idx: number) => {
        if (!isResistanceHigher(holder, rows, distanceSelectorData[idx].value, linearLoad)) {
            setShowError(true)
        } else {
            setChecked(checked.map((c, index) => index === idx ? true : false))
            setDistanceValue(distanceSelectorData[idx].value)
        }
    }

    const handleOnSelected = (value: number) => {
        if (!isResistanceHigher(holder, rows, value, linearLoad)) {
            setShowError(true)
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
        if (!isResistanceHigher(holder, rows, distanceValue, linearLoad))
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
            {
                showError ?
                    <ErrorModal show={showError} header={translation.modals.resistanceError.title}
                                body={translation.modals.resistanceError.body}
                                onHide={() => setShowError(false)}/>
                    :
                    ""
            }
            <tr className={"product-card"}
                style={{
                    backgroundColor: selected ? "lightblue" : "white"
                }}
                onClick={() => onSelectProduct(holder)
                }>
                {
                    size.width !== undefined && size.width >= 800 ?
                        <>
                            <ProductDescription product={holder}/>
                            <>
                                {
                                    distanceSelectorData.map((data, index) => (
                                        <DistanceBox key={index} color={
                                            isResistanceHigher(holder, rows, data.value, linearLoad) ?
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
                            <ProductDescriptionSmall product={holder}/>
                            <DistanceSelector onSelect={e => handleOnSelected(e.target.value)}
                                              optionData={distanceSelectorData}
                                              value={distanceValue}
                                              linearLoad={linearLoad}
                                              distanceValue={distanceValue}
                                              holder={holder}
                                              rows={rows}/>
                        </>
                }

            </tr>
        </>
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