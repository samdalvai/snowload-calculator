export interface City {
    zip: string,
    name: string,
    province: string,
    altitude: number
}

export const defaultCity = (): City => {
    return {
        altitude: -1,
        name: "default",
        province: "default",
        zip: "default"
    }
}

export interface Province {
    shorthand: string,
    name: string,
    zone: ClimaticZone,
    load: number
}

export type ClimaticZone = "I-A" | "I-M" | "II" | "III"

export const defaultProvince = (): Province => {
    return {
        load: 0,
        name: "",
        shorthand: "",
        zone: "I-A"
    }
}

export interface RoofData {
    city: City,
    steepness: number,
    roofLength: number,
    roofWidth: number,
    coefficient: boolean
}

export const defaultRoofData = (): RoofData => {
    return {
        city: defaultCity(),
        steepness: 0,
        roofLength: 0,
        roofWidth: 0,
        coefficient: false
    }
}

export interface SnowLoadData {
    altitude: number,
    zone: ClimaticZone,
    groundLoad: number,
    roofLoad: number,
    linearLoad: number
}

export const defaultSnowLoadData = (): SnowLoadData => {
    return {
        altitude: 0,
        groundLoad: 0,
        linearLoad: 0,
        roofLoad: 0,
        zone: "I-A"
    }
}