import './App.css';
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";
import {MessageModal} from "./components/messages/MessageModal";

function App() {

    return (
        <div className="container p-3">
            <SnowloadCalculationForm/>
            <MessageModal  header={'Input validation error'} body={'You have an error in your input, please retry...'} />
        </div>
    );
}

export default App;
