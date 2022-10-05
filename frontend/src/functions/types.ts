export interface City {
    zip: string,
    name: string,
    province: string,
    altitude: number
}

export interface Province {
    shorthand: string,
    name: string,
    zone: string,
    load: number
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

export const defaultCity = (): City => {
    return {
        altitude: 0,
        name: "",
        province: "",
        zip: ""
    }
}