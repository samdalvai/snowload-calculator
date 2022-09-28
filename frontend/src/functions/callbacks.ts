import {City, RoofData} from "./types";

export type StringCallBack = (arg: string) => void

export type CityCallBack = (arg: City | null) => void

export type NumberCallBack = (arg: number) => void

export type Callback = () => void

export type BooleanCallback = (arg: boolean) => void

export type RoofDataCallback = (arg: RoofData) => void