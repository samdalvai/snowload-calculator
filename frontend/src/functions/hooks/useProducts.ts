import {Product} from "../types";
import {useApiGet} from "./useApi";

export type ProductsResponse = {
    products: Product[],
    loading: Boolean,
    error: any
}

export const useProducts = (): ProductsResponse => {
    const {data, loading, error} = useApiGet('/products');

    return {products: [data], loading, error};
}