export const InputWithLabel = ({label, placeHolder}: {label: string, placeHolder: string
}) => {
    return (
        <div className="input-group">
            <label className="input-group-text">{label}</label>
            <input type="text" className="form-control" placeholder={placeHolder}/>
        </div>
    )
}