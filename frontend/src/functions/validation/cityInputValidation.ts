import {IsInputBetweenLowerAndUpperBound} from "./stringValidation";

export const IsValidZip = (zip: string): boolean => {
    const numbers = "0123456789"

    return zip.split("").every(char => numbers.includes(char)) && zip.length === 5
}

export const IsValidProvince = (province: string): boolean => {
    const numbers = "abcdefghijklmnopqrstuvwxyz"

    return province.split("").every(char => numbers.includes(char.toLowerCase())) && province.length == 2
}

export const IsValidAltitude = (input: string): boolean => {
    return IsInputBetweenLowerAndUpperBound(input, 0.0, 3000.0);
}