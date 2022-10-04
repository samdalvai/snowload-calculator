import {Callback} from "../../functions/callbacks";
import {Modal} from "react-bootstrap";
import {NewCityForm} from "../form/NewCityForm";
import React from "react";

export const AddCityModal = ({show, onHide}: { show: boolean, onHide: Callback }) => {
    return (
        <div>
            <Modal size={"lg"} show={show} onHide={onHide} centered>
                <Modal.Header closeButton style={{backgroundColor: "lightgrey"}}>
                    <h3 className="modal-title text-center">Add new city</h3>
                </Modal.Header>
                <div className="modal-body">
                    <NewCityForm />
                </div>
            </Modal>
        </div>
    );
}