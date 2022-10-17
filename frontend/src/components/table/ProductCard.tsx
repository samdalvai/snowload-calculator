import {ProductImage} from "./ProductImage";
import {DistanceBox} from "./DistanceBox";
import {useState} from "react";
import {Product} from "../../functions/types";
import {SelectorOptionData} from "../input/Selector";
import {useWindowSize} from "../../functions/hooks/useWindowSize";
import {ProductDescription, ProductDescriptionSmall} from "./ProductDescription";
import {DistanceSelector} from "./DistanceSelector";

export const ProductCard = ({product}: { product: Product }) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])
    const [distanceValue, setDistanceValue] = useState<number>(400)

    const handleSetChecked = (idx: number) => {
        setChecked(checked.map((c, index) => index === idx ? true : false))
    }

    const distanceSelectorData: SelectorOptionData<number>[] = [
        {value: 100, text: "400"},
        {value: 200, text: "500"},
        {value: 300, text: "600"},
        {value: 400, text: "700"},
        {value: 500, text: "800"},
        {value: 600, text: "900"},
        {value: 700, text: "1000"}
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
                                <DistanceBox color={"red"} checked={checked[0]} onChecked={() => handleSetChecked(0)}/>
                                <DistanceBox color={"red"} checked={checked[1]} onChecked={() => handleSetChecked(1)}/>
                                <DistanceBox color={"red"} checked={checked[2]} onChecked={() => handleSetChecked(2)}/>
                                <DistanceBox color={"red"} checked={checked[3]} onChecked={() => handleSetChecked(3)}/>
                                <DistanceBox color={"green"} checked={checked[4]} onChecked={() => handleSetChecked(4)}/>
                                <DistanceBox color={"green"} checked={checked[5]} onChecked={() => handleSetChecked(5)}/>
                                <DistanceBox color={"green"} checked={checked[6]} onChecked={() => handleSetChecked(6)}/>
                            </>
                        </>
                        :
                        <>
                            <ProductDescriptionSmall product={product} />
                            <DistanceSelector  onSelect={e => setDistanceValue(e.target.value)}
                                               optionData={distanceSelectorData}
                                               value={distanceValue}/>
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