import {StringCallBack} from "../functions/types";

export const SearchField = ({ placeHolder, onSearch }: { placeHolder: string, onSearch: StringCallBack }) => {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       placeholder={placeHolder}
                       onChange={event => onSearch(event.target.value)}
                       aria-label="Search"
                       aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}