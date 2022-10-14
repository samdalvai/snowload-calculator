import {ProductImage} from "./ProductImage";

export const ProductCard = () => {
    return (
        <tr>
            <th>
                <ProductImage url={"https://www.flender-flux.de/fileadmin/products/030303/2.jpg"}/>
            </th>
            <th>
                <div className={"col"}>
                    030303
                </div>
            </th>
            <th>
                <div className={"col"}>
                    Nr. 76 B
                </div>
            </th>
            <th>
                <div className={"col"}>
                    200
                </div>
            </th>
            <th>

            </th>
        </tr>
    )
}