import React, {useState} from 'react';
import './App.css';
import {useApiGet} from "./functions/useApiHook";
import {City} from "./functions/types";
import {SearchField} from "./components/SearchField";
import {CitiesList} from "./components/CitiesList";

function App() {
    const {data} = useApiGet('/cities/namecontains/Bolzano');

    const cities = data.slice(0,3);

    return (
        <div className="container p-2">
            <SearchField onSearch={console.log} placeHolder={'Search'}/>
            <CitiesList  elements={cities}/>
        </div>
    );
}

export default App;
