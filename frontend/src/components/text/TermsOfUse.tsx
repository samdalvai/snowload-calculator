import {LanguageContext} from "../language/LanguageContext";
import React, {useContext} from "react";
import {FlagIcon} from "../icon/FlagIcon";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";

export const TermsOfUse = () => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <h5><strong>{translation.termsOfUse.title}</strong></h5>
            <p className={"font-12"}>
                {translation.termsOfUse.text1}
            </p>
            <p className={"font-12"}>
                {translation.termsOfUse.text2}
            </p>
        </div>
    )
}