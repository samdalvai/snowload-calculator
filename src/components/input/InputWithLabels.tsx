import {StringCallBack} from "../../functions/callbacks";
import {Label} from "./Lable";

export const InputWithTwoLabels = ({leftLabel, rightLabel, valid, placeHolder, value, onChange}: {
    leftLabel: string, rightLabel: string, valid: boolean, placeHolder: string, value: string, onChange: StringCallBack
}) => {
    return (
        <div className="input-group shadow-sm rounded">
            <Label text={leftLabel} minWidth={"60%"} />
            <Input value={value}
                   placeHolder={placeHolder}
                   valid={valid}
                   type={"number"}
                   onChange={onChange}/>
            <Label text={rightLabel} minWidth={"15%"} />
        </div>
    )
}

export const InputWithLeftLabel = ({leftLabel, valid, placeHolder, value, onChange}: {
    leftLabel: string, valid: boolean, placeHolder: string, value: string, onChange: StringCallBack
}) => {
    return (
        <div className="input-group shadow-sm rounded">
            <Label text={leftLabel} minWidth={"50%"} />
            <Input value={value}
                   placeHolder={placeHolder}
                   valid={valid}
                   onChange={onChange}/>
        </div>
    )
}

export const Input = ({value, type, placeHolder, valid, onChange}:
                          { value: string, type?: "text" | "number", placeHolder: string, valid: boolean, onChange: StringCallBack }) => {
    return (
        <>
            <input type={type ? type : "text"}
                   className={valid ? "form-control" : "form-control is-invalid"}
                   value={value}
                   onChange={e => onChange(e.target.value)}
                   placeholder={placeHolder} required/>
        </>
    )
}