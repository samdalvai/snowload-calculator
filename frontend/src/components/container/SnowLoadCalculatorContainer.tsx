import React, {ReactElement} from "react";
import {TermsOfUse} from "../card/SnowLoadCalculatorCard";

export const SnowLoadCalculatorContainer = ({body}: { body: ReactElement }) => {
    return (
        <div>
            <div className={"container-fluid"}>
                <div className="text-center" style={{backgroundColor: "lightgrey"}}>
                    <h2 style={{color: "#0d6efd"}}>
                        <strong>
                            Snowload Calculator
                        </strong>
                    </h2>
                </div>
                <div className={"container"}>
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