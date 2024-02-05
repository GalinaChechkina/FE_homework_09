// Функция, которая принимает цену товара и количество единиц, 
// а затем возвращает общую стоимость.
let cost = (price,quantity) => { return price*quantity };
console.log (`Total cost is ${cost(1000,5)}.`);

// Функция, которая определяет, является ли число четным и возвращает булевое значение.
function isEven (n) {
    // if(n % 2 === 0) { - создание функции избыточно
    //     return true;
    // } else { 
    //     return false;
    // }
    // return n % 2 ===0? true: false; - тернарный оператор возвращает истину, если остаток равен 0, ложь при 1
    return n % 2 ===0; //это тоже самое (тернарный оператор избыточен)
};
const n = 11;
console.log (`Number ${n} is even? - ${isEven(n)}`);

// Функция, которая принимает  строку и возвращает ее в обратном порядке.
function reverseString (message) {
    let newMessage = "";
    // for (let i = message.length-1; i >= 0; i--) {
    //     newMessage += message[i];
    // }
    for (e of message){ // этот способ лучше
         newMessage = e + newMessage;
    }
    return newMessage;
};
const message = "А роза упала на лапу Азора";
console.log (`String:  ${message}`);
console.log (`Reversed string:  ${reverseString(message)}`);

// Функция для конвертации температуры из градусов Цельсия в градусы Фаренгейта.
let tempFar = n => {return n * 9 / 5 + 32};
const temp = 35;
console.log (`Temperature ${temp} in Fahrenheit is  ${tempFar(temp)}.`);