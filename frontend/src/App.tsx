import React, {useState} from 'react';
import './App.css';
import {useApiGet} from "./functions/useApiHook";
import {City} from "./functions/types";
import {SearchField} from "./components/SearchField";

function App() {
    const {data} = useApiGet('/cities/namecontains/Bolzano');

    return (
        <div className="container p-2">
            <SearchField onSearch={console.log} placeHolder={'Search'}/>
        </div>
    );
}

export default App;
