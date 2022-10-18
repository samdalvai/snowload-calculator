import {english} from "./english";
import {italian} from "./italian";
import {german} from "./german";

export interface Translation {
    language: Language,
    words: {
        yes: string,
        no: string,
        row: string,
        numbers: {
            one: string,
            two: string,
            three: string,
            four: string,
            five: string,
            six: string,
            seven: string,
            eight: string,
            nine: string,
            ten: string
        }
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
    pages: {
        calculationForm: {
            title: string
        },
        resultsForm: {
            title: string
        },
        retainersForm: {
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
            back: string,
            ahead: string
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
            },
            retainersForm: {
                roofType: string,
                retainingSystem: string,
                retainerHeight: string,
                retainerRows: string
            }
        },
        placeholders: {
            roofData: {
                searchCity: string
            }
        },
        options: {
            roofType: {
                concreteTile: string,
                flatTile: string
            },
            retainingSystem: {
                grid: string,
                doubleTube: string
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
        },
        resistanceError: {
            title: string,
            body: string
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
        },
        productChoice: {
            headers: {
                image: string,
                code: string,
                name: string,
                height: string,
                distance: string,
                description: string
            }
        },
        retainerChoice: {
            headers: {

            }
        }
    },
    loading: {
        cities: string,
        computation: string,
        products: string
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

export const getBrowserLanguage = (): Translation => {
    switch (navigator.language) {
        case "en":
        case "en-GB":
        case "en-US":
        case "en-CA":
            return english
        case "it":
        case "it-IT":
        case "it-CH":
            return italian
        case "de":
        case "de-DE":
        case "de-CH":
        case "de-AT":
        case "de-LU":
            return german
        default:
            return english
    }
}