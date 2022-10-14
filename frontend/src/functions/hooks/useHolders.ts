import {Holder} from "../types";
import {useApiGet} from "./useApi";

export type HoldersResponse = {
    holders: Holder[],
    loading: Boolean,
    error: any
}

export const useHolders = (): HoldersResponse => {
    const {data, loading, error} = useApiGet('/holders');

    return {holders: data, loading, error};
}