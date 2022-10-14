import {ProductImage} from "./ProductImage";
import {DistanceBox} from "./DistanceBox";

export const ProductCard = () => {
    return (
        <tr>
            <th style={{width: "125px"}}>
                <ProductImage url={"https://www.flender-flux.de/fileadmin/products/030303/2.jpg"}/>
            </th>
            <th style={{width: "125px"}}>
                <div>
                    <text>030303</text>
                </div>
            </th>
            <th style={{width: "125px"}}>
                <div>
                    <text>Nr. 76 B</text>
                </div>
            </th>
            <th style={{width: "125px"}}>
                <div>
                    <text>200</text>
                </div>
            </th>
            <>
                <DistanceBox  color={"red"} checked={false}/>
                <DistanceBox  color={"red"} checked={false}/>
                <DistanceBox  color={"red"} checked={false}/>
                <DistanceBox  color={"red"} checked={false}/>
                <DistanceBox  color={"green"} checked={false}/>
                <DistanceBox  color={"green"} checked={false}/>
            </>
        </tr>
    )
}