import {isInputBetweenLowerAndUpperBound} from "./stringValidation";

export const isValidZip = (zip: string): boolean => {
    const numbers = "0123456789"

    return zip.split("").every(char => numbers.includes(char)) && zip.length === 5
}

export const isValidProvince = (province: string): boolean => {
    const numbers = "abcdefghijklmnopqrstuvwxyz"

    return province.split("").every(char => numbers.includes(char.toLowerCase())) && province.length == 2
}

export const isValidAltitude = (input: string): boolean => {
    return isInputBetweenLowerAndUpperBound(input, 0.0, 3000.0);
}