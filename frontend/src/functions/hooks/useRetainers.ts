import {Retainer} from "../classes";
import {useApiGet} from "./useApi";

export type RetainerResponse = {
    retainerData: Retainer[],
    loadingRetainer: Boolean,
    errorRetainer: any
}

export const useRetainers = (): RetainerResponse => {
    const {data, loading, error} = useApiGet('/retainers');

    return {retainerData: data, loadingRetainer: loading, errorRetainer: error};
}