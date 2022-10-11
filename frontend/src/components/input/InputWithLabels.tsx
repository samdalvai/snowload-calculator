import {StringCallBack} from "../../functions/callbacks";

export const InputWithTwoLabels = ({leftLabel, rightLabel, valid, placeHolder, value, onChange}: {
    leftLabel: string, rightLabel: string, valid: boolean, placeHolder: string, value: string, onChange: StringCallBack
}) => {
    return (
        <div className="input-group shadow-sm rounded">
            <label className="input-group-text" style={{minWidth: "60%"}}>{leftLabel}</label>
            <Input value={value}
                   placeHolder={placeHolder}
                   valid={valid}
                   onChange={onChange}/>
            <label className="input-group-text" style={{minWidth: "15%"}}>{rightLabel}</label>
        </div>
    )
}

export const InputWithLeftLabel = ({leftLabel, valid, placeHolder, value, onChange}: {
    leftLabel: string, valid: boolean, placeHolder: string, value: string, onChange: StringCallBack
}) => {
    return (
        <div className="input-group shadow-sm rounded">
            <label className="input-group-text"
                   style={{minWidth: "50%"}}>{leftLabel}</label>
            <Input value={value}
                   placeHolder={placeHolder}
                   valid={valid}
                   onChange={onChange}/>
        </div>
    )
}

export const Input = ({value, placeHolder, valid, onChange}:
                          { value: string, placeHolder: string, valid: boolean, onChange: StringCallBack }) => {
    return (
        <>
            <input type="text"
                   className={valid ? "form-control" : "form-control is-invalid"}
                   value={value}
                   onChange={e => onChange(e.target.value)}
                   placeholder={placeHolder} required/>
        </>
    )
}