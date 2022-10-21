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

export interface Holder {
    code: string,
    resistance: number,
    roofType: RoofType
    productInfo: Product
    type : "Holder"
}


export interface Retainer {
    code: string,
    resistance: RetainerResistance
    profile: string,
    productInfo: Product
    type : "Retainer"
}

export type SnowStopProduct = Holder | Retainer;

export type SnowStopProductType = "Holder" | "Retainer";

export interface Product {
    productCode: string,
    name: string,
    retainerType: RetainerType,
    retainerHeight: RetainerHeight,
    material: RetainerMaterial
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

export type RetainerMaterial = 'Zink Steel' | 'Stainless Steel' | 'Painted Steel' | 'Aluminium' | 'Copper'

export type RoofType = 'concreteTile' | 'flatTile' | 'metalRoof' | 'standingSeam' | 'ondulatedPlate'

export type RetainerType = 'Grid' | 'Tube' | 'Log'

export type RetainerHeight = '28' | '32' | '35' | '120' | '140' | '200' | '250'