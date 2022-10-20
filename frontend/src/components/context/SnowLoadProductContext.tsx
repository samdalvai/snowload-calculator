import {createContext, useState} from "react";
import {RetainerHeight, RetainerType, RoofType} from "../../functions/types";

export const SnowLoadProductContext = createContext<ISnowLoadProductContext>({
    roofType: "concreteTile",
    retainerType: "Grid",
    retainerHeight: "200",
    rows: 1
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
}