//задание 1

const ReturSmallNumber = (a, b) => {
    if (a > b) {
        return console.log(b);
    } else {
        return console.log(a);
    }
}
ReturSmallNumber(8, 4);
ReturSmallNumber(6, 6);

//задание 2

let num = +prompt('Введите число');
const parityCheck = (num) => {
    if (num % 2 == 0) {
        return console.log(`${num} - четное число`);
    } else {
        return console.log(`${num} - нечетное число`);
    }
}
parityCheck(num);

//задание 3.1

let number = +prompt('Введите еще одно число');
const outputSquareNumber = (number) =>
    console.log(number ** 2);

//задание 3.2

const returnSquareNumber = (number) => {
    return number ** 2;
}
outputSquareNumber(number);
console.log(returnSquareNumber(number));

//задание 4








