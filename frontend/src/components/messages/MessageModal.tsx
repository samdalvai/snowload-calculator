import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {Callback} from "../../functions/callbacks";

export const MessageModal = ({show, header, body, onHide}: { show: boolean, header: string, body: string, onHide: Callback }) => {
    //const [show, setShow] = useState(true);

    return (
        <div>
            <Modal show={show} onHide={onHide} centered>
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