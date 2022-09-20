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

export type StringCallBack = (arg: string) => void

export type CityCallBack = (arg: City) => void