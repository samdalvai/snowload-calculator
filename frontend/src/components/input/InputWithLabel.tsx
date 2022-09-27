import {useState} from "react";
import {StringCallBack} from "../../functions/callbacks";

export const InputWithLabel = ({label, placeHolder, units, initialValue, onChange}: {
    label: string, placeHolder: string, units: string, initialValue: string, onChange: StringCallBack
}) => {
    const [value, setValue] = useState<string>(initialValue)

    return (
        <div className="input-group shadow-sm rounded">
            <label className="input-group-text" style={{minWidth: "45%"}}>{label}</label>
            <input type="text" className="form-control" value={value}
                   onChange={event => {
                       setValue(event.target.value)
                       onChange(event.target.value)
                   }} placeholder={placeHolder} required/>
            <label className="input-group-text" style={{minWidth: "12.5%"}}>{units}</label>
        </div>
    )
}


// Currently not used by the application, to be used in case we want to be able to change unit of measure, e.g. (° or %)
export const InputWithChangeableRightLabel = ({label, placeHolder, units}: {
    label: string, placeHolder: string, units: string[]
}) => {
    const [unitsIndex, setUnitsIndex] = useState<number>(0);
    const [unitsLabel, setUnitsLabel] = useState<string>(units[0]);
    const [rightLabelStyle, setRightLaberStyle] = useState<any>({minWidth: "10%"})

    const updateUnits = () => {
        const newIndex = (unitsIndex + 1) % units.length;
        setUnitsIndex(newIndex);
        setUnitsLabel(units[newIndex]);
    }

    return (
        <div className="input-group">
            <label className="input-group-text" style={{minWidth: "40%"}}>{label}</label>
            <input type="text" className="form-control" placeholder={placeHolder} required/>
            <label className="input-group-text" style={rightLabelStyle}
                   onClick={updateUnits}
                   onMouseEnter={() => setRightLaberStyle({minWidth: "10%", backgroundColor: "lightblue"})}
                   onMouseLeave={() => setRightLaberStyle({minWidth: "10%"})}
            >
                {unitsLabel}</label>
        </div>
    )
}