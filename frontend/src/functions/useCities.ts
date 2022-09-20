import {City} from "./types";
import {useApiGet} from "./useApi";

export type CitiesResponse = {
    cities: City[],
    loading: Boolean
}

export const useCities = (): CitiesResponse => {
    const {data, loading} = useApiGet('/cities');

    return {cities: data, loading};
}