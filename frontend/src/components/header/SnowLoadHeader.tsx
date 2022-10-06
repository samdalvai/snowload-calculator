import React from "react";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";

export const SnowLoadHeader = () => {
    return (
        <div>
            <div className="container-fluid shadow-sm" style={{
                backgroundColor: "#6c757d",
                borderBottomStyle: "solid",
                borderBottomWidth: "1.5px"}}
            >
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