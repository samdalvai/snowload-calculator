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
        },
        holder: "Supporto fermaneve",
        retainer: "Sistema di ritenuta",
        none: "Nessuna",
        noResults: "Nessun risultato...",
        nrOfHolders: "Nr. supporti fermaneve",
        nrOfRetainers: "Nr. sistemi di ritenuta"
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
        },
        summaryForm: {
            title: "Riassunto"
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
            ahead: "Avanti",
            newComp: "Nuovo calcolo"
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
                zip: "CAP",
                name: "Nome",
                province: "Provincia",
                altitude: "Altitudine"
            },
            retainersForm: {
                roofType: "Tipo di copertura",
                retainerType: "Sistema fermaneve",
                retainerHeight: "Altezza paraneve",
                retainerMaterial: "Materiale",
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
                flatTile: "Tegola piana",
                metalRoof: "Tetto in metallo",
                standingSeam: "Lamiera aggraffata",
                ondulatedPlate: "Lamiera ondulata"
            },
            retainingSystem: {
                grid: "Griglia",
                tube: "Doppio tubo",
                log: "Tronco"
            },
            retainerMaterial: {
                zinkSteel: "Acciao zincato",
                stainlessSteel: "Acciaio inox",
                paintedSteel: "Acciao preverniciato",
                aluminium: "Alluminio",
                copper: "Rame"
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
        },
        resistanceError: {
            title: "Errore nella resistenza",
            body: "La resistenza del sistema non è sufficiente, ridurre la distanza del supporto o aumentare il numero di file."
        },
        distanceMismatchError: {
            title: "Errore nella distanza",
            body: "È necessario scegliere la stessa distanza tra il supporto e il sistema di ritenuta."
        },
        incompleteSelectionError: {
            title: "Selezione incompleta",
            body: "Per procedere, selezionare sia un supporto che un sistema di ritenuta..."
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
                    label: "Zona climatica"
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
        productChoice: {
            headers: {
                image: "Immagine",
                code: "Codice",
                name: "Nome",
                height: "Altezza (mm)",
                profile: "Profilo",
                distance: "Interasse (mm)",
                description: "Descrizione"
            }
        },
        summaryTables: {
            headers: {
                retainerProducts: "Prodotti sistema di ritenuta",
                retainerQuantities: "Quantità sistema di ritenuta"
            }
        }
    },
    loading: {
        cities: "Caricamento delle città...",
        computation: "Calcolo del carico di neve...",
        products: "Caricamento dei prodotti..."
    },
    error: {
        cities: "Errore nel caricamento delle città...",
        products: "Errore nel caricamento dei prodotti.."
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