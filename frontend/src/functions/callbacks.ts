import {City, Product, RoofData} from "./types";
import {Language} from "../languages/translation";
import {Holder, Retainer, SnowStopProduct} from "./types";

export type StringCallBack = (arg: string) => void

export type CityCallBack = (arg: City | null) => void

export type NumberCallBack = (arg: number) => void

export type Callback = () => void

export type BooleanCallback = (arg: boolean) => void

export type RoofDataCallback = (arg: RoofData) => void

export type LanguageCallback = (arg: Language) => void

export type AnyCallback = (arg: any) => void

export type ProductCallback = (arg: Product) => void

export type HolderCallback = (arg: Holder) => void

export type RetainerCallback = (arg: Retainer) => void

export type SnowStopProductCallback = (arg: SnowStopProduct) => void

export type GenericCallback<T> = (arg: T) => void