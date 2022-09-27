import './App.css';
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";
import {MessageModal} from "./components/messages/MessageModal";

function App() {
    return (
        <div className="container p-3">
            <SnowloadCalculationForm/>
            <MessageModal  header={'header'} body={'body'} />
        </div>
    );
}

export default App;
