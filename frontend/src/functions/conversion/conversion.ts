import {IsStringNumber} from "../validation/inputValidation";

export const StringToNumber = (s: string): number => {
    if (IsStringNumber(s))
        return parseFloat(s);
    else
        throw new Error("Unable to convert string \"" + s + "\" to number");
}
