'use strict';
const x = document.querySelector("#num1");
const y = document.querySelector("#num2");
const result = document.querySelector("#result");
const display = document.querySelector("#display");
const plusBtn = document.querySelector("#plusBtn");

const getValues = () => {
    return [Number.parseFloat(x.value), Number.parseFloat(y.value)];
}

const printToHistory = (num1, num2, operator, result) => {
    const p = document.createElement("p");
    document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    p.appendChild(text);
    display.appendChild(p);
}

const addFunction = () => {
    const [x, y] = getValues();
    const computation = (x + y);
    result.value = computation;
    printToHistory(x, y, "+", computation)
}
const subtractFunction = () => {
    const [x, y] = getValues();
    const computation = (x - y);
    result.value = computation;
    printToHistory(x, y, "-", computation)
}
const timesFunction = () => {
    const [x, y] = getValues();
    const computation = (x * y);
    result.value = computation;
    printToHistory(x, y, "*", computation)
}
const divideFunction = () => {
    const [x, y] = getValues();
    const computation = (x / y);
    result.value = computation;
    printToHistory(x, y, "/", computation)
}

const resetValues = () => {
    x.value = "";
    y.value = "";
    result.value = "";
}

const resetField = () => {
    display.innerHTML = "";
}

