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

// Only two types supported at the beginning
export type RoofType = "concreteTile" | "flatTile"