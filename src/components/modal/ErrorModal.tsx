import {Modal} from "react-bootstrap";
import {Callback} from "../../functions/callbacks";
import React from "react";

export const ErrorModal = ({show, header, body, onHide}: { show: boolean, header: string, body: string, onHide: Callback }) => {
    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
                <div className={"modal-header all-border shadow-sm red-background"}>
                    <h2 className={"white text-shadow"} >
                        <strong>
                            {header}
                        </strong>
                    </h2>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onHide}></button>
                </div>
                <div className="modal-body">{body}</div>
                <div className="modal-footer text-center">
                    <button style={{width: "25%"}} type="button" className="btn btn-secondary all-border shadow-sm" onClick={onHide}>Close</button>
                </div>
            </Modal>
        </div>
    );
}
