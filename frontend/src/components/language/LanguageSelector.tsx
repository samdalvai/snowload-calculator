import React, {useState} from "react";
import {LanguageCallback, StringCallBack} from "../../functions/callbacks";

export const LanguageSelector = ({onSelectLanguage}: { onSelectLanguage: LanguageCallback }) => {
    const [selectValue, setValue] = useState("")

    const handleSelect = (e: any) => {
        setValue(e.target.value);
        onSelectLanguage(e.target.value)
    }

    return (
        <div>
            <select className="form-select" value={selectValue}
                    onChange={handleSelect}>
                <option value="en">English</option>
                <option value="it">Italian</option>
                <option value="de">German</option>
            </select>
        </div>
    )
}