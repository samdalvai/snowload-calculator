import {City, Province, RoofData, SnowLoadData} from "./types";

export const defaultCity = (): City => {
    return {
        altitude: -1,
        name: "default",
        province: "default",
        zip: "default"
    }
}

export const defaultProvince = (): Province => {
    return {
        load: 0,
        name: "",
        shorthand: "",
        zone: "I-A"
    }
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

export const defaultSnowLoadData = (): SnowLoadData => {
    return {
        altitude: 0,
        groundLoad: 0,
        linearLoad: 0,
        roofLoad: 0,
        zone: "I-A"
    }
}