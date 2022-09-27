import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

export const MessageModal = ({header, body}: { header: string, body: string }) => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}