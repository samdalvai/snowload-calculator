import {createContext, useState} from "react";
import {RetainerHeight, RetainerType, RoofType} from "../../functions/types";

export const SnowLoadProductContext = createContext<ISnowLoadProductContext>({
    roofTypeValue: "concreteTile",
    //retainingSystemValue: "Grid",
    //retainerHeightValue: "200",
    //rowsValue: 1
});

export interface ISnowLoadProductContext {
    roofTypeValue: RoofType,
    setRoofTypeValue?: (arg: RoofType) => void

    retainingSystemValue?: RetainerType,
    setRetainingSystemValue?: (arg: RetainerType) => void

    retainerHeightValue? : RetainerHeight,
    setRetainerHeightValue? : (arg: RetainerHeight) => void

    rowsValue?: number
    setRowsValue?: (arg: number) => void
}