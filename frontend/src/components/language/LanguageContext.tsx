import {createContext} from "react";
import {english} from "../../languages/english";
import {Language, Translation} from "../../languages/translation";

export const LanguageContext = createContext<ILanguageContext>({
    translation: english
});

export interface ILanguageContext {
    translation: Translation;
    selectTranslation?: (lang: Language) => void;
}