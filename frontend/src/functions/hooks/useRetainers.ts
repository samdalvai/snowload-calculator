import {Retainer} from "../types";
import {useApiGet} from "./useApi";

export type RetainerResponse = {
    retainers: Retainer[],
    loading: Boolean,
    error: any
}

export const useRetainers = (): RetainerResponse => {
    const {data, loading, error} = useApiGet('/retainers');

    return {retainers: [data], loading, error};
}