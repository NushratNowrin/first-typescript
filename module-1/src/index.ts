const course : string = "Next level web development";
console.log(course);

// Basic Data Type
// -----------------------------------------------------------------------
// String
// Implicit Data Type
let firstName = "Nushrat";

// Explicit Data Type
let firstName2 : string = "Nushrat";

// Number
let roll : number = 1718048;

// Boolean
let isGraduated : boolean = true;

// null
let nothing : null = null;

// undefined
let bolahoyni : undefined = undefined;

// any
let d;

d = 1;
d = 'abc';
d = true;
d = undefined;
d = null;

console.log(d);

// Array
let friends : string[] = ['Hasib', 'Hasan'];
let rolls : number[] = [1, 3];

// Tuple
let ageName : [number, string, boolean] = [20, "Mr. X", true];

// Object
const user: {
    company: "Programming Hero" //Literal Types. The value act as a type, and can't be changed
    firstName: string;
    middleName: string;
    lastName?: string; //optional type: string | undefined
    readonly Husband: string; // Access Modifier. Husband can't be changed
} = {
    company: "Programming Hero",
    firstName: "Nushrat",
    middleName: "Jahan",
    Husband: "Hasan Ali"
}





