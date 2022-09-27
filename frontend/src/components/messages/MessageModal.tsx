import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

export const MessageModal = ({header, body}: {header: string, body: string}) => {
    const [show, setShow] = useState<boolean>(true)

    return (
        <div style={{display: "block"}} className={show ? "fade modal show" : "fade modal"} tabIndex={0}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title h4">{header}</div>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)}></button>
                    </div>
                    <div className="modal-body">{body}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}