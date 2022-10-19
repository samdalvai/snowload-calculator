import {SnowStopProduct} from "../../functions/classes";
import {ProductImage} from "./ProductImage";
import {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";

export const ProductDescription = ({product}: { product: SnowStopProduct }) => {
    return (
        <>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <ProductImage url={product.productInfo.image}/>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <div>
                    <p>{product.code}</p>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <div>
                    <p>{product.productInfo.name}</p>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <div>
                    <p>{product.productInfo.retainerHeight}</p>
                </div>
            </th>
        </>
    )
}

export const ProductDescriptionSmall = ({product}: { product: SnowStopProduct }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <>
            <th className={"border-right-lightgray text-center"}
                style={{
                    verticalAlign: "middle"
                }}>
                <ProductImage url={product.productInfo.image}/>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <p>{translation.tables.productChoice.headers.code}: {product.productInfo.productCode}</p>
                <p>{translation.tables.productChoice.headers.name}: {product.productInfo.name}</p>
                <p>{translation.tables.productChoice.headers.height}: {product.productInfo.retainerHeight}</p>
            </th>
        </>
    )
}