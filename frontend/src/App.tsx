import React from 'react';
import './App.css';
import {useApiGet} from "./functions/useApiHook";
import {City} from "./functions/types";

function App() {
    const { data } = useApiGet('/cities/namecontains/Bolzano');

    console.log(data);

    return (
        <div className="container">

        </div>
    );
}

export default App;
