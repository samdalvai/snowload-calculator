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
    city: City | null,
    steepness: number,
    roofLength: number,
    roofWidth: number,
    coefficient: boolean
}

export const defaultRoofData = (): RoofData => {
    return {
        city: null,
        steepness: 0,
        roofLength: 0,
        roofWidth: 0,
        coefficient: false
    }
}