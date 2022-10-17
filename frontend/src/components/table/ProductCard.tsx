import {ProductImage} from "./ProductImage";
import {DistanceBox} from "./DistanceBox";
import {useState} from "react";
import {Product, SnowStopProduct} from "../../functions/types";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";

export const ProductCard = ({product, linearLoad}: { product: SnowStopProduct, linearLoad: number }) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const handleSetChecked = (idx: number) => {
        setChecked(checked.map((c, index) => index === idx ? true : false))
    }

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
            <tr>
                {
                    size.width !== undefined && size.width >= 800 ?
                        <>
                            <ProductDescription  product={product}/>
                            <>
                                {
                                    distanceSelectorData.map((data, index) => (
                                        <DistanceBox key={index} color={"red"} checked={checked[index]} onChecked={() => handleSetChecked(index)} distance={data.value}/>
                                    ))
                                }
                            </>
                        </>
                        :
                        <>
                            <ProductDescriptionSmall product={product} />
                            <DistanceSelector  onSelect={e => setDistanceValue(e.target.value)}
                                               optionData={distanceSelectorData}
                                               value={distanceValue}
                                               color={"red"}/>
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