import {Product, RetainerResistance, RoofType} from "./types";

export class SnowStopProduct {
    code: string
    productInfo: Product


    constructor(code: string, productInfo: Product) {
        this.code = code;
        this.productInfo = productInfo;
    }
}

export class Holder extends SnowStopProduct{
    resistance: number
    roofType: RoofType


    constructor(code: string, productInfo: Product, resistance: number, roofType: RoofType) {
        super(code, productInfo);
        this.resistance = resistance;
        this.roofType = roofType;
    }
}

export class Retainer extends SnowStopProduct{
    resistance: RetainerResistance
    profile: string

    constructor(code: string, productInfo: Product, resistance: RetainerResistance, profile: string) {
        super(code, productInfo);
        this.resistance = resistance;
        this.profile = profile;
    }
}