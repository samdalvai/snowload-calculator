export const DisabledInput = ({placeHolder}: {placeHolder: string}) => {
    return (
        <input className="form-control shadow-sm rounded"
               type="text"
               value={placeHolder}
               disabled/>
    )
}