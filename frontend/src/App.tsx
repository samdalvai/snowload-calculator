import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {useApiGet} from "./functions/useApiHook";

function App() {
    const { data } = useApiGet('/cities/namecontains/Bolzano');

    console.log(data);

    return (
        <div className="container">

        </div>
    );
}

export default App;
