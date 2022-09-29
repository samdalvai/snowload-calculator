import {useState} from "react";
import {Callback, StringCallBack} from "../../functions/callbacks";
import {PlusIcon, XIcon} from "@primer/octicons-react";
import {AddButton} from "../button/AddButton";

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
                <AddButton  onAdd={() => {
                    onAddCity();
                    resetSearch()
                }} tooltip={'Click to add a new city'}/>
            </div>
        </div>
    )
}

