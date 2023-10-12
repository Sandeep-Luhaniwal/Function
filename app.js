let a = [4, 20, 13, 34, 32]
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
document.getElementById("question1").innerHTML = sum;

function stringrever(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const string = prompt("Ans in Q2 enter a string value & reverse:")
const result = stringrever(string);
document.getElementById("question2").innerHTML = result;

function isEven(n) {
    return (n % 2 == 0);
}
let n = 2003;
isEven(n) ? document.getElementById("question3").innerHTML = "Even" : document.getElementById("question3").innerHTML = "Odd";

function largest(lar) {
    let i;
    let max = lar[0];
    for (i = 1; i < lar.length; i++) {
        if (lar[i] > max)
            max = lar[i];
    }
    return max;
}
let lar = [49, 55, 2, 46, 54];
document.getElementById("question4").innerHTML = largest(lar);

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
let num = 5;
document.getElementById("question5").innerHTML = "Factorial of " + num + " is " + factorial(num);



let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
document.getElementById("question7").innerHTML = removeDuplicates(arr);
console.log(removeDuplicates(arr));




var i = 2;

function isPrime(n) {
    if (n == 0 || n == 1) {
        return false;
    }
    if (n == i) return true;
    if (n % i == 0) {
        return false;
    }
    i++;
    return isPrime(n);
}
isPrime(35) ? document.getElementById("question9").innerHTML = " prime\n" : document.getElementById("question9").innerHTML = " false\n";

let b = 4562;
function reverseDigits(b) {
    let rev_num = 0;
    while (b > 0) {
        rev_num = rev_num * 10 + b % 10;
        b = Math.floor(b / 10);
    }
    return rev_num;
}
document.getElementById("question10").innerHTML = reverseDigits(b);



let Aarr = [111, 13, 25, 9, 34, 1];
let nU = arr.length;
arr.sort();

document.write("smallest element is " + Aarr[0], "</br>");
document.write("second smallest element is " + Aarr[1], "</br>"); 