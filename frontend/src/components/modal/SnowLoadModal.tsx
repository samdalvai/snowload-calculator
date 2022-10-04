import {Callback} from "../../functions/callbacks";
import {Modal} from "react-bootstrap";
import React, {ReactElement} from "react";

export const SnowLoadModal = ({show, header, body, onHide}:
                                  { show: boolean, header: string, body: ReactElement, onHide: Callback }) => {
    return (
        <div>
            <Modal size={"lg"} show={show} onHide={onHide} centered>
                <Modal.Header closeButton style={{backgroundColor: "lightgrey"}}>
                    <h3 className="modal-title">{header}</h3>
                </Modal.Header>
                <div className="modal-body">{body}</div>
            </Modal>
        </div>
    );
}
