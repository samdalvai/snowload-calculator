import React from "react";
import {LanguageCallback} from "../../functions/callbacks";

export const LanguageSelector = ({onSelectLanguage}: {onSelectLanguage: LanguageCallback}) => {
    return (
        <div>
            <select className="form-select" aria-label="Language select" defaultValue={"en"} onSelect={() => console.log("What??")}>
                <option value="en">English</option>
                <option value="it">Italian</option>
                <option value="de">German</option>
            </select>
        </div>
    )
}