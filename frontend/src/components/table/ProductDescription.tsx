import {SnowStopProduct} from "../../functions/types";
import {ProductImage} from "./ProductImage";
import {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";

export const ProductDescription = ({product}: { product: SnowStopProduct }) => {
    return (
        <>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle", width: "15%"}}>
                <ProductImage url={product.productInfo.image}/>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle", width: "15%"}}>
                <div>
                    <p>{product.code}</p>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle", width: "15%"}}>
                <div>
                    <p>{product.productInfo.name}</p>
                </div>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle", width: "15%"}}>
                <div>
                    {
                        product.type === "Holder" ?
                            <p>{product.productInfo.retainerHeight}</p>
                            :
                            <p>{product.profile}</p>
                    }
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
                    verticalAlign: "middle", width: "33%"
                }}>
                <ProductImage url={product.productInfo.image}/>
            </th>
            <th className={"border-right-lightgray text-center"}
                style={{verticalAlign: "middle", width: "33%"}}>
                <p>{translation.tables.productChoice.headers.code}: {product.productInfo.productCode}</p>
                <p>{translation.tables.productChoice.headers.name}: {product.productInfo.name}</p>
                {
                    product.type === "Holder" ?
                        <p>{translation.tables.productChoice.headers.height}: {product.productInfo.retainerHeight}</p>
                        :
                        <p>{translation.tables.productChoice.headers.profile}: {product.profile}</p>
                }
            </th>
        </>
    )
}