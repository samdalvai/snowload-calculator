import React from 'react';
import './App.css';
import {useApiGet} from "./functions/useApiHook";
import {City} from "./functions/types";

function App() {
    const { data } = useApiGet('/cities/namecontains/Bolzano');

    console.log(data);

    return (
        <div className="container">
            {
                data.map((city: City) => {
                    return <h1 key={city.zip}>{city.name}</h1>;
                })
            }
        </div>
    );
}

export default App;
