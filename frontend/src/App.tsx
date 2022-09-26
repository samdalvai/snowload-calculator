import './App.css';
import {CitiesSearch} from "./components/CitiesSearch";
import {CitiesSelector} from "./components/CitiesSelector";

function App() {
    return (
        <div className="container p-5">
            <CitiesSelector />
        </div>
    );
}

export default App;
