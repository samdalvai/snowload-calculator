import {expect} from 'chai';
import {IsValidProvince, IsValidZip} from "../functions/validation/cityInputValidation";

describe('testing city input validation functions', () => {
    it('zip code with 5 numeric characters should be valid', () => {
        expect(IsValidZip("12345")).equal(true)
    });

    it('zip code with 4 numeric characters and one non numeric character should not be valid', () => {
        expect(IsValidZip("1234b")).equal(false)
    });

    it('zip code with 4 numeric characters should not be valid', () => {
        expect(IsValidZip("1234")).equal(false)
    });

    it('province with only alphabetic characters and length 2 should be valid', () => {
        expect(IsValidProvince("TN")).equal(true)
        expect(IsValidProvince("Tn")).equal(true)
        expect(IsValidProvince("tN")).equal(true)
        expect(IsValidProvince("tn")).equal(true)
    });

    it('province with only alphabetic characters and longer than 2 should be valid', () => {
        expect(IsValidProvince("TNS")).equal(false)
    });

    it('province with only alphabetic characters and shorter than 2 should be valid', () => {
        expect(IsValidProvince("T")).equal(false)
    });

    it('province with numeric values should not be valid', () => {
        expect(IsValidProvince("T1")).equal(false)
    });

});