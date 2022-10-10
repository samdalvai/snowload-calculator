import React from "react";
import {SnowLoadLogo} from "../logo/SnowLoadLogo";

export const SnowLoadHeader = () => {
    return (
        <div>
            <div className="container-fluid shadow-sm
            bottom-border snowload-grey-background">
                <header className={"text-center p-3"} >
                    <SnowLoadLogo  text={"Snowload Calculator"}/>
                </header>
            </div>
        </div>
    )
}
