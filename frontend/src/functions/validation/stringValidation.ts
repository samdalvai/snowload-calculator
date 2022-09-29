import {StringToFloatNumber} from "../conversion/stringConversion";

export const IsStringNumber = (s: string): boolean => {
    if (s === "")
        return false;

    const numbers = "0123456789.-"

    const separatorCount = s.split("").filter(char => char === ".").length
    const minusCount = s.split("").filter(char => char === "-").length

    if (separatorCount > 1 || minusCount > 1)
        return false;

    return s.split("").every(char => numbers.includes(char))
}

export const IsInputBetweenLowerAndUpperBound = (input: string, min: number, max: number): boolean => {
    return IsStringNumber(input) && StringToFloatNumber(input) >= min && StringToFloatNumber(input) <= max;
}

export const IsValidSteepness = (input: string): boolean => {
    return IsInputBetweenLowerAndUpperBound(input, 0.0, 90.0);
}