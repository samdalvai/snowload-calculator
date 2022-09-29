import './App.css';
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";
import {AddCityModal} from "./components/modal/Modal";
import {ErrorInput} from "./components/selection/ErrorInput";
import {useState} from "react";
import {doesProvinceExist} from "./functions/search/searchProvince";

function App() {
    const [show, setShow] = useState<boolean>(false)

    doesProvinceExist('TNs')

    return (
        <div className="container p-3">
            <SnowloadCalculationForm onCompute={console.log}/>
            <AddCityModal show={show} onHide={() => setShow(false)} />
        </div>
    );
}

export default App;
