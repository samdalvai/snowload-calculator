import {Translation} from "./translation";

export const italian: Translation = {
    language: "it",
    header: {
        title: "Calcolo carico neve"
    },
    footer: {

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
            send: "Invia"
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
            }
        },
        placeholders: {
            roofData: {
                searchCity: "Ricerca città"
            }
        }
    },selection: {
        languageSelector: {
            english: "Inglese",
            italian: "Italiano",
            german: "Tedesco"
        }
    }
}