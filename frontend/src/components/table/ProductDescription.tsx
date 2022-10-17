import {Product} from "../../functions/types";
import {ProductImage} from "./ProductImage";
import {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";

export const ProductDescription = ({product}: { product: Product }) => {
    return (
        <>
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
        </>
    )
}

export const ProductDescriptionSmall = ({product}: { product: Product }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <ProductImage url={product.image}/>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle"}}>
                <p>{translation.tables.productChoice.headers.code}: {product.productCode}</p>
                <p>{translation.tables.productChoice.headers.name}: {product.name}</p>
                <p>{translation.tables.productChoice.headers.height}: {product.retainerHeight}</p>
            </th>
        </>
    )
}