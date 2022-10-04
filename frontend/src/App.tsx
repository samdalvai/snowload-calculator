import './App.css';
import {SnowloadCalculationForm} from "./components/form/SnowloadCalculationForm";
import {ReactElement, ReactNode} from "react";
import {IconProps, PlusIcon} from "@primer/octicons-react";
import {ButtonWithIcon} from "./components/button/ButtonWithIcon";

function App() {
    return (
        <div className="container p-3">
            <SnowloadCalculationForm onCompute={console.log}/>
        </div>
    );
}

export default App;