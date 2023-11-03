let someNumber = 69;

if (someNumber) {
    console.log("Liczba nie jest zerem")
}

let number1 = -1;
let number2 = -2;

if (!(number1 === number2)) {
    if (number1 > number2) {
        console.log("number2 jest za małe")
    }
    else {
        console.log("number2 jest za duże")
    }
}
else {
    console.log("Liczby są równe")
}

if (!(number1 > 0 && number2 > 0)) {
    console.log("ani number1 ani number2 nie jest większa niż 0");
}

let day = "Mittwoch";

switch (day) {
    case "Montag":
    case "Dienstag":
        console.log("Po weekendzie");
        break;
    case "Mittwoch":
    case "Donnerstag":
    case "Freitag":
        console.log("Niedługo weekend");
        break;
    default:
        console.log("Pijemy!");
}

let message = number1 > number2 ? "number1 jest większe" : "number1 nie jest większe";

console.log(message);


//Numbers
let x = "8"// x will now equal 8
typeof x // now on console you will see which type od data is x
console.log("x")
0.2 + 0.7 === 0.9
x.toFixed(3) // x will be cut to 3 numbers after comma
let liczba = NaN // NaN (not a number)
Math.round(x) // x will be rounded to the closest intiger number
Math.ceil(x) // x will be rounded to the closest higher itniger number
Math.floor(x) // x will be rounded to the closest lower itniger number
Math.floor(Math.random() * 6) // this line will chose random intiger number from 0 to 5
Number("5") // 5 will be treaten as number, not as a string
    + "69" // 5 will be treaten as number, not as a string
"10" + "10" === "1010" // this is how it works when you add two numbers as strings
10 % 3 === 1 // % is the rest of 10/3
5 ** 4 === 625 // ** means square
x += 6 // it will add 6 to x (can be used in loops)
5 !== 10 // 5 is not equal 10



// Strings
'"Hello" she said'; "\"Hello\" she said"; // different methods of showing sth in quote in string
"new\nline" // \n moves next writing to line underneath
"tabulator\ttabulator" // \t creates tabulator inside string
"one two \
three four";
"one two"
    + "three four"; // this two options let us divide code in two rows and the result will be in one row
let next = "How are you today?"
let message = "Hello babe!" + next; // two different values will be written in one string
x = 8;
x.toString(); x + ""// two methods to display 8 as string on console
let time = 8;
console.log(`I work ${time} hours a day.`) // template strings - allows you to merge strings and add values to strings
"outer haven".length // shows you how many letters are in the string
message.charAt(2) // it will show the second value of string "message"
message.charAt(string.length - 1) // last value from "message" string will be shown
message[3] // 3 value from "message" will appear on console
message.includes("babe") // checks if "message" includes string "babe"
message.startsWith("babe")
message.endsWith("babe")
message.indexOf("babe") // which place "babe" is in the string
message.lastIndexOf("babe") // checks last place, where "babe" appears in "message"
message.slice(2, 5) // slices "message" from 2nd to 5th value
message.trim() // all white signs disappear
message.toLowerCase() // all letters will change to big
message.toUpperCase() // all letters will change to small
message.replaceAll("b", "f") // replaces all b with f in "message"
message.replace("b", "f") // replaces only first b with f in "message"
message.replace(/b/i, "f") // size of letters doesn't matter
"Pieniądze".localeCompare("Hajs") // compares two strings which one is closer in the alphabet
"$".repeat(5) // "$$$$$"

// !!!Warning!!! In template strings we count from 0!!!

//Forms

let heightElement = document.querySelector(".form__field")
heightElement.value // shows value from certain line in code

heightElement.checked // shows if the radio input is checked
heightElement.checked = false // this way you can give value in forms
heightElement.click() // simulation of click; 
heightElement.focus() // gives focus; 
heightElement.blur() // deletes focus;

heightElement.addEventListener("input", () => {
    console.log(`Klient zażyczył sobie ${heightElement.value}`)
}) // console will show what have changed in the form

let heightElement = document.querySelector(".form")
heightElement.submit(); // submits form even when it's not filled
heightElement.reset(); // resets form

let body = document.documentElement // picks whole html
let body = document.body // picks only body from html

//BOOLEAN

let liczba = 101;

if (liczba < 100) {
console.log("Liczba poniżej 100");
} // checks if liczba is higher than 100 (boolean is default type of unknown)

let liczbaNieJestZerem = !!liczba; // thanks to the operator !! liczba is converted to boolean (true or false type)

//NULL

let zmienna = null; // null is the type of unknown (only one value can be returned: null)
typeof null === "object" // typeof can't return null

//UNDEFINED

let zmienna = undefined; // undefined is the type of unknown (only one value can be returned: undefined)
zmienna === undefined; // we can check if "zmienna" is undefined

//FUNKCJE

function double(number){
    return number * 2;
    let zmienna = 20; // this parameter cannot be changed outside of function "double"
} 

let double = number => number * 2; // the same as above, only shorter version

console.log(double(5)) // console will display doubled 5

let myNumber = 5;
console.log(double(myNumber)) // this will also work with the function double

function triple(number){
    const zmienna = 7; // this const value works only inside block "function triple"
    return number * 3; // after return function ends even if there is some code after
}

double(5) // function will display 10
let double = function (number){} // anonimous function;
let double = function name(number){} // function with a name

const zmienna = 7; // this const value works inside and outside the function
console.log(triple(zmienna));

let // variable that can be changed, most of the times "const" is used
const // variable that cannot be changed, used in most of cases
var // variable that can be used in whole function, outside of the block

ctrl + click // you can check what does certain function do