import {ProductImage} from "./ProductImage";
import {DistanceBox} from "./DistanceBox";
import {useState} from "react";

export const ProductCard = () => {
    const [checked, setChecked] = useState<boolean[]>([false,false,false,false,false,false,false])

    const handleSetChecked = (idx: number) => {
        setChecked(checked.map((c,index) => index === idx ? true : false))
    }

    return (
        <tr>
            <th className={"border-right-lightgray"}>
                <ProductImage url={"https://www.flender-flux.de/fileadmin/products/030303/2.jpg"}/>
            </th>
            <th className={"border-right-lightgray text-center"}>
                <div>
                    <text>030303</text>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}>
                <div>
                    <text>Nr. 76 B</text>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}>
                <div>
                    <text>200</text>
                </div>
            </th>
            <>
                <DistanceBox  color={"red"} checked={checked[0]} onChecked={() => handleSetChecked(0)}/>
                <DistanceBox  color={"red"} checked={checked[1]} onChecked={() => handleSetChecked(1)}/>
                <DistanceBox  color={"red"} checked={checked[2]} onChecked={() => handleSetChecked(2)}/>
                <DistanceBox  color={"red"} checked={checked[3]} onChecked={() => handleSetChecked(3)}/>
                <DistanceBox  color={"green"} checked={checked[4]} onChecked={() => handleSetChecked(4)}/>
                <DistanceBox  color={"green"} checked={checked[5]} onChecked={() => handleSetChecked(5)}/>
                <DistanceBox  color={"green"} checked={checked[6]} onChecked={() => handleSetChecked(6)}/>
            </>
        </tr>
    )
}