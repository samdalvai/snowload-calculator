import {Callback} from "../../functions/callbacks";
import {Modal} from "react-bootstrap";
import {AddCityForm} from "../form/AddCityForm";
import React, {useContext} from "react";
import {SnowLoadModal} from "./SnowLoadModal";
import {LanguageContext} from "../language/LanguageContext";

export const AddCityModal = ({show, onHide}: { show: boolean, onHide: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <SnowLoadModal  show={show} header={translation.modals.addCity.title} body={<AddCityForm />} onHide={onHide}/>
        </div>
    );
}