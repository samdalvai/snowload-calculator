import './App.css';
import {CitiesSearch} from "./components/selection/cities/CitiesSearch";
import {CitiesSelector} from "./components/selection/cities/CitiesSelector";
import {InputWithChangeableRightLabel, InputWithLabel} from "./components/input/InputWithLabel";
import {CheckBoxWithDescription} from "./components/input/CheckBoxWithDescription";
import {RoofMeasureInput} from "./components/input/roof/RoofMeasureInput";
import {SnowloadCalculationForm} from "./components/input/snowload/SnowloadCalculationForm";

function App() {
    // @ts-ignore
    return (
        <div className="container p-3 shadow rounded">
            <SnowloadCalculationForm />
        </div>
    );
}


export default App;
