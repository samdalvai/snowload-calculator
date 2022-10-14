import {ProductCard} from "./ProductCard";

export const ProductTable = () => {

    return (
        <table className="table shadow-sm rounded">
            <thead>
            <tr className={"table-secondary table-header"}>
                {
                    ["Image", "Code", "Name", "Height (mm)", "Distance (mm)"].map((header, index) => (
                            index < 4 ?
                                <th scope="col" rowSpan={2} className={"border-right-lightgray"} key={index}>{header}</th>
                                :
                                <th scope="col" colSpan={7} className={"text-center"} key={index}>{header}</th>
                        )
                    )
                }
            </tr>
            <tr className={"table-secondary shadow-sm table-header"}>
                {
                    ["400", "500", "600", "700", "800", "900","1000"].map((dist, index) => (
                        index < 6 ?
                            <th scope="col" className={"border-right-lightgray"} key={index + 10}>{dist}</th>
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