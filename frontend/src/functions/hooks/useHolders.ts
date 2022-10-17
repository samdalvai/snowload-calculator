import {Holder} from "../types";
import {useApiGet} from "./useApi";

export type HoldersResponse = {
    holderData: Holder[],
    loading: Boolean,
    error: any
}

export const useHolders = (): HoldersResponse => {
    const {data, loading, error} = useApiGet('/holders');

    return {holderData: data, loading, error};
}