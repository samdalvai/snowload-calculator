export const NumberInputWithLabel = ({label, min, max, placeHolder}: {label: string, min: number, max: number, placeHolder: string
}) => {
    return (
        <div className="input-group">
            <label className="input-group-text" style={{minWidth: "35%"}}>{label}</label>
            <input type="number" min={min} max={max} className="form-control" placeholder={placeHolder} required/>
        </div>
    )
}