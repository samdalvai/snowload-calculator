import {Province} from "../types";
import {useApiGet} from "./useApi";

export type ProvincesResponse = {
    cities: Province[],
    loading: Boolean,
    error: any
}

export const useProvinces = (): ProvincesResponse => {
    const {data, loading, error} = useApiGet('/provinces');

    return {cities: data, loading, error};
}