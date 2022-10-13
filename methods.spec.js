import { push, length, pop, map, shift, some, unshift } from './methods.js';

describe('Given push function', () => {
    describe('When it is run with 0', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, 0);
            expect(result).toBe(aData.length);
            expect(aData).toContain(0);
        });
    });
    describe('When it is run with array and undefined', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const result = push(aData, undefined);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and array', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = [];
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
    describe('When it is run with array and object', () => {
        test('Then it should return aData.length', () => {
            const aData = [];
            const aData2 = {};
            const result = push(aData, aData2);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given length function', () => {
    describe('When it is run [3]', () => {
        test('Then it should return aData.length', () => {
            const aData = [3];
            const result = length(aData);
            expect(result).toBe(aData.length);
        });
    });
});

describe('Given pop function', () => {
    describe('When it is run array', () => {
        test('Then it should return 9', () => {
            const array = [6, 9];
            const result = pop(array);
            expect(result).toBe(9);
        });
    });
    describe('When it is run array', () => {
        test('Then it should return array.length -1 ', () => {
            const array = [6, 9];
            const result = pop(array);
            expect(result).not.toContain(9);
        });
    });
    describe('When it is run []', () => {
        test('Then it should return undefon ', () => {
            const array = [6, 9];
            const result = pop(array);
            expect(result).not.toContain(9);
        });
    });
});

describe('Given map function', () => {
    describe('When receive [5, 10, 15], (i) => i * 10', () => {
        test('Then it should return [50, 100, 150]', () => {
            const param1 = [5, 10, 15];
            const param2 = (i) => i * 10;
            const result = map(param1, param2);
            expect(result).toContain(50);
            expect(result).toContain(100);
            expect(result).toContain(150);
        });
    });
    describe('When receive [5, 10, 15], (i) => i * 0', () => {
        test('Then it should return [0, 0, 0]', () => {
            const param1 = [5, 10, 15];
            const param2 = (i) => i * 0;
            const result = map(param1, param2);
            expect(result).toContain(0);
        });
    });
    describe('When receive [5, 10, 15], (i) => i * NaN', () => {
        test('Then it should return [0, 0, 0]', () => {
            const param1 = [5, 10, 15];
            const param2 = (i) => i * NaN;
            const result = map(param1, param2);
            expect(result).toContainEqual(NaN);
        });
    });
});
describe('Given shift function', () => {
    describe('When it is run with array [3,6,12,20]', () => {
        test('Then it should return removed item ', () => {
            const array2 = [3, 6, 12, 20];
            const result = shift(array2);
            expect(result).toBe(3);
        });
    });
    describe('When it is run with array []', () => {
        test('Then it should return removed item ', () => {
            const array2 = [];
            const result = shift(array2);
            expect(result).toBe(undefined);
        });
    });
});

describe('Given some function', () => {
    describe('When it is run with array2,function i>10', () => {
        test('Then it should return false ', () => {
            const array2 = [2, 3, 9, 0, 1];
            const param2 = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = some(array2, param2);
            expect(result).toBe(false);
        });
    });
    describe('When it is run with array2,function i>10', () => {
        test('Then it should return false ', () => {
            const array2 = [2, 3, 9, 11, 1];
            const param2 = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = some(array2, param2);
            expect(result).toBe(true);
        });
    });
});
describe('Given unshift function', () => {
    describe('When it is run with array,item', () => {
        test('Then it should return array.length  ', () => {
            const array2 = [2, 3, 9];
            const param2 = 15;
            const result = unshift(array2, param2);
            expect(result).toBe(4);
        });
        test('Then it should return array.length  ', () => {
            const array2 = [2, 3, 9];
            const param2 = 15;
            unshift(array2, param2);
            expect(array2).toContain(param2);
        });
    });
});
