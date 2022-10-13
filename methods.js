export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

export function length(array) {
    return array.length;
}

export function pop(array) {
    if (array.length === 0) return undefined;

    const param = array[array.length - 1];
    array.length = array.length - 1;
    return param;
}

export function shift(arrayShift) {
    let counter = 0;
    const item = arrayShift[0];
    if (arrayShift.length === 0) return undefined;
    else {
        for (let i = 1; i < arrayShift.length; i++) {
            arrayShift[counter] = arrayShift[i];
            counter++;
        }
        pop(arrayShift);
        return item;
    }
}
export function unshift(array, item) {
    const counter = [item];
    for (let i = 0; i < array.length; i++) {
        push(counter, array[i]);
    }
    for (let i = 0; i < counter.length; i++) {
        array[i] = counter[i];
    }
    return array.length;
}

export function some(arraySome, myFunction) {
    for (let i = 0; i < arraySome.length; i++) {
        if (myFunction(arraySome[i])) return true;
    }
    return false;
}
export function map(array, myFunction) {
    const mapArray2 = [];
    for (let i = 0; i < array.length; i++) {
        push(mapArray2, myFunction(array[i]));
    }
    return mapArray2;
}

export function filter(array, myFunction) {
    const arrayFilter = [];
    for (let i = 0; i < array.length; i++) {
        if (myFunction(array[i])) {
            push(arrayFilter, array[i]);
        }
    }
    return arrayFilter;
}
