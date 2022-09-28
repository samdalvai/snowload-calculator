import {useState} from "react";
import {Callback, StringCallBack} from "../../functions/callbacks";
import {PlusIcon, XIcon} from "@primer/octicons-react";

export const SearchField = ({placeHolder, onSearch, onAddCity, valid}: { placeHolder: string, onSearch: StringCallBack, onAddCity: Callback, valid: boolean }) => {
    const [search, setSearch] = useState<string>('');

    const resetSearch = () => {
        setSearch('');
        onSearch('')
    }

    return (
        <div>
            <div className="input-group">
                <input type="text"
                       className={valid ? "form-control" : "form-control is-invalid"}
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
                                style={{width: '15%'}}><XIcon size={22}/></button>
                        :
                        <button type="button"
                                className="btn btn-secondary"
                                style={{width: '15%'}}
                                onClick={resetSearch}>
                            <XIcon size={22}/></button>
                }
                <button type="button"
                        className="btn btn-primary"
                        data-bs-toggle="tooltip" data-bs-placement="top" title="Click to add a new city"
                        style={{width: '15%'}}
                        onClick={
                    () => {
                        onAddCity();
                        resetSearch();
                    }}
                ><PlusIcon size={22}/></button>
            </div>
        </div>
    )
}
