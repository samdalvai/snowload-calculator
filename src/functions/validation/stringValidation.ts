import {StringToFloatNumber} from "../conversion/stringConversion";

export const isStringNumber = (s: string): boolean => {
    if (s === "")
        return false;

    const numbers = "0123456789.-"

    const separatorCount = s.split("").filter(char => char === ".").length
    const minusCount = s.split("").filter(char => char === "-").length

    if (separatorCount > 1 || minusCount > 1)
        return false;

    return s.split("").every(char => numbers.includes(char))
}

export const isInputBetweenLowerAndUpperBound = (input: string, min: number, max: number): boolean => {
    return isStringNumber(input) && StringToFloatNumber(input) >= min && StringToFloatNumber(input) <= max;
}

export const isValidSteepness = (input: string): boolean => {
    return isInputBetweenLowerAndUpperBound(input, 0.0, 90.0);
}