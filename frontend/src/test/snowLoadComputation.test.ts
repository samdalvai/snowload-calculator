import {getGroundLoad, getLinearLoad, getRoofLoad} from "../functions/computation/snowLoadComputation";
import {City, Province} from "../functions/types";
import {defaultCity} from "../functions/defaultTypes";
const {expect} = require('chai');

describe('testing snowload computation functions', () => {
    const cityUnder200: City = {
        altitude: 194, name: "Trento", province: "TN", zip: "38121"
    }

    const cityOver200: City = {
        altitude: 500, name: "Trento", province: "TN", zip: "38121"
    }

    const provinceIA: Province = {
        load: 1.5, name: "Trento", shorthand: "TN", zone: "I-A"
    }

    const provinceIM: Province = {
        load: 1.5, name: "Trento", shorthand: "TN", zone: "I-M"
    }

    const provinceII: Province = {
        load: 1, name: "Trento", shorthand: "TN", zone: "II"
    }

    const provinceIII: Province = {
        load: 0.6, name: "Trento", shorthand: "TN", zone: "III"
    }

    it('snowload under 200 masl should return base load values', () => {
        expect(getGroundLoad(cityUnder200, provinceIA)).equal(1.5)
        expect(getGroundLoad(cityUnder200, provinceIM)).equal(1.5)
        expect(getGroundLoad(cityUnder200, provinceII)).equal(1)
        expect(getGroundLoad(cityUnder200, provinceIII)).equal(0.6)
    });

    it('snowload over 200 masl should have base load computed with precision of at least 0.001', () => {
        expect(Math.abs(getGroundLoad(cityOver200, provinceIA) - 2.046) < 0.001).equal(true)
        expect(Math.abs(getGroundLoad(cityOver200, provinceIM) - 2.281) < 0.001).equal(true)
        expect(Math.abs(getGroundLoad(cityOver200, provinceII) - 1.768) < 0.001).equal(true)
        expect(Math.abs(getGroundLoad(cityOver200, provinceIII) - 1.061) < 0.001).equal(true)
    });

    it('snowload on the roof should be computed with precision of at least 0.001', () => {
        expect(Math.abs(getRoofLoad(2.046) - 1.637) < 0.001).equal(true)
        expect(Math.abs(getRoofLoad(2.281) - 1.825) < 0.001).equal(true)
        expect(Math.abs(getRoofLoad(1.768) - 1.415) < 0.001).equal(true)
        expect(Math.abs(getRoofLoad(1.061) - 0.849) < 0.001).equal(true)
    });

    it('linear snowload should be computed with precision of at least 0.001', () => {
        expect(Math.abs(getLinearLoad(1.6365, {
            city: defaultCity(),
            coefficient: false,
            roofLength: 10,
            roofWidth: 15,
            steepness: 20

        }) - 5.2598) < 0.001).equal(true)

        expect(Math.abs(getLinearLoad(1.6365, {
            city: defaultCity(),
            coefficient: false,
            roofLength: 20,
            roofWidth: 15,
            steepness: 20

        }) - 10.5195) < 0.001).equal(true)

        expect(Math.abs(getLinearLoad(1.6365, {
            city: defaultCity(),
            coefficient: false,
            roofLength: 10,
            roofWidth: 15,
            steepness: 30

        }) - 7.0864) < 0.001).equal(true)
    });

    it('linear snowload with coefficient should be 1.5 times higher with precision of at least 0.001', () => {
        expect(Math.abs(getLinearLoad(1.6365, {
            city: defaultCity(),
            coefficient: true,
            roofLength: 10,
            roofWidth: 15,
            steepness: 20

        }) - 5.2598 * 1.5) < 0.001).equal(true)
    });

});