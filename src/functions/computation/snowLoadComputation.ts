import {City, Province, RoofData} from "../types";

export const getGroundLoad = (city: City, province: Province): number => {
    /*
    qsk kN/m^2 for altitude <= 200 mm
    ZONE I-A: 1.5
    ZONE I-M: 1.5
    ZONE II: 1
    ZONE III: 0.6

    qsk kN/m^2 for altitude > 200 m
    ZONE I-A: 1.39 * [1 + (as/728)^2]
    ZONE I-M: 1.35 * [1 + (as/602)^2]
    ZONE II: 0.85 * [1 + (as/481)^2]
    ZONE III: 0.51 * [1 + (as/481)^2]
     */
    if (city.altitude <= 200)
        return province.load

    switch (province.zone) {
        case "I-A":
            return 1.39 * (1 + Math.pow(city.altitude / 728.0, 2))
        case "I-M":
            return 1.35 * (1 + Math.pow(city.altitude / 602.0, 2))
        case "II":
            return 0.85 * (1 + Math.pow(city.altitude / 481.0, 2))
        case "III": // TODO: IS 481 RIGHT??
            return 0.51 * (1 + Math.pow(city.altitude / 481.0, 2))
        default:
            throw new Error("Invalid province zone: " + province.zone)
    }
}

export const getRoofLoad = (groundLoad: number): number => {
    // TODO: NEED TO CHECK ITALIAN NORM ON SNOW CALCULATION FOR SHAPE COEFFICIENT
    // qs = qsk * μi * Ce * Ct
    const shapeCoefficient = 0.8
    const expositionCoefficient = 1
    const termicalCoefficient = 1

    return groundLoad * shapeCoefficient * expositionCoefficient * termicalCoefficient;
}

export const getLinearLoad = (roofLoad: number, roofData: RoofData): number => {
    // Fs = qs (roofLoad) * b (horizontal length) * sin α (radians)
    const alpha = (Math.PI / 180.0) * roofData.steepness
    const sinAlpha = Math.sin(alpha)
    const b = roofData.roofLength * Math.cos(alpha)
    const linearLoad = roofLoad * b * sinAlpha

    return roofData.coefficient ? linearLoad * 1.5 : linearLoad;
}