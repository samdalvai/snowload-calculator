import {isStringNumber} from "../validation/stringValidation";

export const StringToFloatNumber = (s: string): number => {
    if (isStringNumber(s))
        return parseFloat(s);
    else
        throw new Error("Unable to convert string \"" + s + "\" to floating number");
}

export const StringToIntNumber = (s: string): number => {
    if (isStringNumber(s))
        return parseInt(s);
    else
        throw new Error("Unable to convert string \"" + s + "\" to integer number");
}
