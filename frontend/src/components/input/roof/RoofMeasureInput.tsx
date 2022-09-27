import {InputWithLabel} from "../InputWithLabel";
import {CheckBoxWithDescription} from "../CheckBoxWithDescription";

export const RoofMeasureInput = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Steepness (α)'} placeHolder={'Insert steepness...'} units={'°'}/>
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof length (sl)'} placeHolder={'Insert roof length...'} units={'m'}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof width (l)'} placeHolder={'Insert roof width...'} units={'m'}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription placeHolder={'1.5 safety coefficient'}/>
                </div>
            </div>
        </div>
    )
}