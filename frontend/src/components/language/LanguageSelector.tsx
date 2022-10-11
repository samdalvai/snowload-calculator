import React, {useContext, useState} from "react";
import {LanguageCallback} from "../../functions/callbacks";
import {LanguageContext} from "./LanguageContext";
export const LanguageSelector = ({onSelectLanguage}: { onSelectLanguage: LanguageCallback }) => {
    const {translation} = useContext(LanguageContext);

    const [selectValue, setValue] = useState("en")

    const handleSelect = (e: any) => {
        setValue(e.target.value);
        onSelectLanguage(e.target.value)
    }

    return (
        <div>
            <select className="form-select shadow-sm all-border"
                    value={selectValue}
                    onChange={handleSelect}>
                <option value="it">{getFlagEmoji('IT')} {translation.selection.languageSelector.italian}</option>
                <option value="de">{getFlagEmoji('DE')} {translation.selection.languageSelector.german}</option>
                <option value="en">{getFlagEmoji('GB')} {translation.selection.languageSelector.english}</option>
            </select>
        </div>
    )
}

export const getFlagEmoji = (countryCode: string): string => {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char =>  127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}
