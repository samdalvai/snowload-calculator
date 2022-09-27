import './App.css';
import {CitiesSearch} from "./components/selection/cities/CitiesSearch";
import {CitiesSelector} from "./components/selection/cities/CitiesSelector";
import {NumberInputWithLabel} from "./components/input/NumberInputWithLabel";
import {CheckBoxWithDescription} from "./components/input/CheckBoxWithDescription";

function App() {
    // @ts-ignore
    return (
        <div className="container p-3">
            <CitiesSelector />

            <div className="row">
                <div className="col-md-6 pt-3">
                    <NumberInputWithLabel label={'Steepness (α)'} min={0} max={90} placeHolder={'Insert steepness...'}   units={'°'}/>
                </div>
                <div className="col-md-6 pt-3">
                    <NumberInputWithLabel label={'Roof length (sl)'} min={0} max={1000}
                                          placeHolder={'Insert roof length...'} units={'m'} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <NumberInputWithLabel label={'Roof width (l)'} min={0} max={90} placeHolder={'Insert roof width...'}   units={'m'}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription  placeHolder={'1.5 safety coefficient'}/>
                </div>
            </div>
        </div>
    );
}


export default App;
