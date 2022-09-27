import './App.css';
import {CitiesSearch} from "./components/selection/cities/CitiesSearch";
import {CitiesSelector} from "./components/selection/cities/CitiesSelector";
import {InputWithLabel} from "./components/input/InputWithLabel";

function App() {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-sm-6">
                    <InputWithLabel label={'Steepness (°)'} placeHolder={'Insert steepness...'}/>
                </div>
                <div className="col-sm-6">
                    <InputWithLabel label={'Steepness (°)'} placeHolder={'Insert steepness...'}/>
                </div>
            </div>
        </div>
    );
}

// <CitiesSelector />

export default App;
