import './App.css';
import React, {useState} from "react";
import {SnowLoadForm} from "./components/form/SnowLoadForm";
import {getBrowserLanguage, getTranslation, Language, Translation} from "./languages/translation";
import { LanguageContext } from './components/language/LanguageContext';

function App() {
    const [translation, setTranslation] = useState<Translation>(getBrowserLanguage())

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

/*
<LanguageContext.Provider value={{translation, selectTranslation}}>
                <SnowLoadForm/>
            </LanguageContext.Provider>
 */

/*
<SnowLoadResultsForm  error={false}
                                      loading={false}
                                      onBack={() => null}
                                      roofData={{
                                          city: {
                                              altitude: 100,
                                              name: "default",
                                              province: "default",
                                              zip: "default"
                                          },
                                          steepness: 20,
                                          roofLength: 10,
                                          roofWidth: 15,
                                          coefficient: false
                                      }}
                                      snowLoadData={{
                                          altitude: 100,
                                          zone: "I-A",
                                          groundLoad: 1,
                                          roofLoad: 1.5,
                                          linearLoad: 2
                                      }}/>
            </LanguageContext.Provider>
 */