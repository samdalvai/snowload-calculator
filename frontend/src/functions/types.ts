import exp from "constants";

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

export type RoofType = "concreteTile" | "flatTile"

export type RetainingSystem = "Grid" | "DoubleTube"

export type RetainerHeight = "200" | "250" | null