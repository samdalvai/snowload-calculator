export const CheckBoxWithDescription = ({placeHolder}: {placeHolder: string}) => {
    return (
        <div className="input-group">
            <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" value=""/>
            </div>
            <input type="text" className="form-control" placeholder={placeHolder} disabled/>
        </div>
    )
}