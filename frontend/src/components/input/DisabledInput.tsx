export const DisabledInput = ({placeHolder}: {placeHolder: string}) => {
    return (
        <input className="form-control"
               type="text"
               value={placeHolder}
               disabled/>
    )
}