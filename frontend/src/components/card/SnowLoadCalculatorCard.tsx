import React, {ReactElement} from "react";

export const SnowLoadCalculatorCard = ({body}: { body: ReactElement }) => {
    return (
        <div>
            <div className="card shadow rounded p-2">
                <div className="card-header text-center snowload-header">
                    <h1 className={"white text-shadow"} >
                        <strong>
                            Snowload Calculator
                        </strong>
                    </h1>
                </div>
                <div className="card-body">
                    {body}
                    <div className="row pt-3">
                        <div className="col-md-6 pt-3 image-container">
                            <div className="img-fluid">
                                <img src={"/img/roof.jpg"} className="rounded" alt="Roof"/>
                            </div>
                        </div>
                        <div className="col-md-6 pt-3">
                            <TermsOfUse/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TermsOfUse = () => {
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