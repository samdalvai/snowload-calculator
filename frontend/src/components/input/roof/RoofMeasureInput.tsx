import {InputWithLabel} from "../InputWithLabel";
import {CheckBoxWithDescription} from "../CheckBoxWithDescription";
import {StringCallBack} from "../../../functions/callbacks";

export const RoofMeasureInput = ({steepness, onSteepnessChange}: {steepness: string, onSteepnessChange: StringCallBack}) => {


    return (
        <div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Steepness (α)'} placeHolder={'Insert steepness...'} units={'°'} value={steepness} onChange={onSteepnessChange} />
                </div>
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof length (sl)'} placeHolder={'Insert roof length...'} units={'m'} value={''} onChange={() => null}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pt-3">
                    <InputWithLabel label={'Roof width (l)'} placeHolder={'Insert roof width...'} units={'m'} value={''} onChange={() => null}/>
                </div>
                <div className="col-md-6 pt-3">
                    <CheckBoxWithDescription placeHolder={'1.5 safety coefficient'}/>
                </div>
            </div>
        </div>
    )
}