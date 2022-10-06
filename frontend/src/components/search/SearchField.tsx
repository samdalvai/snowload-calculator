import {useState} from "react";
import {Callback, StringCallBack} from "../../functions/callbacks";
import {AddButton} from "../button/AddButton";
import {DeleteButton} from "../button/DeleteButton";
import {Input} from "../input/InputWithLabels";

export const SearchField = ({placeHolder, onSearch, onAdd, valid}:
                                { placeHolder: string, onSearch: StringCallBack, onAdd: Callback, valid: boolean }) => {
    const [search, setSearch] = useState<string>('');

    const resetSearch = () => {
        setSearch('');
        onSearch('')
    }

    return (
        <div>
            <div className="input-group shadow-sm rounded">
                <Input value={search}
                       placeHolder={placeHolder}
                       valid={valid}
                       onChange={e => {
                           onSearch(e)
                           setSearch(e)
                       }}/>
                <DeleteButton disabled={search === ''} onDelete={resetSearch}/>
                <AddButton onAdd={() => {
                    onAdd();
                    resetSearch()
                }} tooltip={'Click to add a new city'}/>
            </div>
        </div>
    )
}