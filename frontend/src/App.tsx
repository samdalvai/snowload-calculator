import React, {useState} from 'react';
import './App.css';
import {useApiGet} from "./functions/useApiHook";
import {SearchField} from "./components/SearchField";
import {CitiesList} from "./components/CitiesList";

function App() {
    const [url, setUrl] = useState<string>('/cities/namecontains/xxxxx')
    const {data} = useApiGet(url);

    const updateUrl = (search: string) => {
        if (search !== "") {
            console.log('URL: ' + '/cities/namecontains/' + search)
            setUrl('/cities/namecontains/' + search);
        }
    }

    return (
        <div className="container p-2">
            <SearchField onSearch={updateUrl} placeHolder={'Search'}/>
            <CitiesList  cities={data}/>
        </div>
    );
}

export default App;
