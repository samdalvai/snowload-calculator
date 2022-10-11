import {createContext} from "react";
import {english} from "../../languages/english";
import {getBrowserLanguage, Language, Translation} from "../../languages/translation";

export const LanguageContext = createContext<ILanguageContext>({
    translation: getBrowserLanguage()
});

export interface ILanguageContext {
    translation: Translation;
    selectTranslation?: (lang: Language) => void;
}