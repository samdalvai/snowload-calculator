import {english} from "./english";
import {italian} from "./italian";
import {german} from "./german";

export interface Translation {
    language: Language,
    words: {
        yes: string,
        no: string
    },
    header: {
        title: string
    },
    footer: {
        title: string,
        resources: {
            title: string,
        },
        about: {
            title: string
        }
    },
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
    },
    selection: {
        languageSelector: {
            english: string,
            italian: string,
            german: string
        }
    },
    modals: {
        addCity: {
            title: string
        }
    },
    tables: {
        roofData: {
            title: string,
            body: {
                city: string,
                steepness: {
                    label: string
                },
                roofLength: {
                    label: string
                },
                roofWidth: {
                    label: string
                },
                safetyCoefficient: {
                    label: string
                }
            }
        },
        snowLoadCalculation: {
            title: string,
            body: {
                altitude: {
                    label: string,
                    units: string
                },
                zone: {
                    label: string
                },
                groundLoad: {
                    label: string
                },
                roofLoad: {
                    label: string
                },
                linearLoad: {
                    label: string
                }
            }
        }
    },
    loading: {
        cities: string,
        computation: string
    },
    error: {
        cities: string
    },
    alerts: {
        inputError: string,
        computationError: string,
        addCity: {
            error: string,
            success: string
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