import {Holder} from "../types";
import {useApiGet} from "./useApi";

export type HoldersResponse = {
    holderData: Holder[],
    loadingHolder: boolean,
    errorHolder: any
}

export const useHolders = (): HoldersResponse => {
    const {data, loading, error} = useApiGet('/holders');

    return {holderData: data, loadingHolder: loading, errorHolder: error};
}