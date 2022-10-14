import {Translation} from "./translation";

export const italian: Translation = {
    language: "it",
    words: {
        yes: "Si",
        no: "No",
        row: "fila",
        numbers: {
            one: "Una",
            two: "Due",
            three: "Tre",
            four: "Quattro",
            five: "Cinque",
            six: "Sei",
            seven: "Sette",
            eight: "Otto",
            nine: "Nove",
            ten: "Dieci"
        }
    },
    header: {
        title: "Calcolo carico neve"
    },
    footer: {
        title: "Calcolo carico neve",
        resources: {
            title: "Risorse",
        },
        about: {
            title: "About"
        }
    },
    pages: {
        calculationForm: {
            title: "Dati della copertura"
        },
        resultsForm: {
            title: "Risultati carico neve"
        },
        retainersForm: {
            title: "Scelta sistema di trattenuta"
        }
    },
    termsOfUse: {
        title: "Termini di utilizzo",
        text1: "Le informazioni fornite saranno elaborate automaticamente dal nostro sistema in conformità alla norma DIN 1055-5 / EN1991 e alle specifiche dell'opuscolo ZVDH sulle parti di installazione. Eventuali caratteristiche particolari come sporgenze su tetti, posizioni esposte, conformità a speciali norme di sicurezza o caratteristiche strutturali non vengono prese in considerazione e devono essere verificate separatamente. Questa generazione di prodotti si applica in relazione alle specifiche istruzioni di installazione e alle specifiche della ZVDH Merkblatt Einbauteile nella versione attualmente in vigore.",
        text2: "Per garantire la massima stabilità del sistema di protezione dalla neve, è necessaria un'esatta indicazione dei dati richiesti. Le informazioni vengono elaborate automaticamente dal sistema utilizzato e non vengono controllate singolarmente per verificarne la correttezza. Non ci si assume alcuna responsabilità per dati errati."
    },
    buttons: {
        text: {
            addCity: "Aggiungi città",
            compute: "Calcola",
            reset: "Reset",
            print: "Stampa",
            back: "Indietro",
            send: "Invia",
            ahead: "Avanti"
        },
        toolTips: {
            addButton: "Fare clic per aggiungere una nuova città",
            deleteButton: "Fare clic per eliminare la selezione"
        }
    },
    inputs: {
        labels: {
            roofData: {
                steepness: "Pendenza (α)",
                roofLenght: "Lunghezza falda (sl)",
                roofWidth: "Lunghezza gronda (l)",
                safetyCoefficient: "1.5 coefficiente di sicurezza"
            },
            addCity: {
                zip:  "CAP",
                name: "Nome",
                province: "Provincia",
                altitude: "Altitudine"
            },
            retainersForm: {
                roofType: "Tipo di copertura",
                retainingSystem: "Sistema fermaneve",
                retainerHeight: "Altezza paraneve",
                retainerRows: "File paraneve"
            }
        },
        placeholders: {
            roofData: {
                searchCity: "Ricerca città"
            }
        },
        options: {
            roofType: {
                concreteTile: "Tegola in cemento/cotto",
                flatTile: "Tegola piana"
            },
            retainingSystem: {
                grid: "Griglia",
                doubleTube: "Doppio tubo"
            }
        }
    },selection: {
        languageSelector: {
            english: "Inglese",
            italian: "Italiano",
            german: "Tedesco"
        }
    },
    modals: {
        addCity: {
            title: "Aggiunta nuova città"
        }
    },
    tables: {
        roofData: {
            title: "Dati del tetto",
            body: {
                city: "Città",
                steepness: {
                    label: "Pendenza (α)"
                },
                roofLength: {
                    label: "Lunghezza falda (sl)"
                },
                roofWidth: {
                    label: "Lunghezza gronda (l)"
                },
                safetyCoefficient: {
                    label: "Coefficiente di sicurezza"
                }
            }
        },
        snowLoadCalculation: {
            title: "Calcolo carico neve",
            body: {
                altitude: {
                    label: "Altitudine",
                    units: "m s.l.m."
                },
                zone: {
                    label: "Zonca climatica"
                },
                groundLoad: {
                    label: "Carico neve al suolo"
                },
                roofLoad: {
                    label: "Carico neve sul tetto"
                },
                linearLoad: {
                    label: "Carico neve in gronda"
                }
            }
        },
        holderChoice: {
            headers: {
                image: "Immagine",
                code: "Codice",
                name: "Nome",
                height: "Altezza (mm)",
                distance: "Interasse (mm)"
            }
        },
        retainerChoice: {
            headers: {

            }
        }
    },
    loading: {
        cities: "Caricamento delle città...",
        computation: "Calcolo del carico di neve..."
    },
    error: {
        cities: "Errore nel caricamento delle città..."
    },
    alerts: {
        inputError: "Si è verificato un errore nell'inserimento dei dati, riprovare...",
        computationError: "Si è verificato un errore nel calcolo del carico di neve, tornare indietro e riprovare...",
        addCity: {
            error: "Errore nell'aggiunta di una nuova città, riprovare...",
            success: "Nuova città aggiunta con successo, ricaricare la pagina precedente"
        }
    }
}