import './App.css';
import React, {useState} from "react";
import {SnowLoadForm} from "./components/form/SnowLoadForm";
import {getBrowserLanguage, getTranslation, Language, Translation} from "./languages/translation";
import {LanguageContext} from './components/language/LanguageContext';
import {SnowLoadContext} from "./components/context/SnowLoadContext";

function App() {
    const [translation, setTranslation] = useState<Translation>(getBrowserLanguage())
    const [citiesSelectionActive, setCitiesSelectionActive] = useState<boolean>(false)

    const selectTranslation = (lang: Language) => {
        setTranslation(getTranslation(lang))
    }

    return (
        <div>
            <SnowLoadContext.Provider value={{citiesSelectionActive, setCitiesSelectionActive}}>
                <LanguageContext.Provider value={{translation, selectTranslation}}>
                    <SnowLoadForm/>
                </LanguageContext.Provider>
            </SnowLoadContext.Provider>
        </div>
    );
}

export default App;