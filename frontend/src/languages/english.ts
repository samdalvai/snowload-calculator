import {Translation} from "./translation";

export const english: Translation = {
    language: "en",
    words: {
        yes: "Yes",
        no: "No",
        row: "row",
        numbers: {
            one: "One",
            two: "Two",
            three: "Three",
            four: "Four",
            five: "Five",
            six: "Six",
            seven: "Seven",
            eight: "Eight",
            nine: "Nine",
            ten: "Ten"
        },
        holder: "Support",
        retainer: "Retaining system"
    },
    header: {
        title: "Snowload Calculator"
    },
    footer: {
        title: "Snowload Calculator",
        resources: {
            title: "Resources",
        },
        about: {
            title: "About"
        }
    },
    pages: {
        calculationForm: {
            title: "Roof data"
        },
        resultsForm: {
            title: "Snow load results"
        },
        retainersForm: {
            title: "Retainer selection"
        }
    },
    termsOfUse: {
        title: "Terms of use",
        text1: "The information you provide will be automatically processed by our system in accordance with DIN 1055-5 / EN1991 and the specifications of the ZVDH leaflet on installation parts. Occurring special features such as projections on roofs, exposed locations, compliance with special safety regulations and or structural features are not taken into account and must be verified separately. This product generation applies in connection with the specific installation instructions and the specifications of the ZVDH Merkblatt Einbauteile in the currently valid version.",
        text2: "For the highest possible stability of the snow protection system, an exact specification of the requested data is required. The information is processed automatically by the system used and is not checked individually for correctness. No liability can be accepted for incorrect data."
    },
    buttons: {
        text: {
            addCity: "Add City",
            compute: "Compute",
            reset: "Reset",
            print: "Print",
            back: "Back",
            send: "Send",
            ahead: "Ahead"
        },
        toolTips: {
            addButton: "Click to add a new city",
            deleteButton: "Click to delete selection"
        }
    },
    inputs: {
        labels: {
            roofData: {
                steepness: "Steepness (α)",
                roofLenght: "Roof length (sl)",
                roofWidth: "Roof width (l)",
                safetyCoefficient: "1.5 safety coefficient"
            },
            addCity: {
                zip:  "ZIP code",
                name: "Name",
                province: "Province",
                altitude: "Altitude"
            },
            retainersForm: {
                roofType: "Roof type",
                retainingSystem: "Retaining system",
                retainerHeight: "Retainer height",
                retainerRows: "Retainer rows"
            }
        },
        placeholders: {
            roofData: {
                searchCity: "Search city..."
            }
        },
        options: {
            roofType: {
                concreteTile: "Concrete tile",
                flatTile: "Flat tile"
            },
            retainingSystem: {
                grid: "Grid",
                doubleTube: "Double tube"
            }
        }
    },selection: {
        languageSelector: {
            english: "English",
            italian: "Italian",
            german: "German"
        }
    },
    modals: {
        addCity: {
            title: "Add new city"
        },
        resistanceError: {
            title: "Resistance error",
            body: "The resistance is not high enough, please decrease the distance of the holder or increase the number of rows"
        }
    },
    tables: {
        roofData: {
            title: "Roof data",
            body: {
                city: "City",
                steepness: {
                    label: "Steepness (α)"
                },
                roofLength: {
                    label: "Roof Length (sl)"
                },
                roofWidth: {
                    label: "Roof width (l)"
                },
                safetyCoefficient: {
                    label: "Safety coefficient"
                }
            }
        },
        snowLoadCalculation: {
            title: "Snow load calculation",
            body: {
                altitude: {
                    label: "Altitude",
                    units: "masl"
                },
                zone: {
                    label: "Climatic zone"
                },
                groundLoad: {
                    label: "Load on the ground"
                },
                roofLoad: {
                    label: "Roof Load"
                },
                linearLoad: {
                    label: "Linear Load"
                }
            }
        },
        productChoice: {
            headers: {
                image: "Image",
                code: "Code",
                name: "Name",
                height: "Height (mm)",
                distance: "Distance (mm)",
                description: "Description"
            }
        },
        retainerChoice: {
            headers: {

            }
        }
    },
    loading: {
        cities: "Loading cities...",
        computation: "Computing snowload...",
        products: "Loading products..."
    },
    error: {
        cities: "Error loading cities...",
        products: "Error loading products.."
    },
    alerts: {
        inputError: "You have an error in your input, please retry...",
        computationError: "An error occurred in the snow load calculation, please go back and try again...",
        addCity: {
            error: "Error adding new city, please retry...",
            success: "New city successfully added, please reload the previous page"
        }
    }
}