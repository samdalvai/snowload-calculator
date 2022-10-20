import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {SnowStopProductType} from "../../functions/types";

export const ProductTableHeader = ({productType}: {productType: SnowStopProductType}) => {
    const {translation} = useContext(LanguageContext);
    const headers = translation.tables.productChoice.headers

    return (
        <thead>
            <tr className={"table-secondary table-header"}>
                {
                    [headers.image, headers.code, headers.name, (productType === "Holder" ? headers.height : headers.profile), headers.distance].map((header, index) => (
                            index < 4 ?
                                <th scope="col" rowSpan={2} className={"border-right-lightgray"}
                                    key={index}>{header}</th>
                                :
                                <th scope="col" colSpan={7} className={"text-center"} key={index}>{header}</th>
                        )
                    )
                }
            </tr>
            <tr className={"table-secondary shadow-sm table-header"}>
                {
                    ["400", "500", "600", "700", "800", "900", "1000"].map((dist, index) => (
                        index < 6 ?
                            <th scope="col" className={"border-right-lightgray"} key={index + 10}>{dist}</th>
                            :
                            <th scope="col" key={index + 10}>{dist}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export const ProductTableHeaderSmall = () => {
    const {translation} = useContext(LanguageContext);
    const headers = translation.tables.productChoice.headers

    return (
        <thead>
            <tr className={"table-secondary table-header"}>
                {
                    [headers.image, headers.description, headers.distance].map((header, index) => (
                            index < 2 ?
                                <th scope="col" className={"border-right-lightgray"}
                                    key={index}>{header}</th>
                                :
                                <th scope="col" className={"text-center"} key={index}>{header}</th>
                        )
                    )
                }
            </tr>
        </thead>
    )
}