import {City} from "./types";
import {useApiGet} from "./useApi";

export type CitiesResponse = {
    cities: City[],
    loading: Boolean,
    error: any
}

export const useCities = (): CitiesResponse => {
    const {data, loading, error} = useApiGet('/cities');

    return {cities: data, loading, error};
}