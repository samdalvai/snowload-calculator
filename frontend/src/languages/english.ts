import {Translation} from "./translation";

export const english: Translation = {
    language: "en",
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
            send: "Send"
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
            }
        },
        placeholders: {
            roofData: {
                searchCity: "Search city..."
            }
        }
    }
}