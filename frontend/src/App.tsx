import './App.css';
import React, {useState} from "react";
import {SnowLoadForm} from "./components/form/SnowLoadForm";
import {getTranslation, Language, Translation} from "./languages/translation";
import {english} from "./languages/english";
import { LanguageContext } from './components/language/LanguageContext';

function App() {
    const [translation, setTranslation] = useState<Translation>(english)

    const selectTranslation = (lang: Language) => {
        setTranslation(getTranslation(lang))
    }

    return (
        <div>
            <LanguageContext.Provider value={{translation, selectTranslation}}>
                <SnowLoadForm/>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;