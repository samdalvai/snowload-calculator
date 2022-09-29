import {expect} from 'chai';
import {
    isInputBetweenLowerAndUpperBound,
    isStringNumber,
    isValidSteepness
} from "../functions/validation/stringValidation";

describe('testing input validation functions', () => {
    it('string with integer number should be a number', () => {
        expect(isStringNumber("123")).equal(true)
    });

    it('string with alphabetic characters should not be a number', () => {
        expect(isStringNumber("1a23")).equal(false)
    });

    it('string with float number should be a number', () => {
        expect(isStringNumber("123.1")).equal(true)
    });

    it('string with too many separators should not be a number', () => {
        expect(isStringNumber("123.1.1")).equal(false)
    });

    it('string with comma and dot separator should not be a number', () => {
        expect(isStringNumber("123.1,1")).equal(false)
    });

    it('integer steepness should be valid', () => {
        expect(isValidSteepness("20")).equal(true)
    });

    it('float steepness should be valid', () => {
        expect(isValidSteepness("20.5")).equal(true)
    });

    it('steepness outside of lower and upper bound should not be valid', () => {
        expect(isValidSteepness("-0.5")).equal(false)
        expect(isValidSteepness("90.5")).equal(false)
    });

    it('steepness with non numeric characters should not be valid', () => {
        expect(isValidSteepness("10.5a")).equal(false)
        expect(isValidSteepness("45.,1")).equal(false)
    });

    it('string with number outside of bound should not be valid', () => {
        expect(isInputBetweenLowerAndUpperBound("0.01",0.5,1.0)).equal(false)
        expect(isInputBetweenLowerAndUpperBound("0.01",-0.1,0.0)).equal(false)
    });

    it('string with number inside bound should not be valid', () => {
        expect(isInputBetweenLowerAndUpperBound("0.5",0.0,1.0)).equal(true)
        expect(isInputBetweenLowerAndUpperBound("-0.01",-0.1,0.0)).equal(true)
    });

});