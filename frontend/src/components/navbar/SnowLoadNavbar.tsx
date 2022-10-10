import {SnowLoadLogo} from "../logo/SnowLoadLogo";
import React from "react";
import {LanguageSelector} from "../language/LanguageSelector";

export const SnowLoadNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm shadow-sm
            bottom-border snowload-grey-background">
                <div className="container-fluid">
                    <SnowLoadLogo text={"Snowload Calculator"}/>
                    <LanguageSelector onSelectLanguage={() => console.log("What??")} />
                </div>
            </nav>
        </div>
    )
}