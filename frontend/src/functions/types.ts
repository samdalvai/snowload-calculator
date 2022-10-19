import {Holder} from "./classes";

export interface City {
    zip: string,
    name: string,
    province: string,
    altitude: number
}

export interface Province {
    shorthand: string,
    name: string,
    zone: ClimaticZone,
    load: number
}

export type ClimaticZone = "I-A" | "I-M" | "II" | "III"

export interface RoofData {
    city: City,
    steepness: number,
    roofLength: number,
    roofWidth: number,
    coefficient: boolean
}

export interface SnowLoadData {
    altitude: number,
    zone: ClimaticZone,
    groundLoad: number,
    roofLoad: number,
    linearLoad: number
}

/*export interface Holder {
    code: string,
    resistance: number,
    roofType: RoofType
    productInfo: Product
    type : "Holder"
}*/

/*
export interface Retainer {
    code: string,
    resistance: RetainerResistance
    profile: string,
    productInfo: Product
}
*/

export interface Product {
    productCode: string,
    name: string,
    retainerType: RetainerType,
    retainerHeight: RetainerHeight,
    image: string
}

export interface RetainerResistance {
    dist400: number,
    dist500: number,
    dist600: number,
    dist700: number,
    dist800: number,
    dist900: number,
    dist1000: number
}

export type RoofType = "concreteTile" | "flatTile"

export type RetainerType = "Grid" | "DoubleTube"

export type RetainerHeight = "200" | "250" | null