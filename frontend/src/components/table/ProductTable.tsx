import {ProductCard} from "./ProductCard";

export const ProductTable = () => {

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Distance</th>
            </tr>
            </thead>
            <tbody>
                <ProductCard />
            </tbody>
        </table>
    )
}