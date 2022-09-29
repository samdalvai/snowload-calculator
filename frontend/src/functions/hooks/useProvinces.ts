import {Province} from "../types";
import {useApiGet} from "./useApi";

export type ProvincesResponse = {
    provinces: Province[],
    loading: Boolean,
    error: any
}

export const useProvinces = (): ProvincesResponse => {
    const {data, loading, error} = useApiGet('/provinces');

    return {provinces: data, loading, error};
}

export const useProvincesGenericEndpoint = (url: string): ProvincesResponse => {
    const {data, loading, error} = useApiGet('/provinces/' + url);

    return {provinces: data, loading, error};
}