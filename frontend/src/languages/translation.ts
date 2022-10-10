import {english} from "./english";
import {italian} from "./italian";
import {german} from "./german";

export interface Translation {
    termsOfUse: {
        title: string,
        text1: string,
        text2: string
    }

    // Add new text for the application here,
    // a translation will be required for
    // english.ts, italian.ts and german.ts
}

export type Language = "en" | "it" | "de"

export const getTranslation = (language: Language): Translation => {
    switch (language) {
        case "en":
            return english;
        case "it":
            return italian;
        case "de":
            return german;
    }
}