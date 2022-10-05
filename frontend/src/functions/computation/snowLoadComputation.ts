import {City, Province} from "../types";

export const getGroundLoad = (city: City, province: Province): number => {
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