import {
    push,
    length,
    pop,
    map,
    shift,
    some,
    unshift,
    filter,
    find,
    every,
    findIndex,
} from './array-functions.js';

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
            const aData = [1];
            const result = length(aData);
            expect(result).toBe(1);
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

    describe('When it is run []', () => {
        test('Then it should return undefon ', () => {
            const array = [];
            const result = pop(array);
            expect(result).toBe(undefined);
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
            expect(array2).not.toContain(3);
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
            const param2 = (i) => i * 0;
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
    describe('When it is run with array2 and 15', () => {
        test('Then it should return array.length  ', () => {
            const array2 = [2, 3, 9];
            const param2 = 15;
            const result = unshift(array2, param2);
            expect(result).toBe(4);
        });
        test('Then it should changes the array by entering the number 15', () => {
            const array2 = [2, 3, 9];
            const param2 = 15;
            unshift(array2, param2);
            expect(array2).toContain(param2);
        });
    });
});
describe('Given filter function ', () => {
    describe('When it is run with array,function', () => {
        test('Them it should return a new array ', () => {
            const array2 = [2, 3, 10, 23, 2, 15];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = filter(array2, myFunction);

            expect(result).toStrictEqual([23, 15]);
        });
    });
});
describe('Given find function', () => {
    describe('When it is run with array,function', () => {
        test(`Then it should return a first element that satisfies 
        the provided testing function`, () => {
            const array3 = [2, 3, 11, 23, 2, 15];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = find(array3, myFunction);
            expect(result).toBe(11);
        });
        test('Then it should return a undefined ', () => {
            const array3 = [2, 3, 1, 2, 2];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = find(array3, myFunction);
            expect(result).toBe(undefined);
        });
    });
});
describe('Given every function', () => {
    describe('When it is run with array,function ', () => {
        test('Them it should return true   ', () => {
            const array4 = [15, 12, 13, 12, 11];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = every(array4, myFunction);

            expect(result).toBe(true);
        });
    });
    describe('When it is run with array,function ', () => {
        test('Them it should return false ', () => {
            const array4 = [15, 12, 13, 8, 11];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = every(array4, myFunction);

            expect(result).toBe(false);
        });
    });
    describe('When it is run with [],function ', () => {
        test('Them it should return true ', () => {
            const array4 = [];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = every(array4, myFunction);

            expect(result).toBe(true);
        });
    });
});

describe('Given find function', () => {
    describe('When it is run with array,function', () => {
        test(`Then it should return a first position element that satisfies 
        the provided testing function`, () => {
            const array3 = [2, 3, 11, 23, 2, 15];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = findIndex(array3, myFunction);
            expect(result).toBe(2);
        });
        test('Then it should return a undefined ', () => {
            const array3 = [2, 3, 1, 2, 2];
            const myFunction = function isBiggerThan10(i) {
                return i > 10;
            };
            const result = findIndex(array3, myFunction);
            expect(result).toBe(-1);
        });
    });
});
