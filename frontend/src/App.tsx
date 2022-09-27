import './App.css';
import {CitiesSearch} from "./components/selection/cities/CitiesSearch";
import {CitiesSelector} from "./components/selection/cities/CitiesSelector";
import {InputWithChangeableRightLabel, InputWithLabel} from "./components/input/InputWithLabel";
import {CheckBoxWithDescription} from "./components/input/CheckBoxWithDescription";

function App() {
    // @ts-ignore
    return (
        <div className="container p-3">
            <CitiesSelector />

            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithChangeableRightLabel label={'Steepness (α)'} placeHolder={'Insert steepness...'} units={['°','%']}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof length (sl)'} placeHolder={'Insert roof length...'} units={'m'} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof width (l)'} placeHolder={'Insert roof width...'} units={'m'}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription  placeHolder={'1.5 safety coefficient'}/>
                </div>
            </div>
        </div>
    );
}


export default App;
