import {Callback} from "../../functions/callbacks";
import {Modal} from "react-bootstrap";
import {AddCityForm} from "../form/AddCityForm";
import React from "react";
import {SnowLoadModal} from "./SnowLoadModal";

export const AddCityModal = ({show, onHide}: { show: boolean, onHide: Callback }) => {
    return (
        <div>
            <SnowLoadModal  show={show} header={"Add new city"} body={<AddCityForm />} onHide={onHide}/>
        </div>
    );
}