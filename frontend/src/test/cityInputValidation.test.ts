import {isValidAltitude, isValidProvince, isValidZip} from "../functions/validation/cityInputValidation";
const {expect} = require('chai');

describe('testing city input validation functions', () => {
    it('zip code with 5 numeric characters should be valid', () => {
        expect(isValidZip("12345")).equal(true)
    });

    it('zip code with 4 numeric characters and one non numeric character should not be valid', () => {
        expect(isValidZip("1234b")).equal(false)
    });

    it('zip code with 4 numeric characters should not be valid', () => {
        expect(isValidZip("1234")).equal(false)
    });

    it('province with only alphabetic characters and length 2 should be valid', () => {
        expect(isValidProvince("TN")).equal(true)
        expect(isValidProvince("Tn")).equal(true)
        expect(isValidProvince("tN")).equal(true)
        expect(isValidProvince("tn")).equal(true)
    });

    it('province with only alphabetic characters and longer than 2 should be valid', () => {
        expect(isValidProvince("TNS")).equal(false)
    });

    it('province with only alphabetic characters and shorter than 2 should be valid', () => {
        expect(isValidProvince("T")).equal(false)
    });

    it('province with numeric values should not be valid', () => {
        expect(isValidProvince("T1")).equal(false)
    });

    it('altitude with value between 0 and 3000 should be valid', () => {
        expect(isValidAltitude("500")).equal(true)
    });

    it('altitude with value below 0 or above 3000 should not be valid', () => {
        expect(isValidAltitude("-1")).equal(false)
        expect(isValidAltitude("3001")).equal(false)
    });

    it('empty altitude should not be valid', () => {
        expect(isValidAltitude("")).equal(false)
    });

});