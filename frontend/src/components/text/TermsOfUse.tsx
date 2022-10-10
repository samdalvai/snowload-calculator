import {LanguageContext} from "../language/LanguageContext";
import {useContext} from "react";

export const TermsOfUse = () => {
    //const {dictionary, toggleDictionary} = useContext(LanguageContext);

    return (
        <div>
            <h5><strong>Terms of use</strong></h5>
            <p className={"font-12"}>
                The information you provide will be automatically processed by our system in accordance with
                DIN 1055-5 / EN1991 and the specifications of the ZVDH leaflet on installation parts.
                Occurring special features such as projections on roofs, exposed locations, compliance with
                special safety regulations and or structural features are not taken into account and must be
                verified separately. This product generation applies in connection with the specific installation
                instructions and the specifications of the ZVDH Merkblatt Einbauteile in the currently valid version.
            </p>
            <p className={"font-12"}>
                For the highest possible stability of the snow protection system, an exact specification of the
                requested data is required. The information is processed automatically by the system used and is not
                checked
                individually for correctness. No liability can be accepted for incorrect data.
            </p>
        </div>
    )
}