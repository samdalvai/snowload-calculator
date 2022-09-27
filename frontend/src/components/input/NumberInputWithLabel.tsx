export const NumberInputWithLabel = ({label, min, max, placeHolder, units}: {label: string, min: number, max: number, placeHolder: string, units: string
}) => {
    return (
        <div className="input-group">
            <label className="input-group-text" style={{minWidth: "35%"}}>{label}</label>
            <input type="number" min={min} max={max} className="form-control" placeholder={placeHolder} required/>
            <label className="input-group-text" style={{minWidth: "10%"}}>{units}</label>
        </div>
    )
}