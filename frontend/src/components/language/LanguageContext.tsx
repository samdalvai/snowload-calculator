import {createContext} from "react";

export const LanguageContext = createContext<ILanguageContext>({
    dictionary: "sdas"
});

export interface ILanguageContext {
    dictionary: any;
    toggleDictionary?: () => void;
}