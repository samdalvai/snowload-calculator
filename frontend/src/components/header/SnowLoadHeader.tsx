import React from "react";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";

export const SnowLoadHeader = () => {
    return (
        <div>
            <div className="container-fluid shadow-sm snowload-header">
                <header className={"text-center p-3"} >
                    <h1 className={"white text-shadow"} >
                        <strong>
                            Snowload Calculator
                        </strong>
                    </h1>
                </header>
            </div>
        </div>
    )
}