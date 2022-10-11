import {SnowLoadLogo} from "../logo/SnowLoadLogo";
import React, {useContext} from "react";
import {LanguageSelector} from "../language/LanguageSelector";
import {LanguageContext} from "../language/LanguageContext";
import {FlagIcon} from "../icon/FlagIcon";

export const SnowLoadNavbar = () => {
    const {translation, selectTranslation} = useContext(LanguageContext);

    return (
        <div>
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
        </div>
    )
}