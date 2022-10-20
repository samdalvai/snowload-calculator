import {createContext} from "react";
import {Holder, Retainer, RetainerHeight, RetainerType, RoofType} from "../../functions/types";

export const SnowLoadProductContext = createContext<ISnowLoadProductContext>({
    roofType: "concreteTile",
    retainerType: "Grid",
    retainerHeight: "200",
    rows: 1,
    holder: null,
    retainer: null,
    holderDistance: null,
    retainerDistance: null,
    setHolder(arg: Holder | null): void {
    }, setHolderDistance(arg: number | null): void {
    }, setRetainer(arg: Retainer | null): void {
    }, setRetainerDistance(arg: number | null): void {
    }, setRetainerHeight(arg: RetainerHeight): void {
    }, setRetainerType(arg: RetainerType): void {
    }, setRoofType(arg: RoofType): void {
    }, setRows(arg: number): void {
    }
});

export interface ISnowLoadProductContext {
    roofType: RoofType,
    setRoofType: (arg: RoofType) => void

    retainerType: RetainerType,
    setRetainerType: (arg: RetainerType) => void

    retainerHeight: RetainerHeight,
    setRetainerHeight: (arg: RetainerHeight) => void

    rows: number
    setRows: (arg: number) => void

    holder: Holder | null,
    setHolder: (arg: Holder | null) => void

    retainer: Retainer | null,
    setRetainer: (arg: Retainer | null) => void

    holderDistance: number | null
    setHolderDistance: (arg: number | null) => void

    retainerDistance: number | null
    setRetainerDistance: (arg: number | null) => void
}