import {ProductImage} from "./ProductImage";
import {DistanceBox} from "./DistanceBox";
import {useState} from "react";
import {Product} from "../../functions/types";

export const ProductCard = ({product}: { product: Product }) => {
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false])

    const handleSetChecked = (idx: number) => {
        setChecked(checked.map((c, index) => index === idx ? true : false))
    }

    return (
        <>
            <tr>
                <th className={"border-right-lightgray text-center"}
                    style={{verticalAlign: "middle"}}>
                    <ProductImage url={product.image}/>
                </th>
                <th className={"border-right-lightgray text-center"}
                    style={{verticalAlign: "middle"}}>
                    <div>
                        <p>{product.productCode}</p>
                    </div>
                </th>
                <th className={"border-right-lightgray text-center"}
                    style={{verticalAlign: "middle"}}>
                    <div>
                        <p>{product.name}</p>
                    </div>
                </th>
                <th className={"border-right-lightgray text-center"}
                    style={{verticalAlign: "middle"}}>
                    <div>
                        <p>{product.retainerHeight}</p>
                    </div>
                </th>
                <>
                    <DistanceBox color={"red"} checked={checked[0]} onChecked={() => handleSetChecked(0)}/>
                    <DistanceBox color={"red"} checked={checked[1]} onChecked={() => handleSetChecked(1)}/>
                    <DistanceBox color={"red"} checked={checked[2]} onChecked={() => handleSetChecked(2)}/>
                    <DistanceBox color={"red"} checked={checked[3]} onChecked={() => handleSetChecked(3)}/>
                    <DistanceBox color={"green"} checked={checked[4]} onChecked={() => handleSetChecked(4)}/>
                    <DistanceBox color={"green"} checked={checked[5]} onChecked={() => handleSetChecked(5)}/>
                    <DistanceBox color={"green"} checked={checked[6]} onChecked={() => handleSetChecked(6)}/>
                </>
            </tr>
        </>
    )
}