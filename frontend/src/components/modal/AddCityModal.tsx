import {Callback, CityCallBack} from "../../functions/callbacks";
import {AddCityForm} from "../form/AddCityForm";
import React, {useContext} from "react";
import {SnowLoadModal} from "./SnowLoadModal";
import {LanguageContext} from "../language/LanguageContext";

export const AddCityModal = ({show, onAddCity, onHide}: { show: boolean, onAddCity: CityCallBack, onHide: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <div>
            <SnowLoadModal  show={show} header={translation.modals.addCity.title} body={<AddCityForm  onAddCity={onAddCity}/>} onHide={onHide}/>
        </div>
    );
}