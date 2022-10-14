export const errorArrayControl = (value) => {
    if (!Array.isArray(value)) {
        throw new Error('Error: Parametro no permitido');
    }
};
export const errorFunctionControl = (value) => {
    if (typeof value !== 'function') {
        throw new Error('Error: Este parametro no es una funcion');
    }
};

export const errorValueControl = (value) => {
    if (value === undefined || value === null) {
        throw new Error('Error: Parametro no valido');
    }
};
