import {getRetainersQuantity} from "../functions/computation/retainerComputation";

const {expect} = require('chai');

describe('testing retainer quantities computation functions', () => {

    it('one row with 18 meters should return 6 retainers', () => {
        expect(getRetainersQuantity(18,1)).equal(6)
    });

    it('one row with 19 or 20 meters should return 7 retainers', () => {
        expect(getRetainersQuantity(19,1)).equal(7)
        expect(getRetainersQuantity(20,1)).equal(7)
    });

    it('two rows with 18 meters should return 12 retainers', () => {
        expect(getRetainersQuantity(18,2)).equal(12)
    });

    it('two rows with 19 or 20 meters should return 14 retainers', () => {
        expect(getRetainersQuantity(19,2)).equal(14)
        expect(getRetainersQuantity(20,2)).equal(14)
    });

    it('two rows with 20.9 meters should return 14 retainers', () => {
        expect(getRetainersQuantity(20.9,2)).equal(14)
    });

});