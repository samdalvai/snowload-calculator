import {City, RoofData} from "./types";
import {Language} from "../languages/translation";

export type StringCallBack = (arg: string) => void

export type CityCallBack = (arg: City | null) => void

export type NumberCallBack = (arg: number) => void

export type Callback = () => void

export type BooleanCallback = (arg: boolean) => void

export type RoofDataCallback = (arg: RoofData) => void

export type LanguageCallback = (arg: Language) => void

export type AnyCallback = (arg: any) => void