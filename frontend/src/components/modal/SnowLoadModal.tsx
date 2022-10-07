import {Callback} from "../../functions/callbacks";
import {Modal} from "react-bootstrap";
import React, {ReactElement} from "react";

export const SnowLoadModal = ({show, header, body, onHide}:
                                  { show: boolean, header: string, body: ReactElement, onHide: Callback }) => {
    return (
        <div>
            <Modal size={"lg"} show={show} onHide={onHide} centered>
                <div className={"modal-header snowload-banner shadow-sm"}>
                    <h2 className={"white text-shadow"} >
                        <strong>
                            {header}
                        </strong>
                    </h2>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onHide}></button>
                </div>
                <div className="modal-body">{body}</div>
            </Modal>
        </div>
    );
}
