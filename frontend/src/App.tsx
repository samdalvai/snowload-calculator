import React, {useState} from 'react';
import './App.css';
import {SearchField} from "./components/SearchField";
import {CitiesList} from "./components/CitiesList";
import {useCities} from "./functions/useCities";
import {CitiesSearch} from "./components/CitiesSearch";

function App() {
    const {cities, loading} = useCities();


    return (
        <div className="container p-2">
            <CitiesSearch />
        </div>
    );
}

export default App;
