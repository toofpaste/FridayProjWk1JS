import { SpaceCalc } from './../src/SpaceAge.js';

describe('SpaceCalc', function() {

    it('should return birthday current day - birthdate day as a 1 or 0 if it has passed or 0 if it has not', function() {
        let birthDate = new SpaceCalc(2018, 5, 30);
        expect(birthDate.getDays(30)).toEqual(1);
    });
    it('2: should return birthday current day - birthdate day as a 0 or 1  if it has passed or 0 if it has not', function() {
        let birthDate = new SpaceCalc(2019, 6, 30);
        expect(birthDate.getDays(30)).toEqual(0);
    });
    it('it should return a 1 if current month is after birth month', function() {
        let birthDate = new SpaceCalc(2018, 4, 30);
        expect(birthDate.getMonth(4)).toEqual(1);
    });
    it('it should return a 0 if current month is before birth month', function() {
        let birthDate = new SpaceCalc(2019, 6, 30);
        expect(birthDate.getMonth(6)).toEqual(0);
    });

    it('it should return users age on earth', function() {
        let birthDate = new SpaceCalc(1993, 11, 13);
        let bDay = (birthDate.getDays());
        let bMonth = (birthDate.getMonth());
        let bYear = (birthDate.getYear());
        expect(birthDate.getAge(bDay, bMonth, bYear)).toEqual(25);
    });

    it('it should return users age on mercury', function() {
        let birthDate = new SpaceCalc(1993, 11, 13);
        let bDay = (birthDate.getDays());
        let bMonth = (birthDate.getMonth());
        let bYear = (birthDate.getYear());
        let trueAge = birthDate.getAge(bDay, bMonth, bYear);
        expect(birthDate.printAgeMer(trueAge)).toEqual("You Are 104 years old on Mercury");
    });
    it('it should return users age on venus', function() {
        let birthDate = new SpaceCalc(1993, 11, 13);
        let bDay = (birthDate.getDays());
        let bMonth = (birthDate.getMonth());
        let bYear = (birthDate.getYear());
        let trueAge = birthDate.getAge(bDay, bMonth, bYear);
        expect(birthDate.printAgeVenus(trueAge)).toEqual("You Are 40 years old on Venus");
    });
    it('it should return users age on mars', function() {
        let birthDate = new SpaceCalc(1993, 11, 13);
        let bDay = (birthDate.getDays());
        let bMonth = (birthDate.getMonth());
        let bYear = (birthDate.getYear());
        let trueAge = birthDate.getAge(bDay, bMonth, bYear);
        expect(birthDate.printAgeMars(trueAge)).toEqual("You Are 13 years old on Mars");
    });
    it('it should return users age on jupiter', function() {
        let birthDate = new SpaceCalc(1993, 11, 13);
        let bDay = (birthDate.getDays());
        let bMonth = (birthDate.getMonth());
        let bYear = (birthDate.getYear());
        let trueAge = birthDate.getAge(bDay, bMonth, bYear);
        expect(birthDate.printAgeJupiter(trueAge)).toEqual("You Are 2 years old on Jupiter");
    });

});