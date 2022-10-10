import {english} from "./english";
import {italian} from "./italian";
import {german} from "./german";

export interface Translation {
    termsOfUse: {
        title: string,
        text1: string,
        text2: string
    }
}

export type Languages = "en" | "it" | "de"

export const getTranslation = (language: Languages): Translation => {
    switch (language) {
        case "en":
            return english;
        case "it":
            return italian;
        case "de":
            return german;
    }
}