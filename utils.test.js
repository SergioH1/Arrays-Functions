import {
    errorArrayControl,
    errorFunctionControl,
    errorValueControl,
} from './utils.js';
describe('Given the Function errorArrayControl', () => {
    describe('When it is run with no array', () => {
        test('Then it should return a error ', () => {
            const valueTest = '';
            expect(() => {
                errorArrayControl(valueTest);
            }).toThrow();
        });
    });
});
describe('Given the Function errorFunctionControl', () => {
    describe('When it is run with no function type', () => {
        test('Then it should return a error ', () => {
            const valueTest = '';
            expect(() => {
                errorFunctionControl(valueTest);
            }).toThrow();
        });
    });
});
describe('Given the Function errorValueControl', () => {
    describe('When it is run with undefined', () => {
        test('Then it should return a error ', () => {
            const valueTest3 = undefined;
            expect(() => {
                errorValueControl(valueTest3);
            }).toThrow();
        });
    });
    describe('When it is run with  null', () => {
        test('Then it should return a error ', () => {
            const valueTest4 = null;
            expect(() => {
                errorValueControl(valueTest4);
            }).toThrow();
        });
    });
});
