import React, {useContext} from "react";
import {SnowLoadLogo} from "../logo/SnowLoadLogo";
import {LanguageContext} from "../language/LanguageContext";

export const SnowLoadHeader = () => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <div className="container-fluid shadow-sm
            bottom-border snowload-grey-background">
                <header className={"text-center p-3"} >
                    <SnowLoadLogo  text={translation.header.title}/>
                </header>
            </div>
        </div>
    )
}
