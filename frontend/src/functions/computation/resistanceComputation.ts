import {Holder} from "../types";

export const isHolderResistanceHigher = (holder: Holder, rows: number, distance: number, linearLoad: number) => {
    return getSystemResistance(holder,rows,distance) >= linearLoad;
}

export const getSystemResistance = (holder: Holder, rows: number, distance: number): number => {
    // distance is thought as mm, e.g. 400, 500, 600 ...
    return holder.resistance * rows * 1000.0 / distance
}