import React, {useContext} from "react";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";
import {LanguageContext} from "../language/LanguageContext";

export const SnowLoadFooter = () => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <div className="container-fluid shadow-sm top-border-black snowload-grey-background">
                <footer className={"p-3"}>
                    <div className="row">
                        <div className="col-12 col-md white text-shadow">
                            <h5><SnowFlakeIcon size={22}/> <strong>{translation.footer.title}</strong></h5>
                            <small className="d-block mb-3 text-light">© 2022 Copyright</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className={"white text-shadow"}>{translation.footer.resources.title}</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a>Resource</a></li>
                                <li className="mb-1"><a>Another resource</a></li>
                                <li className="mb-1"><a>Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className={"white text-shadow"}>{translation.footer.about.title}</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a>Team</a></li>
                                <li className="mb-1"><a>Privacy</a></li>
                                <li className="mb-1"><a>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
