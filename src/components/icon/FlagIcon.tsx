import React from "react";
import {ResizeableImageContainer} from "../image/ResizeableImageContainer";
import {Language} from "../../languages/translation";

export const FlagIcon = ({size, language}: { size: number, language: Language }) => {
    return (
        <div className={"image-container px-3"}>
            <ResizeableImageContainer url={getFlagFromLanguage(language)} alt={language + " flag"}
                                      scale={(size / 30.0).toString()}/>
        </div>
    )
}

export const getFlagFromLanguage = (lang: Language): string => {
    switch (lang) {
        case "en":
            return "/img/us-flag.jpg"
        case "it":
            return "/img/it-flag.jpg"
        case "de":
            return "/img/de-flag.jpg"
    }
}