export const Label = ({text, minWidth}: {text: string, minWidth: string}) => {
    return (
        <label className="input-group-text"
               style={{minWidth: minWidth}}>
            {text}
        </label>
    )
}