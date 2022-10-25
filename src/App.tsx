import './App.css';
import React, {useState} from "react";
import {SnowLoadForm} from "./components/form/SnowLoadForm";
import {getBrowserLanguage, getTranslation, Language, Translation} from "./languages/translation";
import {LanguageContext} from './components/language/LanguageContext';
import {CitiesSelectionContext} from "./components/context/CitiesSelectionContext";

function App() {
    const [translation, setTranslation] = useState<Translation>(getBrowserLanguage())
    const [citiesSelectionActive, setCitiesSelectionActive] = useState<boolean>(false)

    const selectTranslation = (lang: Language) => {
        setTranslation(getTranslation(lang))
    }

    return (
        <div>
            <CitiesSelectionContext.Provider value={{citiesSelectionActive, setCitiesSelectionActive}}>
                <LanguageContext.Provider value={{translation, selectTranslation}}>
                    <SnowLoadForm/>
                </LanguageContext.Provider>
            </CitiesSelectionContext.Provider>
        </div>
    );
}

export default App;