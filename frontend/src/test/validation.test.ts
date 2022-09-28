import {expect} from 'chai';
import {IsStringNumber} from "../functions/validation/inputValidation";

describe('testing input validation functions', () => {
    it('string with integer number should be a number', () => {
        expect(IsStringNumber("123")).equal(true)
    });

    it('string with alphabetic characters should not be a number', () => {
        expect(IsStringNumber("1a23")).equal(false)
    });


});