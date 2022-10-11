import {Translation} from "./translation";

export const german: Translation = {
    language: "de",
    words: {
        yes: "Ja",
        no: "Nein"
    },
    header: {
        title: "Schneelastrechner"
    },
    footer: {
        title: "Schneelastrechner",
        resources: {
            title: "Ressourcen",
        },
        about: {
            title: "About"
        }
    },
    termsOfUse: {
        title: "Bedingungen für die Nutzung",
        text1: "Die von Ihnen gemachten Angaben werden von unserem System gemäß DIN 1055-5 / EN1991 und den Vorgaben des ZVDH-Merkblattes für Einbauteile automatisch verarbeitet. Auftretende Besonderheiten wie z.B. Dachüberstände, exponierte Lagen, Einhaltung besonderer Sicherheitsvorschriften und oder bauliche Besonderheiten werden nicht berücksichtigt und müssen gesondert geprüft werden. Diese Produktgeneration gilt in Verbindung mit den spezifischen Einbauhinweisen und den Vorgaben des ZVDH Merkblattes Einbauteile in der jeweils gültigen Fassung.",
        text2: "Für die höchstmögliche Stabilität des Schneeschutzsystems ist eine genaue Angabe der geforderten Daten erforderlich. Die Angaben werden vom verwendeten System automatisch verarbeitet und nicht einzeln auf ihre Richtigkeit überprüft. Für fehlerhafte Angaben kann keine Haftung übernommen werden."
    },
    buttons: {
        text: {
            addCity: "Stadt hinzufügen",
            compute: "Berechnen",
            reset: "Zurücksetzen",
            print: "Drucken",
            back: "Zurück",
            send: "Senden"
        },
        toolTips: {
            addButton: "Klicken Sie, um eine neue Stadt hinzuzufügen",
            deleteButton: "Klicken Sie zum Löschen der Auswahl"
        }
    },
    inputs: {
        labels: {
            roofData: {
                steepness: "Neigung (α)",
                roofLenght: "Sparrenlänge (sl)",
                roofWidth: "Trauflänge (l)",
                safetyCoefficient: "1.5 Teilsicherheitsbeiwert"
            },
            addCity: {
                zip:  "Postleitzahl",
                name: "Name",
                province: "Provinz",
                altitude: "Höhenlage"
            }
        },
        placeholders: {
            roofData: {
                searchCity: "Stadt suchen..."
            }
        }
    },selection: {
        languageSelector: {
            english: "Englisch",
            italian: "Italienisch",
            german: "Deutsch"
        }
    },
    modals: {
        addCity: {
            title: "Neue Stadt hinzufügen"
        }
    },
    tables: {
        roofData: {
            title: "Daten des Daches",
            body: {
                city: "Stadt",
                steepness: {
                    label: "Neigung (α)"
                },
                roofLength: {
                    label: "Sparrenlänge (sl)"
                },
                roofWidth: {
                    label: "Trauflänge (l)"
                },
                safetyCoefficient: {
                    label: "Teilsicherheitsbeiwert"
                }
            }
        },
        snowLoadCalculation: {
            title: "Berechnung der Schneelast",
            body: {
                altitude: {
                    label: "Höhenlage",
                    units: "Meter"
                },
                zone: {
                    label: "Klimazone"
                },
                groundLoad: {
                    label: "Schneelast auf dem Boden"
                },
                roofLoad: {
                    label: "Schneelast auf dem Dach"
                },
                linearLoad: {
                    label: "Schubkraft an der Traufe"
                }
            }
        }
    },
    loading: {
        cities: "Städte werden geladen...",
        computation: "Berechnung der Schneelast..."
    },
    error: {
        cities: "Fehler beim Laden von Städten..."
    },
    alerts: {
        inputError: "Sie haben einen Fehler in Ihrer Eingabe, bitte versuchen Sie es erneut...",
        computationError: "Bei der Schneelastberechnung ist ein Fehler aufgetreten, bitte gehen Sie zurück und versuchen Sie es erneut...",
        addCity: {
            error: "Fehler beim Hinzufügen einer neuen Stadt, bitte versuchen Sie es erneut...",
            success: "Neue Stadt erfolgreich hinzugefügt, bitte laden Sie die vorherige Seite neu"
        }
    }
}