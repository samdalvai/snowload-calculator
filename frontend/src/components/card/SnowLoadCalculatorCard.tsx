import React, {ReactElement} from "react";
import {TermsOfUse} from "../text/TermsOfUse";

export const SnowLoadCalculatorCard = ({body}: { body: ReactElement }) => {
    return (
        <div className={"p-3"}>
            <div className="card shadow rounded">
                <div className="card-header text-center top-border-black snowload-grey-background">
                    <h1 className={"white text-shadow"} >
                        <strong>
                            Snowload Calculator
                        </strong>
                    </h1>
                </div>

                <div className="card-body">
                    {body}
                </div>

                <div className="row pt-3">
                    <div className="col-md-6 pt-3 image-container">
                        <div className="img-fluid">
                            <img src={"/img/roof.jpg"} className="rounded" alt="Roof"/>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3">
                        <TermsOfUse />
                    </div>
                </div>

            </div>
        </div>
    )
}