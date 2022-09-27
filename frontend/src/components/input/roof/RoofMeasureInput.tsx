import {InputWithLabel} from "../InputWithLabel";
import {CheckBoxWithDescription} from "../CheckBoxWithDescription";
import {Callback, StringCallBack} from "../../../functions/callbacks";

export const RoofMeasureInput = ({steepness, roofLength, roofWidth, coefficient, onSteepnessChange, onRoofLengthChange, onRoofWidthChange, onCoefficientChange}:
                                     {steepness: string, roofLength: string, roofWidth: string, coefficient: boolean
                                        onSteepnessChange: StringCallBack, onRoofLengthChange: StringCallBack, onRoofWidthChange: StringCallBack, onCoefficientChange: Callback}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Steepness (α)'} placeHolder={'Insert steepness...'} units={'°'} value={steepness} onChange={onSteepnessChange} />
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof length (sl)'} placeHolder={'Insert roof length...'} units={'m'} value={roofLength} onChange={onRoofLengthChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof width (l)'} placeHolder={'Insert roof width...'} units={'m'} value={roofWidth} onChange={onRoofWidthChange}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription placeHolder={'1.5 safety coefficient'} checked={coefficient} onChange={onCoefficientChange}/>
                </div>
            </div>
        </div>
    )
}