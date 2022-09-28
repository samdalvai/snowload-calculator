import {IsStringNumber} from "../validation/stringValidation";

export const StringToNumber = (s: string): number => {
    if (IsStringNumber(s))
        return parseFloat(s);
    else
        throw new Error("Unable to convert string \"" + s + "\" to number");
}
