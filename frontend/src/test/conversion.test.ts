import {expect} from 'chai';
import {StringToNumber} from "../functions/conversion/conversion";

describe('testing string conversion functions', () => {

    it('string with integer number should be converted to number', () => {
        expect(StringToNumber("123")).equal(123.0)
    });

    it('string with float number should be converted to number', () => {
        expect(StringToNumber("123.1")).equal(123.1)
    });

    it('string with float number and comma separator should not be converted to number', () => {
        expect(() => StringToNumber("123,1")).to.throw("Unable to convert string \"123,1\" to number")
    });

    it('string with more than one separator should not be converted to number', () => {
        expect(() => StringToNumber("123.1.1")).to.throw("Unable to convert string \"123.1.1\" to number")
    });

    it('string with non numeric characters should not be converted to number', () => {
        expect(() => StringToNumber("123.1a")).to.throw("Unable to convert string \"123.1a\" to number")
    });

});