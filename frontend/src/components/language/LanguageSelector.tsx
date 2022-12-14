import React, {useContext, useState} from "react";
import {LanguageCallback} from "../../functions/callbacks";
import {LanguageContext} from "./LanguageContext";
import {Language} from "../../languages/translation";
import {Selector, SelectorOptionData} from "../input/Selector";



export const LanguageSelector = ({onSelectLanguage}: { onSelectLanguage: LanguageCallback }) => {
    const {translation} = useContext(LanguageContext);

    const [selectValue, setValue] = useState<Language>(translation.language)

    const optionData: SelectorOptionData<Language>[] = [
        {value: "it", text: getFlagEmoji('IT') + " " + translation.selection.languageSelector.italian},
        {value: "de", text: getFlagEmoji('DE') + " " + translation.selection.languageSelector.german},
        {value: "en", text: getFlagEmoji('GB') + " " + translation.selection.languageSelector.english}
    ]

    const handleSelect = (e: any) => {
        setValue(e.target.value);
        onSelectLanguage(e.target.value)
    }

    return (
        <div>
            <Selector optionData={optionData} value={selectValue} onSelect={handleSelect} border/>
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
