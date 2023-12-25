"use strict";
{
    const course = "Next level web development";
    // console.log(course);
    // Basic Data Type
    // -----------------------------------------------------------------------
    // String
    // Implicit Data Type
    let firstName = "Nushrat";
    // Explicit Data Type
    let firstName2 = "Nushrat";
    // Number
    let roll = 1718048;
    // Boolean
    let isGraduated = true;
    // null
    let nothing = null;
    // undefined
    let bolahoyni = undefined;
    // any
    let d;
    d = 1;
    d = "abc";
    d = true;
    d = undefined;
    d = null;
    // console.log(d);
    // Array
    let friends = ["Hasib", "Hasan"];
    let rolls = [1, 3];
    // Tuple
    let ageName = [20, "Mr. X", true];
    // Object
    const user = {
        company: "Programming Hero",
        firstName: "Nushrat",
        middleName: "Jahan",
        Husband: "Hasan Ali",
    };
    // Function
    // Normal Function
    function add(num1, num2) {
        return num1 + num2;
    }
    const addNumber = add(3, 3);
    // console.log(addNumber);
    // Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    addArrow(2, 3);
}
// Object
const poorUser = {
    name: "Nushrat",
    balance: 100,
    addBalance(num) {
        return `My current balance is ${this.balance + num}`;
    },
};
const total = poorUser.addBalance(2000);
// console.log(total);
// Map
const arr = [1, 2, 3];
const newArr = arr.map((x) => x * x);
// console.log(newArr);
// Spread Operator
const vowel1 = ['a', 'e', 'i'];
const vowel2 = ['o', 'u'];
const vowel = [...vowel1, ...vowel2];
const student1 = {
    name: "Nushrat",
    age: 25,
    dept: "ICT",
};
const add = (num1, num2) => num1 + num2;
const user1 = {
    name: "Nushrat",
    gender: "female",
    blood: "O+"
};
// ts-node-dev --respawn --transpile-only .\module-1\src\index.ts
