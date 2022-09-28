import './App.css';
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";

function App() {


    return (
        <div className="container p-3">
            <SnowloadCalculationForm onCompute={console.log}/>
        </div>
    );
}

export default App;
