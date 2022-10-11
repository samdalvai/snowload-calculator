import React, {ReactElement} from "react";
import {SnowLoadHeader} from "../header/SnowLoadHeader";
import {SnowLoadFooter} from "../footer/SnowLoadFooter";
import {TermsOfUse} from "../text/TermsOfUse";
import {SnowLoadNavbar} from "../navbar/SnowLoadNavbar";
import {ImageContainerRounded} from "../image/ImageContainerRounded";

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
                        <ImageContainerRounded url={"/img/roof.jpg"} alt={"Roof"}/>
                    </div>
                    <div className="col-md-6 pt-3">
                        <TermsOfUse/>
                    </div>
                </div>
            </div>
            {
                // Uncomment to enable footer
                /*<div className={"pt-3"}>
                    <SnowLoadFooter />
                </div>*/
            }

        </div>
    )
}