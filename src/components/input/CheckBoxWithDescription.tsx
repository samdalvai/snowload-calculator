import {Callback} from "../../functions/callbacks";

export const CheckBoxWithDescription = ({checked, placeHolder, onChange}: {checked: boolean, placeHolder: string, onChange: Callback}) => {
    return (
        <div className="input-group shadow-sm rounded">
            <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" checked={checked} onChange={onChange}/>
            </div>
            <input type="text" className="form-control" placeholder={placeHolder} disabled/>
        </div>
    )
}