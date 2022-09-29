import './App.css';
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";
import {AddCityModal} from "./components/modal/Modal";
import {ErrorInput} from "./components/selection/ErrorInput";
import {useState} from "react";

function App() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="container p-3">
            <SnowloadCalculationForm onCompute={console.log}/>
            <AddCityModal show={show} onHide={() => setShow(false)} />
        </div>
    );
}

export default App;
