import {Button, Modal} from "react-bootstrap";
import {Callback} from "../../functions/callbacks";
import React from "react";

export const MessageModal = ({show, header, body, onHide}: { show: boolean, header: string, body: string, onHide: Callback }) => {
    return (
        <div>
            <Modal size={"lg"} show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <h3 className="modal-title">{header}</h3>
                </Modal.Header>
                <div className="modal-body">{body}</div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onHide}>Close</button>

                </div>
            </Modal>
        </div>
    );
}

export const AddCityModal = ({show, onHide}: { show: boolean, onHide: Callback }) => {



    return (
        <div>
            <Modal size={"xl"} show={show} onHide={onHide} centered>
                <Modal.Header closeButton style={{backgroundColor: "lightgrey"}}>
                    <h3 className="modal-title">Add new city</h3>
                </Modal.Header>
                <div className="modal-body">
                    whatever
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={onHide}>Add</button>
                    <button type="button" className="btn btn-secondary" onClick={onHide}>Close</button>
                </div>
            </Modal>
        </div>
    );
}