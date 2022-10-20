import {createContext, useState} from "react";
import {Holder, Retainer, RetainerHeight, RetainerType, RoofType} from "../../functions/types";
import {HolderCallback} from "../../functions/callbacks";

export const SnowLoadProductContext = createContext<ISnowLoadProductContext>({
    roofType: "concreteTile",
    retainerType: "Grid",
    retainerHeight: "200",
    rows: 1,
    holder: null,
    retainer: null
});

export interface ISnowLoadProductContext {
    roofType: RoofType,
    setRoofType?: (arg: RoofType) => void

    retainerType: RetainerType,
    setRetainerType?: (arg: RetainerType) => void

    retainerHeight : RetainerHeight,
    setRetainerHeight? : (arg: RetainerHeight) => void

    rows: number
    setRows?: (arg: number) => void

    holder: Holder | null,
    setHolder?:  (arg: Holder | null) => void

    retainer: Retainer | null,
    setRetainer?:  (arg: Retainer | null) => void

    /*
    const [holderDistance, setHolderDistance] = useState<number | null>(null)
    const [retainerDistance, setRetainerDistance] = useState<number | null>(null)
    */
}