//задание 1

const returSmallNumber = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(returSmallNumber(8, 4));
console.log(returSmallNumber(6, 6));

//задание 2

let num = +prompt('Введите число');
const parityCheck = (num) => {
    if (num % 2 == 0) {
        return `${num} - четное число`;
    } else {
        return `${num} - нечетное число`;
    }
}
console.log(parityCheck(num));

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

const welcomeUser = () => {
    let userAge = +prompt('Сколько Вам лет?');
    userAge < 0 || isNaN(userAge) ? alert('Вы ввели неправильное значение') :
        userAge >= 0 && userAge < 13 ? alert('Привет, друг!') :
            alert('Добро пожаловать!');
}
welcomeUser();

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
        return 'Переданный параметр не является числом';
    } else {
        let result = numberAnswer**3;
        return `${numberAnswer} в кубе равен ${result}`;
    }
}
console.log(cubingNumber(numberAnswer));//вывести значение в консоль, если isNaN(numberAnswer);

for (let i = 0; i <= 10; i++) {
    console.log(cubingNumber(i));
  }










