import './App.css';
import {SnowloadCalculationForm} from "./components/form/SnowloadCalculationForm";

function App() {
    return (
        <div className="container p-2">
            <SnowloadCalculationForm onCompute={console.log}/>
        </div>
    );
}

export default App;