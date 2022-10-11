import {english} from "./english";
import {italian} from "./italian";
import {german} from "./german";

export interface Translation {
    language: Language,
    termsOfUse: {
        title: string,
        text1: string,
        text2: string
    },
    buttons: {
        text: {
            send: string;
            compute: string,
            reset: string,
            addCity: string,
            print: string,
            back: string
        },
        toolTips: {
            addButton: string,
            deleteButton: string
        }
    },
    inputs: {
        labels: {
            roofData: {
                steepness: string,
                roofLenght: string,
                roofWidth: string,
                safetyCoefficient: string
            },
            addCity: {
                zip:  string,
                name: string,
                province: string,
                altitude: string
            }
        },
        placeholders: {
            roofData: {
                searchCity: string
            }
        }
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