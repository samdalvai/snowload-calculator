import {ProductCard} from "./ProductCard";

export const ProductTable = () => {

    return (
        <table className="table">
            <thead>
            <tr className={"table-secondary shadow-sm table-header"}>
                {
                    ["Image", "Code", "Name", "Height", "Distance"].map((header, index) => (
                            index < 4 ?
                                <th scope="col" rowSpan={2} className={"border-right-light"} key={index}>{header}</th>
                                :
                                <th scope="col" colSpan={7} className={"text-center"} key={index}>{header}</th>
                        )
                    )
                }
            </tr>
            <tr className={"table-secondary shadow-sm table-header"}>
                {
                    ["400", "500", "600", "700", "800", "900"].map((dist, index) => (
                        index < 5 ?
                            <th scope="col" className={"border-right-light"} key={index + 10}>{dist}</th>
                            :
                            <th scope="col" key={index + 10}>{dist}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            <ProductCard/>
            </tbody>
        </table>
    )
}