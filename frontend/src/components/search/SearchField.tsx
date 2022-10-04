import {useState} from "react";
import {Callback, StringCallBack} from "../../functions/callbacks";
import {AddButton} from "../button/AddButton";
import {DeleteButton} from "../button/DeleteButton";

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
                <DeleteButton disabled={search === ''} onDelete={resetSearch} />
                <AddButton  onAdd={() => {
                    onAddCity();
                    resetSearch()
                }} tooltip={'Click to add a new city'}/>
            </div>
        </div>
    )
}

