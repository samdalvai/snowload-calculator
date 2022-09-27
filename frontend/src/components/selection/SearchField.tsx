import {useState} from "react";
import {StringCallBack} from "../../functions/callbacks";
import {XIcon} from "@primer/octicons-react";

export const SearchField = ({placeHolder, onSearch, valid}: { placeHolder: string, onSearch: StringCallBack, valid: boolean }) => {
    const [search, setSearch] = useState<string>('');

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
                                onClick={() => {
                                    setSearch('');
                                    onSearch('')
                                }}><XIcon size={22}/></button>
                }

            </div>
        </div>
    )
}