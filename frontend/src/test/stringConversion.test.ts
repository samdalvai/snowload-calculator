import {expect} from 'chai';
import {StringToFloatNumber, StringToIntNumber} from "../functions/conversion/stringConversion";

describe('testing string conversion functions for floating number', () => {

    it('string with integer number should be converted to float number', () => {
        expect(StringToFloatNumber("123")).equal(123.0)
    });

    it('string with float number should be converted to float number', () => {
        expect(StringToFloatNumber("123.1")).equal(123.1)
    });

    it('string with negative number should be converted to float negative number', () => {
        expect(StringToFloatNumber("-123.1")).equal(-123.1)
    });

    it('string with float number and comma separator should not be converted to float number', () => {
        expect(() => StringToFloatNumber("123,1")).to.throw("Unable to convert string \"123,1\" to floating number")
    });

    it('string with more than one separator should not be converted to float number', () => {
        expect(() => StringToFloatNumber("123.1.1")).to.throw("Unable to convert string \"123.1.1\" to floating number")
    });

    it('string with non numeric characters should not be converted to float number', () => {
        expect(() => StringToFloatNumber("123.1a")).to.throw("Unable to convert string \"123.1a\" to floating number")
    });

    it('empty string should not be converted to number', () => {
        expect(() => StringToFloatNumber("")).to.throw("Unable to convert string \"\" to floating number")
    });
});

describe('testing string conversion functions for integer number', () => {
    it('string with integer number should be converted to integer number', () => {
        expect(StringToIntNumber("123")).equal(123)
    });

    it('string with float number should be converted to integer number', () => {
        expect(StringToIntNumber("123.1")).equal(123)
    });

    it('string with negative number should be converted to integer negative number', () => {
        expect(StringToIntNumber("-123.1")).equal(-123)
    });

    it('string with float number and comma separator should not be converted to float number', () => {
        expect(() => StringToIntNumber("123,1")).to.throw("Unable to convert string \"123,1\" to integer number")
    });

    it('string with more than one separator should not be converted to float number', () => {
        expect(() => StringToIntNumber("123.1.1")).to.throw("Unable to convert string \"123.1.1\" to integer number")
    });

    it('string with non numeric characters should not be converted to float number', () => {
        expect(() => StringToIntNumber("123.1a")).to.throw("Unable to convert string \"123.1a\" to integer number")
    });

    it('empty string should not be converted to number', () => {
        expect(() => StringToIntNumber("")).to.throw("Unable to convert string \"\" to integer number")
    });

});