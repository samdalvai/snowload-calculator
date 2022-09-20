import React, {useState} from 'react';
import './App.css';
import {useApiGet} from "./functions/useApi";
import {SearchField} from "./components/SearchField";
import {CitiesList} from "./components/CitiesList";
import {useCities} from "./functions/useCities";

function App() {
    const {cities, loading} = useCities();

    return (
        <div className="container p-2">
            <SearchField onSearch={() => null} placeHolder={'Search'}/>
            <CitiesList cities={cities}/>
        </div>
    );
}

export default App;
