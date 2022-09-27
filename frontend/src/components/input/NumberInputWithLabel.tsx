export const NumberInputWithLabel = ({label, placeHolder, units}: {label: string, placeHolder: string, units: string
}) => {
    return (
        <div className="input-group">
            <label className="input-group-text" style={{minWidth: "35%"}}>{label}</label>
            <input type="text" className="form-control" placeholder={placeHolder} required/>
            <label className="input-group-text" style={{minWidth: "10%"}}>{units}</label>
        </div>
    )
}