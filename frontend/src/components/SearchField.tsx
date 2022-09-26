import {useState} from "react";
import {StringCallBack} from "../functions/callbacks";

export const SearchField = ({placeHolder, onSearch}: { placeHolder: string, onSearch: StringCallBack }) => {
    const [search, setSearch] = useState<string>('');

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       placeholder={placeHolder}
                       onChange={event => {
                           onSearch(event.target.value)
                           setSearch(event.target.value)
                       }}
                       value={search}
                       aria-label="Search"/>
                {
                    search === '' ?
                        <button type="button"
                                className="btn btn-secondary disabled"
                                style={{width: '25%'}}>Delete</button>
                        :
                        <button type="button"
                                className="btn btn-secondary"
                                style={{width: '25%'}}
                                onClick={() => {
                                    setSearch('');
                                    onSearch('')
                                }}>Delete</button>
                }

            </div>
        </div>
    )
}