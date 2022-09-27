import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

export const MessageModal = ({header, body}: { header: string, body: string }) => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <h3 className="modal-title">{header}</h3>
                </Modal.Header>
                <div className="modal-body">{body}</div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>

                </div>
            </Modal>
        </div>
    );
}