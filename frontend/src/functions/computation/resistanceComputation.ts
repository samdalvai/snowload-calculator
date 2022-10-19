import {Holder, Retainer, SnowStopProduct} from "../types";

export const isResistanceHigher = (product: SnowStopProduct, rows: number, distance: number, linearLoad: number) => {
    return getResistance(product,rows,distance) >= linearLoad
}

export const getResistance = (product: SnowStopProduct, rows: number, distance: number) => {
    switch (product.type) {
        case "Holder":
            return getHolderResistance(product,rows,distance)
        case "Retainer":
            return getRetainerResistance(product,rows,distance)
        default:
            throw new Error("Unsupported snowstop product type");
    }
}

export const getHolderResistance = (product: Holder, rows: number, distance: number): number => {
    console.log(typeof distance)
    // distance is thought as mm, e.g. 400, 500, 600 ...
    return product.resistance * rows * 1000.0 / distance
}

export const getRetainerResistance = (product: Retainer, rows: number, distance: number): number => {
    // distance is thought as mm, e.g. 400, 500, 600 ...
    console.log(typeof distance)
    console.log(distance === 400)

    switch (distance) {
        case 400:
            return product.resistance.dist400 * rows * 1000.0 / distance
        case 500:
            return product.resistance.dist500 * rows * 1000.0 / distance
        case 600:
            return product.resistance.dist600 * rows * 1000.0 / distance
        case 700:
            return product.resistance.dist700 * rows * 1000.0 / distance
        case 800:
            return product.resistance.dist800 * rows * 1000.0 / distance
        case 900:
            return product.resistance.dist900 * rows * 1000.0 / distance
        case 1000:
            return product.resistance.dist1000 * rows * 1000.0 / distance
        default:
            throw new Error("Unable to determine retainer resistance, distance value " + distance + " of type " + typeof distance + " not supported");
    }

}