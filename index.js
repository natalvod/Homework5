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
let userAge = +prompt('Сколько Вам лет?');
const welcomeUser = (userAge) => {
    userAge < 0 || isNaN(userAge) ? alert('Вы ввели неправильное значение') :
        userAge >= 0 && userAge < 13 ? alert('Привет, друг!') :
            alert('Добро пожаловать!');
}
welcomeUser(userAge);

//задание 5

const meaning1 = prompt('Введите первое число');
const meaning2 = prompt('Введите второе число');
const checkingNumber = (meaning1, meaning2) => {
if(isNaN(meaning1) || isNaN(meaning2)) {
    return alert('Одно или несколько значений не являются числом');
} else {
    let multNumbers = meaning1 * meaning2;
    return alert(`${meaning1} * ${meaning2} = ${multNumbers}`);
}
}
checkingNumber(meaning1, meaning2);

//задание 6

let numberAnswer = prompt('Введите число от 1 до 10 включительно');
const cubingNumber = (numberAnswer) => {
    if (isNaN(numberAnswer)) {
        return alert('Переданный параметр не является числом');
    } else if (numberAnswer >= 1 && numberAnswer <= 10) {
        let result = numberAnswer**2;
        return alert(`${numberAnswer} в кубе равен ${result}`);
    } else {
        alert('Необходимо ввести число от 1 до 10 включительно');
    }
}
cubingNumber(numberAnswer);









