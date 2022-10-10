import './App.css';
import {SnowLoadFooter} from "./components/footer/SnowLoadFooter";
import {SnowLoadHeader} from "./components/header/SnowLoadHeader";
import React from "react";
import {SnowLoadForm} from "./components/form/SnowLoadForm";

function App() {
    return (
        <div>
            <SnowLoadForm />
        </div>
    );
}

export default App;

/*
    const [language, setLanguage] = useState<languages>("english");

    const toggleLanguage = () => {
        setLanguage((lang) => (lang === "english" ? "italian" : "english"));
    }

//const [dictionary, setDictionary] = useState(dictionaryList.en)

//const toggleDictionary = () => {
// setDictionary((dict: any) => (dict === dictionaryList.en ? dictionaryList.it : dictionaryList.en));
//}
            <LanguageContext.Provider value={{language, toggleLanguage}}>
                <SnowLoadForm/>
            </LanguageContext.Provider>
 */