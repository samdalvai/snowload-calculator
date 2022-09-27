import './App.css';
import {CitiesSearch} from "./components/selection/cities/CitiesSearch";
import {CitiesSelector} from "./components/selection/cities/CitiesSelector";
import {InputWithChangeableRightLabel, InputWithLabel} from "./components/input/InputWithLabel";
import {CheckBoxWithDescription} from "./components/input/CheckBoxWithDescription";
import {RoofMeasureInput} from "./components/input/roof/RoofMeasureInput";

function App() {
    // @ts-ignore
    return (
        <div className="container p-3 shadow rounded">
            <CitiesSelector />
            <RoofMeasureInput />
        </div>
    );
}


export default App;
