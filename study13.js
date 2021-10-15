function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите значение");

        if (value === "" || value === null || !isFinite(value)) break;
        number.push(+value);

    }
    let sum = 0
:
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());