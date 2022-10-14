import {
    errorArrayControl,
    errorFunctionControl,
    errorValueControl,
} from './utils';

export function push(value, item) {
    errorArrayControl(value);
    value[value.length] = item;
    return value.length;
}

export function length(value) {
    errorArrayControl(value);
    let counter = 0;

    value.forEach(() => {
        counter++;
    });
    return counter;
}

export function pop(value) {
    errorArrayControl(value);
    if (value.length === 0) return undefined;

    const param = value[value.length - 1];
    value.length = value.length - 1;
    return param;
}

export function shift(value) {
    errorArrayControl(value);
    let counter = 0;
    const item = value[0];
    if (value.length === 0) return undefined;

    for (let i = 1; i < value.length; i++) {
        value[counter] = value[i];
        counter++;
    }
    pop(value);
    return item;
}
export function unshift(value, item) {
    errorArrayControl(value);
    errorValueControl(item);
    const counter = [item];
    for (let i = 0; i < value.length; i++) {
        push(counter, value[i]);
    }
    for (let i = 0; i < counter.length; i++) {
        value[i] = counter[i];
    }
    return value.length;
}

export function some(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);
    for (let i = 0; i < value.length; i++) {
        if (myFunction(value[i])) return true;
    }
    return false;
}
export function map(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);
    const mapArray2 = [];
    for (let i = 0; i < value.length; i++) {
        push(mapArray2, myFunction(value[i]));
    }
    return mapArray2;
}

export function filter(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);
    const arrayFilter = [];
    for (let i = 0; i < value.length; i++) {
        if (myFunction(value[i])) {
            push(arrayFilter, value[i]);
        }
    }
    return arrayFilter;
}
export function find(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);

    for (let i = 0; i < value.length; i++) {
        if (myFunction(value[i])) {
            return value[i];
        }
    }
    return undefined;
}
export function every(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);
    if (value.length === 0) return true;
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        if (myFunction(value[i])) {
            count++;
        }
        if (value.length === count) return true;
    }

    return false;
}
export function findIndex(value, myFunction) {
    errorArrayControl(value);
    errorFunctionControl(myFunction);

    for (let i = 0; i < value.length; i++) {
        if (myFunction(value[i])) {
            return i;
        }
    }
    return -1;
}
