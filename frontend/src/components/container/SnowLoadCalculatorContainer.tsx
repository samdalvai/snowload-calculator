import React, {ReactElement} from "react";
import {SnowLoadHeader} from "../header/SnowLoadHeader";
import {SnowLoadFooter} from "../footer/SnowLoadFooter";
import {TermsOfUse} from "../text/TermsOfUse";
import {SnowLoadNavbar} from "../navbar/SnowLoadNavbar";

export const SnowLoadCalculatorContainer = ({body}: { body: ReactElement }) => {
    return (
        <div className={"column-flex"}>
            <div className={"pb-3"}>
                <SnowLoadNavbar/>
            </div>

            <div className={"flex-auto container"}>
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

            <div className={"pt-3"}>
                <SnowLoadFooter />
            </div>
        </div>
    )
}