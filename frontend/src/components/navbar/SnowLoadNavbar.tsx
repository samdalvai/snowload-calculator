import {SnowLoadLogo} from "../logo/SnowLoadLogo";
import React, {useContext} from "react";
import {LanguageSelector} from "../language/LanguageSelector";
import {LanguageContext} from "../language/LanguageContext";

export const SnowLoadNavbar = () => {
    const {translation, selectTranslation} = useContext(LanguageContext);

    return (
        <div>
            <nav className="navbar navbar-expand-sm shadow-sm
            bottom-border snowload-grey-background">
                <div className="container-fluid">
                    <SnowLoadLogo text={translation.header.title}/>
                    <button className="navbar-toggler all-border shadow-sm" type="button" data-bs-toggle="collapse"
                            style={{backgroundColor: "white"}}
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                            </li>
                        </ul>
                        <form className="d-flex">
                            <LanguageSelector
                                onSelectLanguage={lang => selectTranslation ? selectTranslation(lang) : ""}/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

/*
<nav className="navbar navbar-expand-sm shadow-sm
            bottom-border snowload-grey-background">
                <div className="container-fluid">
                    <div style={{marginLeft: "2.5%"}}>
                        <SnowLoadLogo text={translation.header.title}/>
                    </div>
                    <div className="d-flex">
                        <LanguageSelector
                            onSelectLanguage={lang => selectTranslation ? selectTranslation(lang) : ""}/>
                    </div>
                </div>
            </nav>
 */